<script setup lang="ts">
import { computed } from 'vue'
import type { Lang } from '../translations'
import { translations } from '../translations'

const props = defineProps<{ lang: Lang }>()
const t = computed(() => translations[props.lang])
</script>

<template>
  <footer style="
    background: #fff;
    border-top: 1px solid #e8ecf4;
    padding: 28px 40px;
  ">
    <div style="max-width: 1200px; margin: 0 auto; font-size: 10px; line-height: 1.5; color: #8a9ab8;">
      <p style="margin: 0;">{{ t.footer.note1 }}</p>
      <p style="margin: 0;">{{ t.footer.note2 }}</p>
      <p style="margin: 0;">{{ t.footer.note3 }}</p>
      <p style="margin: 0;">{{ t.footer.note4 }}</p>
      <template v-if="lang === 'ru'">
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">АО «Казахтелеком»:</span> Лицензия №14014826 от 09.10.2014 выдана Комитетом связи, информатизации и информации Министерства по Инвестициям и развитию Республики Казахстан.</p>
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">АО «Кселл» (Kcell/activ):</span> Государственная лицензия МТК № ДС 0000270 от 08.06.1998, бессрочная, выдана Комитетом связи, информатизации и информации Министерства по инвестициям и развитию Республики Казахстан.</p>
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">ТОО "ALACAST" (Телевидение):</span> Лицензия МКИ РК №12016823 от 22.11.2012 ТОО "ALACAST" с использованием сетей телекоммуникаций АО "Казахтелеком".</p>
      </template>
      <template v-else>
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">«Қазақтелеком» АҚ:</span> Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 09.10.2014 жылғы №14014826 лицензия.</p>
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">«Кселл» АҚ (Kcell/activ):</span> Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 08.06.1998 жылғы № ДС 0000270 мемлекеттік мерзімсіз лицензиясы.</p>
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">"ALACAST" ЖШС (Телевидение):</span> "Қазақтелеком" АҚ телекоммуникация желілерін пайдаланатын "ALACAST" ЖШС 22.11.2012 жылғы №12016823 лицензияны ҚР МАМ берген.</p>
      </template>
      <p style="margin: 0;">{{ t.footer.oferta }}</p>
      <p style="margin: 0;">
        {{ lang === 'ru'
          ? "© 2026 АО «Казахтелеком». Все права защищены."
          : "© 2026 «Қазақтелеком» АҚ. Барлық құқықтар қорғалған."
        }}
      </p>
    </div>
  </footer>
</template>
