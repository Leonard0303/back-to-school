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
          <div className="space-y-1.5 text-[11px] md:text-xs text-gray-400 leading-relaxed">
            {lang === 'ru' ? (
              <>
                <p>АО «Казахтелеком» — Лицензия №14014826 от 09.10.2014 выдана Комитетом связи, информатизации и информации Министерства по Инвестициям и развитию Республики Казахстан.</p>
                <p>АО «Кселл» (Kcell/activ) — Государственная лицензия МТК № ДС 0000270 от 08.06.1998, бессрочная, выдана Комитетом связи, информатизации и информации Министерства по инвестициям и развитию Республики Казахстан.</p>
                <p>ТОО «МТ-С» (ALTEL/Tele2).</p>
                <p>ТОО "ALACAST" (Телевидение) — Лицензия МКИ РК №12016823 от 22.11.2012 ТОО "ALACAST" с использованием сетей телекоммуникаций АО "Казахтелеком".</p>
              </>
            ) : (
              <>
                <p>«Қазақтелеком» АҚ — Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 2014.09.10 №14014826 лицензия.</p>
                <p>«Кселл» АҚ (Kcell/activ) — Қазақстан Республикасы Инвестициялар және даму министрлігінің Байланыс, ақпараттандыру және ақпарат комитеті берген 1998.08.06 № ДС 0000270 мемлекеттік мерзімсіз лицензиясы.</p>
                <p>«МТ-С» ЖШС (ALTEL/Tele2).</p>
                <p>"ALACAST" ЖШС (Телевидение) — "Қазақтелеком" АҚ телекоммуникация желілерін пайдаланатын "ALACAST" ЖШС 2012.22.11 №12016823 лицензияны ҚР МАМ берген.</p>
              </>
            )}
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '8px',
          marginTop: '16px',
          paddingTop: '12px',
          borderTop: '1px solid #f0f3f9',
        }}>
          <span style={{ fontSize: '11px', color: '#aab4cc' }}>
            {t.footer.copyright}
          </span>
          <span style={{ fontSize: '11px', color: '#aab4cc' }}>
            {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  )
}
