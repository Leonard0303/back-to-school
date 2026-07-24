<script setup lang="ts">
import { computed } from 'vue'
import type { Lang } from '../translations'
import { translations } from '../translations'

const props = defineProps<{ lang: Lang }>()
const t = computed(() => translations[props.lang].plans)

const scrollToCTA = () => {
  document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="pricing" class="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4">

      <!-- Header section -->
      <div class="text-center mb-10 md:mb-14">
        <h2
          class="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-3"
          :class="{ uppercase: lang !== 'ru' }"
        >
          {{ t.title }}
        </h2>
        <p v-if="t.subtitle" class="text-sm md:text-lg font-normal text-gray-500 max-w-xl mx-auto">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Unified Card Container -->
      <div class="max-w-5xl mx-auto bg-white border-2 rounded-[28px] md:rounded-[36px] overflow-hidden shadow-xl flex flex-col md:flex-row" style="border-color: #016ed3;">

        <!-- LEFT COLUMN: Premium list (2/3) -->
        <div class="p-6 md:p-10 md:w-2/3 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-200">
          <div class="inline-block bg-[#FFD400] text-blue-950 text-xs font-black px-3 py-1 rounded-full mb-6 tracking-wide">
            {{ t.badge }}
          </div>

          <div class="space-y-6 md:space-y-8">
            <div v-for="(item, index) in t.features" :key="index" class="flex items-start gap-4">
              <div class="shrink-0 mt-1">
                <svg v-if="index === 0" class="w-6 h-6" style="color: #016ed3;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <line x1="12" y1="20" x2="12.01" y2="20" stroke-width="3" />
                </svg>
                <svg v-else-if="index === 1" class="w-6 h-6" style="color: #016ed3;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3" />
                </svg>
                <svg v-else-if="index === 2" class="w-6 h-6" style="color: #016ed3;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="3" />
                  <line x1="12" y1="20" x2="12" y2="20" stroke-width="3" />
                </svg>
                <svg v-else class="w-6 h-6" style="color: #016ed3;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-blue-950 uppercase text-[16px] md:text-[19px] mb-1">
                  {{ item.title }}
                </p>
                <p
                  class="text-gray-700 text-sm md:text-base leading-relaxed"
                  v-html="item.desc"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Pricing & Button (1/3) -->
        <div class="p-6 md:p-10 md:w-1/3 bg-blue-50/40 flex flex-col justify-between items-center text-center">
          <div class="my-auto">
            <div
              class="inline-block text-white text-[10px] md:text-[11px] font-medium uppercase tracking-wide px-4 py-1.5 rounded-full mb-5"
              style="background: linear-gradient(135deg, #016ed3 0%, #0087f0 100%); box-shadow: 0 6px 14px -4px rgba(1, 110, 211, 0.45); font-family: Helvetica, Arial, sans-serif !important;"
            >
              {{ t.contractBadge }}
            </div>

            <p class="text-xs uppercase tracking-widest font-extrabold mb-2" style="color: #016ed3;">
              {{ t.priceLabel }}
            </p>

            <div class="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">
              {{ t.price }} <span class="text-base font-medium text-gray-500">{{ t.period }}</span>
            </div>

            <p class="text-xs text-gray-400 mt-4 leading-relaxed max-w-[220px] mx-auto">
              {{ t.note }}
            </p>
          </div>

          <div class="w-full mt-6">
            <button
              @click="scrollToCTA"
              class="block w-full text-center text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg transition-all duration-200 active:scale-[0.98]"
              style="background: linear-gradient(135deg, #016ed3 0%, #0087f0 100%); box-shadow: 0 10px 20px -5px rgba(1, 110, 211, 0.35);"
            >
              {{ t.btn }}
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
