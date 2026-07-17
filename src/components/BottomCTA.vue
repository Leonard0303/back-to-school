<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { Lang } from '../translations'
import { translations } from '../translations'
import finalHeroGadgets from '../imports/final-cta-desk-items.png'

const props = defineProps<{ lang: Lang }>()
const emit = defineEmits<{ 'open-form': [] }>()
const t = computed(() => translations[props.lang])

const sectionRef = ref<HTMLDivElement | null>(null)
const leftRef = ref<HTMLDivElement | null>(null)
const item1Ref = ref<HTMLDivElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.2 }
  )
  ;[sectionRef, leftRef, item1Ref].forEach(
    (r) => r.value && observer!.observe(r.value)
  )
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section id="final-cta" class="bottom-cta-section" style="
    background: linear-gradient(135deg, #001060 0%, #002299 40%, #0047D9 80%, #0055FF 100%);
    padding: 72px 40px;
    position: relative;
    overflow: hidden;
  ">
    <!-- Decorative bg circles -->
    <div style="
      position: absolute; top: -60px; right: 10%;
      width: 300px; height: 300px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,122,255,0.2) 0%, transparent 70%);
      pointer-events: none;
    "/>
    <div style="
      position: absolute; bottom: -40px; left: 5%;
      width: 200px; height: 200px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,80,200,0.15) 0%, transparent 70%);
      pointer-events: none;
    "/>

    <div style="max-width: 1200px; margin: 0 auto;">
      <div class="bottom-cta-grid" style="
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 60px;
        align-items: center;
      ">
        <!-- Left content -->
        <div
          ref="leftRef"
          class="fade-section bottom-cta-left"
        >
          <h2 style="
            color: white;
            font-size: clamp(26px, 3.4vw, 42px);
            font-weight: 800;
            line-height: 1.15;
            margin: 0 0 16px;
            letter-spacing: 0.02em;
          ">
            {{ t.cta.titleLine1 }}<br/>
            <span style="color: #FFC400;">{{ t.cta.titleHighlight }}</span> {{ t.cta.titleLine2 }}
          </h2>
          <p class="bottom-cta-desc" style="
            color: rgba(255,255,255,0.8);
            font-size: 16px;
            line-height: 1.65;
            margin: 0 0 36px;
            max-width: 480px;
          ">
            {{ t.cta.desc }}
          </p>
          <button
            class="cta-yellow bottom-cta-btn"
            @click="emit('open-form')"
            style="
              background: #FFC400;
              color: #001060;
              border: none;
              border-radius: 12px;
              padding: 18px 44px;
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 0.05em;
              cursor: pointer;
            "
          >
            {{ t.cta.btn }}
          </button>
        </div>

        <!-- Right — school items -->
        <div
          ref="item1Ref"
          class="fade-section bottom-cta-right"
          style="
            display: flex; align-items: center; justify-content: center;
            position: relative; min-width: 320px;
            transition-delay: 0.2s;
          "
        >
          <img
            :src="finalHeroGadgets"
            alt="Планшет и школьные принадлежности"
            class="bottom-cta-img"
            style="
              width: 100%;
              max-width: 760px;
              height: auto;
              display: block;
              filter: drop-shadow(0 16px 32px rgba(0,0,0,0.4));
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>
