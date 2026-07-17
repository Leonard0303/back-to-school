<script setup lang="ts">
import { computed } from 'vue'
import type { Lang } from '../translations'
import { translations } from '../translations'

const props = defineProps<{ lang: Lang }>()
const t = computed(() => translations[props.lang])

const steps = computed(() => [
  { title: t.value.steps.step1Title, desc: t.value.steps.step1Desc },
  { title: t.value.steps.step2Title, desc: t.value.steps.step2Desc },
  { title: t.value.steps.step3Title, desc: t.value.steps.step3Desc },
])
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <h2 class="text-3xl md:text-5xl font-black text-center text-blue-950 mb-16 tracking-tight">
        {{ t.steps.title }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        <div v-for="(step, idx) in steps" :key="idx" class="flex flex-col items-center text-center relative group">
          <!-- Desktop Connecting Arrow (Hidden on Mobile) -->
          <div v-if="idx < 2" class="hidden md:block absolute top-10 -right-4 w-8 h-8 text-gray-300 z-10">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <!-- Modern SVG Icon Wrapper -->
          <div class="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
            <svg v-if="idx === 0" class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            <svg v-else-if="idx === 1" class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <svg v-else class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <!-- speed lines trailing behind the runner -->
              <path stroke-linecap="round" d="M1 7h3M0.5 10h3.5M1 13h2.5" opacity="0.55" />
              <!-- head -->
              <circle cx="10" cy="4.5" r="2" />
              <!-- box held out front -->
              <rect x="13" y="7.5" width="5.5" height="5" rx="0.6" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6.5l1.5 3.5 1.5-1" />
              <!-- torso -->
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6.5l-0.5 5" />
              <!-- back leg, bent -->
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 11.5l-3.5 2 1 3.5" />
              <!-- front leg, striding forward -->
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 11.5l2.5 3-1.5 3.5" />
            </svg>
          </div>

          <!-- Step Title -->
          <h3 class="text-xl font-bold text-blue-950 mb-3">
            {{ step.title }}
          </h3>

          <!-- Step Description -->
          <p class="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs">
            {{ step.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
