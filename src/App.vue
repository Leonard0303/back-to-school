<script setup lang="ts">
import { ref } from 'vue'
import type { Lang } from './translations'
import { useUTM } from './composables/useUTM'
import Hero from './components/Hero.vue'
import Pricing from './components/Pricing.vue'
import Steps from './components/Steps.vue'
import BottomCTA from './components/BottomCTA.vue'
import Footer from './components/Footer.vue'
import LeadFormModal from './components/LeadFormModal.vue'

useUTM()

const lang = ref<Lang>('ru')
const formOpen = ref(false)
const openForm = () => { formOpen.value = true }
const closeForm = () => { formOpen.value = false }
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
