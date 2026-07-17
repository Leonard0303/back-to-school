<script setup lang="ts">
import type { Lang } from '../translations'

defineProps<{ lang: Lang }>()
const emit = defineEmits<{ 'update:lang': [lang: Lang] }>()
</script>

<template>
  <div class="fixed top-0 right-0 z-[9999] flex items-center bg-black/60 backdrop-blur-md rounded-bl-lg p-[3px] text-[10px] leading-none font-bold font-sans">
    <button
      @click="emit('update:lang', 'ru')"
      :class="`px-2 py-1 rounded-md transition-all duration-200 ${lang === 'ru' ? 'bg-yellow-500 text-blue-950 font-extrabold' : 'text-white/80 hover:text-white'}`"
    >
      RU
    </button>
    <button
      @click="emit('update:lang', 'kz')"
      :class="`px-2 py-1 rounded-md transition-all duration-200 ${lang === 'kz' ? 'bg-yellow-500 text-blue-950 font-extrabold' : 'text-white/80 hover:text-white'}`"
    >
      KZ
    </button>
  </div>
</template>
