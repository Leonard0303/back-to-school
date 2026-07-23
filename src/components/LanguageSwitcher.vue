<script setup lang="ts">
import type { Lang } from '../translations'

defineProps<{ lang: Lang }>()
const emit = defineEmits<{ 'update:lang': [lang: Lang] }>()
</script>

<template>
  <div
    class="absolute top-0 right-0 z-[9999] flex items-center bg-[#0a1330]/90 rounded-bl-lg p-[3px] text-[10px] leading-none font-bold"
    style="font-family: Helvetica, Arial, sans-serif !important;"
  >
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
    <button
      @click="emit('update:lang', 'en')"
      :class="`px-2 py-1 rounded-md transition-all duration-200 ${lang === 'en' ? 'bg-yellow-500 text-blue-950 font-extrabold' : 'text-white/80 hover:text-white'}`"
    >
      EN
    </button>
  </div>
</template>
