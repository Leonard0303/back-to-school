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
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <svg v-else-if="idx === 1" class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <svg v-else class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
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
