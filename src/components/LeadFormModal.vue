<script setup lang="ts">
import { computed, onUnmounted, watch } from 'vue'
import type { Lang } from '../translations'
import { translations } from '../translations'
import { useUTM } from '../composables/useUTM'
import { buildLeadFormUrl } from '../config/leadForm'

const props = defineProps<{ lang: Lang; open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const t = computed(() => translations[props.lang])
const { getUTMParams } = useUTM()

// Язык формы следует за языком сайта: ru → русская форма, kz → казахская.
// Настройки (адрес, продукт, коды языков) — в src/config/leadForm.ts
const formUrlWithUTM = computed(() => buildLeadFormUrl(props.lang, getUTMParams()))

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
  <div v-if="open" class="lead-modal-overlay" @click="emit('close')">
    <div class="lead-modal-card" @click.stop>
      <!-- Своя шапка: крестик живёт здесь и больше не наезжает на заголовок формы -->
      <div class="lead-modal-header">
        <span class="lead-modal-title">Back to School</span>
        <button
          class="lead-modal-close"
          :aria-label="t.modal.closeLabel"
          @click="emit('close')"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      <div class="lead-modal-body">
        <iframe class="lead-modal-iframe" :src="formUrlWithUTM" :title="t.modal.formTitle" />
      </div>
    </div>
  </div>
</template>
