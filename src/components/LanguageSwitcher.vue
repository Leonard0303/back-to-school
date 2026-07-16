<script setup lang="ts">
import type { Lang } from '../translations'

defineProps<{ lang: Lang }>()
const emit = defineEmits<{ 'update:lang': [lang: Lang] }>()
</script>

<template>
  <div class="fixed top-[72px] right-3 md:top-4 md:right-4 z-[9999] flex items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-full p-0.5 text-[10px] md:text-xs font-bold font-sans">
    <button
      @click="emit('update:lang', 'ru')"
      :class="`px-2 py-0.5 md:px-2.5 md:py-1 rounded-full transition-all duration-200 ${lang === 'ru' ? 'bg-yellow-500 text-blue-950 font-extrabold' : 'text-white/80 hover:text-white'}`"
    >
      RU
    </button>
    <button
      @click="emit('update:lang', 'kz')"
      :class="`px-2 py-0.5 md:px-2.5 md:py-1 rounded-full transition-all duration-200 ${lang === 'kz' ? 'bg-yellow-500 text-blue-950 font-extrabold' : 'text-white/80 hover:text-white'}`"
    >
      KZ
    </button>
  </div>
</template>
