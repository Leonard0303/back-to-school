<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { Lang } from './translations'
import { useUTM } from './composables/useUTM'
import { initAnalytics, track } from './composables/useAnalytics'
import Hero from './components/Hero.vue'
import Pricing from './components/Pricing.vue'
import Steps from './components/Steps.vue'
import BottomCTA from './components/BottomCTA.vue'
import Footer from './components/Footer.vue'
import LeadFormModal from './components/LeadFormModal.vue'

useUTM()

const lang = ref<Lang>('ru')
const formOpen = ref(false)

// b2s_form_open  — пользователь открыл лид-форму (ключевой шаг воронки)
const openForm = () => {
  formOpen.value = true
  track('form_open', { lang: lang.value })
}
// b2s_form_close — закрыл форму, не отправив (показывает отказы)
const closeForm = () => {
  formOpen.value = false
  track('form_close', { lang: lang.value })
}
// b2s_lang_switch — переключение языка сайта
watch(lang, (to, from) => track('lang_switch', { lang: to, from }))

// Автотрекинг: просмотр страницы, прокрутка, показы секций, внешние ссылки,
// сообщения от формы QBox. Подключается один раз, после отрисовки.
onMounted(() => initAnalytics(() => lang.value))
</script>

<template>
  <div>
    <Hero v-model:lang="lang" />
    <Pricing :lang="lang" />
    <Steps :lang="lang" />
    <BottomCTA :lang="lang" @open-form="openForm" />
    <Footer :lang="lang" />
    <LeadFormModal :lang="lang" :open="formOpen" @close="closeForm" />
  </div>
</template>
