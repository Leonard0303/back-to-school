<script setup lang="ts">
import { computed, onUnmounted, watch } from 'vue'
import type { Lang } from '../translations'
import { translations } from '../translations'
import { useUTM } from '../composables/useUTM'

const FORM_URL = 'https://qbox.telecom.kz/forms/#/1f1155849c774ba98f5049a7c383b5cf'

const props = defineProps<{ lang: Lang; open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const t = computed(() => translations[props.lang])
const { getUTMParams } = useUTM()

const formUrlWithUTM = computed(() => {
  const utms = getUTMParams()
  const params = new URLSearchParams()
  params.append('lang', props.lang === 'kz' ? 'kk' : props.lang === 'en' ? 'en' : 'ru')
  Object.entries(utms).forEach(([key, value]) => {
    if (value) params.append(key, value)
  })
  return `${FORM_URL}?${params.toString()}`
})

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }
)

onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    v-if="open"
    @click="emit('close')"
    style="
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: rgba(0, 8, 40, 0.65);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.2s ease;
    "
  >
    <div
      @click.stop
      style="
        position: relative;
        width: 100%;
        max-width: 480px;
        height: min(720px, 92vh);
        background: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 24px 80px rgba(0,0,0,0.4);
      "
    >
      <button
        @click="emit('close')"
        :aria-label="t.modal.closeLabel"
        style="
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(0,16,96,0.08);
          color: #001060;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        ✕
      </button>
      <iframe
        :src="formUrlWithUTM"
        :title="t.modal.formTitle"
        style="
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        "
      />
    </div>
  </div>
</template>
