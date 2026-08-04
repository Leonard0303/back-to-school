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
        <p style="margin: 0 0 2px; font-weight: 600; color: #6b7a94;">Условия подключения</p>
        <p style="margin: 0;">Количество планшетов по акции ограничено. Предложение действует при подключении на контракт сроком <span style="font-weight: 700;">3 года</span>.</p>
        <p style="margin: 0;">Подключение доступно при наличии технической возможности.</p>
        <p style="margin: 0;">В абонентскую плату не включена стоимость аренды оборудования. Стоимость аренды модема — <span style="font-weight: 700;">от 414,29 ₸/мес.</span> с НДС.</p>
        <p style="margin: 0;">Доставка оборудования осуществляется нашим специалистом по рабочим дням с <span style="font-weight: 700;">09:00 до 18:00</span>.</p>
        <p style="margin: 0;">В пакетах услуг <span style="font-weight: 700;">Back to School</span> доступно подключение дополнительных SIM-карт.</p>
        <p style="margin: 0;">Планшет предоставляется Абоненту в рамках продуктового предложения <span style="font-weight: 700;">Back to School</span>. При досрочном прекращении участия в продуктовом предложении до окончания контрактного периода Абонент обязуется оплатить АО «Кселл» остаточную стоимость планшета в порядке и на условиях, предусмотренных трёхсторонним соглашением.</p>

        <p style="margin: 12px 0 2px; font-weight: 600; color: #6b7a94;">Лицензии</p>
        <p style="margin: 0;"><span style="font-weight: 700;">АО «Казахтелеком»</span> — лицензия № 14014826 от 09.10.2014, выдана Комитетом связи, информатизации и информации Министерства по инвестициям и развитию Республики Казахстан.</p>
        <p style="margin: 0;"><span style="font-weight: 700;">АО «Кселл» (Kcell/activ)</span> — государственная лицензия № ДС 0000270 от 08.06.1998 (бессрочная), выдана Комитетом связи, информатизации и информации Министерства по инвестициям и развитию Республики Казахстан.</p>
        <p style="margin: 0;"><span style="font-weight: 700;">ТОО «ALACAST» (Телевидение)</span> — лицензия № 12016823 от 22.11.2012. Услуги оказываются с использованием сетей телекоммуникаций АО «Казахтелеком».</p>
        <hr style="border: none; border-top: 1px solid #e8ecf4; margin: 12px 0;" />
        <p style="margin: 0; font-weight: 700;" v-html="t.footer.oferta" />
        <p style="margin: 0; font-weight: 700;">Все изображения созданы при помощи ИИ.</p>
        <p style="margin: 0;">© 2026 АО «Казахтелеком». Все права защищены.</p>
      </template>

      <!-- KZ -->
      <template v-else>
        <p style="margin: 0 0 2px; font-weight: 600; color: #6b7a94;">Қосылу шарттары</p>
        <p style="margin: 0;">Акциядағы планшеттер саны шектеулі. Ұсыныс 3 жылдық келісімшартпен қосылады.</p>
        <p style="margin: 0;">Қосылу техникалық мүмкіндік болған жағдайда жүзеге асырылады.</p>
        <p style="margin: 0;">Абоненттік төлемге жабдықты жалға алу құны кірмейді. Модемді жалға алу құны ҚҚС-мен айына 414,29 ₸ бастап.</p>
        <p style="margin: 0;">Жабдықты жұмыс күндері 09:00 - 18:00 дейін маманымыз жеткізеді.</p>
        <p style="margin: 0;">Back to School қызметтер топтамасында қосымша SIM-карта қосуға болады.</p>
        <p style="margin: 0;">Планшет абонентке Back to School өнім ұсынысы аясында беріледі. Келісімшарт мерзімі аяқталғанға дейін өнім ұсынысын мерзімінен бұрын тоқтатқан жағдайда абонент үш жақты келісімде көзделген тәртіппен және шарттармен «Кселл» АҚ-ға планшеттің қалдық құнын төлеуге міндетті.</p>

        <p style="margin: 12px 0 2px; font-weight: 600; color: #6b7a94;">Лицензиялар</p>
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">«Қазақтелеком» АҚ:</span> Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 09.10.2014 жылғы №14014826 лицензия.</p>
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">«Кселл» АҚ (Kcell/activ):</span> Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 08.06.1998 жылғы № ДС 0000270 мемлекеттік мерзімсіз лицензиясы.</p>
        <p style="margin: 0;"><span style="font-weight: 600; color: #6b7a94;">"ALACAST" ЖШС (Телевидение):</span> "Қазақтелеком" АҚ телекоммуникация желілерін пайдаланатын "ALACAST" ЖШС 22.11.2012 жылғы №12016823 лицензияны ҚР МАМ берген.</p>
        <hr style="border: none; border-top: 1px solid #e8ecf4; margin: 12px 0;" />
        <p style="margin: 0;" v-html="t.footer.oferta" />
        <p style="margin: 0;">{{ t.footer.imageAI }}</p>
        <p style="margin: 4px 0 0;">© 2026 «Қазақтелеком» АҚ. Барлық құқықтар қорғалған.</p>
      </template>
    </div>
  </footer>
</template>
