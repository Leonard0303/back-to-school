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

        <div className="footer-licenses" style={{ marginTop: '16px', marginBottom: '16px' }}>
          <p style={{
            fontSize: '11px',
            color: '#8a9ab8',
            lineHeight: 1.6,
            margin: '0 0 6px',
          }}>
            {t.footer.licTelecom}
          </p>
          <p style={{
            fontSize: '11px',
            color: '#8a9ab8',
            lineHeight: 1.6,
            margin: 0,
          }}>
            {t.footer.licAlacast}
          </p>
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
