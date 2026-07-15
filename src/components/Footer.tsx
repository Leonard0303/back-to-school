import type { Lang } from '../translations'
import { translations } from '../translations'

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang]
  return (
    <footer style={{
      background: '#fff',
      borderTop: '1px solid #e8ecf4',
      padding: '28px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{
          fontSize: '11px',
          color: '#8a9ab8',
          lineHeight: 1.7,
          margin: '0 0 8px',
        }}>
          {t.footer.note1}
        </p>
        <p style={{
          fontSize: '11px',
          color: '#8a9ab8',
          lineHeight: 1.7,
          margin: '0 0 8px',
        }}>
          {t.footer.note2}
        </p>

        <div className="border-t border-gray-100 pt-6 mt-6">
          {/* Disclaimer Section */}
          <p className="text-[11px] md:text-xs text-gray-400 mb-4 italic">
            {lang === 'ru'
              ? "Казахтелеком оставляет за собой право изменять условия акции без предварительного уведомления. Подробнее на сайте."
              : "Қазақтелеком акция шарттарын алдын ала ескертусіз өзгерту құқығын өзіне қалдырады. Толығырақ сайтта."
            }
          </p>

          {/* Licenses Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] md:text-xs text-gray-400 leading-relaxed border-t border-gray-50 pt-4">
            {lang === 'ru' ? (
              <>
                <div className="p-1">
                  <span className="font-semibold text-gray-500">АО «Казахтелеком»:</span> Лицензия №14014826 от 09.10.2014 выдана Комитетом связи, информатизации и информации Министерства по Инвестициям и развитию Республики Казахстан.
                </div>
                <div className="p-1">
                  <span className="font-semibold text-gray-500">АО «Кселл» (Kcell/activ):</span> Государственная лицензия МТК № ДС 0000270 от 08.06.1998, бессрочная, выдана Комитетом связи, информатизации и информации Министерства по инвестициям и развитию Республики Казахстан.
                </div>
                <div className="p-1">
                  <span className="font-semibold text-gray-500">ТОО «МТ-С» (ALTEL/Tele2).</span>
                </div>
                <div className="p-1">
                  <span className="font-semibold text-gray-500">ТОО "ALACAST" (Телевидение):</span> Лицензия МКИ РК №12016823 от 22.11.2012 ТОО "ALACAST" с использованием сетей телекоммуникаций АО "Казахтелеком".
                </div>
              </>
            ) : (
              <>
                <div className="p-1">
                  <span className="font-semibold text-gray-500">«Қазақтелеком» АҚ:</span> Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 2014.09.10 №14014826 лицензия.
                </div>
                <div className="p-1">
                  <span className="font-semibold text-gray-500">«Кселл» АҚ (Kcell/activ):</span> Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 1998.08.06 № ДС 0000270 мемлекеттік мерзімсіз лицензиясы.
                </div>
                <div className="p-1">
                  <span className="font-semibold text-gray-500">«МТ-С» ЖШС (ALTEL/Tele2).</span>
                </div>
                <div className="p-1">
                  <span className="font-semibold text-gray-500">"ALACAST" ЖШС (Телевидение):</span> "Қазақтелеком" АҚ телекоммуникация желілерін пайдаланатын "ALACAST" ЖШС 2012.22.11 №12016823 лицензияны ҚР МАМ берген.
                </div>
              </>
            )}
          </div>

          {/* Copyright Section (Address row is completely removed) */}
          <div className="mt-6 text-[11px] md:text-xs text-gray-400 border-t border-gray-50 pt-4">
            <p>
              {lang === 'ru'
                ? "© 2026 АО «Казахтелеком». Все права защищены."
                : "© 2026 «Қазақтелеком» АҚ. Барлық құқықтар қорғалған."
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
