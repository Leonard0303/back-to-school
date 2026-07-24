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
      <!-- RU: exact block provided by the user -->
      <template v-if="lang === 'ru'">
        <p style="margin: 0 0 2px; font-weight: 600; color: #6b7a94;">Лицензии</p>
        <p style="margin: 0;">АО «Казахтелеком» — лицензия № 14014826 от 09.10.2014, выдана Комитетом связи, информатизации и информации Министерства по инвестициям и развитию Республики Казахстан.</p>
        <p style="margin: 0;">АО «Кселл» (Kcell/activ) — государственная лицензия № ДС 0000270 от 08.06.1998 (бессрочная), выдана Комитетом связи, информатизации и информации Министерства по инвестициям и развитию Республики Казахстан.</p>
        <p style="margin: 0;">ТОО «ALACAST» (Телевидение) — лицензия № 12016823 от 22.11.2012. Услуги оказываются с использованием сетей телекоммуникаций АО «Казахтелеком».</p>
        <hr style="border: none; border-top: 1px solid #e8ecf4; margin: 12px 0;" />
        <p style="margin: 0;" v-html="t.footer.oferta" />
        <p style="margin: 0;">Все изображения созданы при помощи ИИ.</p>
        <p style="margin: 0;">© 2026 АО «Казахтелеком». Все права защищены.</p>
      </template>

      <!-- KZ / EN: unchanged structure -->
      <template v-else>
        <p style="margin: 0;">{{ t.footer.note1 }}</p>
        <p style="margin: 0;">{{ t.footer.note2 }}</p>
        <p style="margin: 0;">{{ t.footer.note3 }}</p>
        <p style="margin: 0;">{{ t.footer.note4 }}</p>
        <p style="margin: 0;">{{ t.footer.note5 }}</p>
        <p style="margin: 12px 0 2px; font-weight: 600; color: #6b7a94;">{{ lang === 'kz' ? 'Лицензиялар' : 'Licenses' }}</p>
        <template v-if="lang === 'kz'">
          <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">«Қазақтелеком» АҚ:</span> Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 09.10.2014 жылғы №14014826 лицензия.</p>
          <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">«Кселл» АҚ (Kcell/activ):</span> Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 08.06.1998 жылғы № ДС 0000270 мемлекеттік мерзімсіз лицензиясы.</p>
          <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">"ALACAST" ЖШС (Телевидение):</span> "Қазақтелеком" АҚ телекоммуникация желілерін пайдаланатын "ALACAST" ЖШС 22.11.2012 жылғы №12016823 лицензияны ҚР МАМ берген.</p>
        </template>
        <template v-else>
          <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">Kazakhtelecom JSC:</span> License No. 14014826 dated October 9, 2014, issued by the Committee for Communications, Informatization and Information of the Ministry of Investment and Development of the Republic of Kazakhstan.</p>
          <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">Kcell JSC (Kcell/activ):</span> State License No. ДС 0000270 dated June 8, 1998, valid indefinitely, issued by the Committee for Communications, Informatization and Information of the Ministry of Investment and Development of the Republic of Kazakhstan.</p>
          <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">ALACAST LLP (Television):</span> License No. 12016823 dated November 22, 2012, issued to ALACAST LLP, with services provided using the telecommunications network of Kazakhtelecom JSC.</p>
        </template>
        <hr style="border: none; border-top: 1px solid #e8ecf4; margin: 12px 0;" />
        <p style="margin: 0;" v-html="t.footer.oferta" />
        <p style="margin: 0;">{{ t.footer.imageAI }}</p>
        <p style="margin: 4px 0 0;">{{ lang === 'kz' ? "© 2026 «Қазақтелеком» АҚ. Барлық құқықтар қорғалған." : "© 2026 Kazakhtelecom JSC. All rights reserved." }}</p>
      </template>
    </div>
  </footer>
</template>
