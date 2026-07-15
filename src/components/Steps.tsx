import { useEffect, useRef } from 'react'
import type { Lang } from '../translations'
import { translations } from '../translations'

const stepIcons = [
  {
    num: '01',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 8h20v16H6z" stroke="#0047D9" strokeWidth="2" fill="none" rx="3" ry="3"/>
        <path d="M6 12l10 6 10-6" stroke="#0047D9" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    label: 'Оставьте заявку',
    desc: 'Заполните форму онлайн или позвоните нам',
  },
  {
    num: '02',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 4h16v24H8z" stroke="#0047D9" strokeWidth="2" fill="none" rx="2" ry="2"/>
        <path d="M12 10h8M12 14h8M12 18h5" stroke="#0047D9" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Менеджер свяжется с вами',
    desc: 'Обсудим условия и выберем тариф',
  },
  {
    num: '03',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="#0047D9" strokeWidth="2" fill="none"/>
        <path d="M10 16l4 4 8-8" stroke="#0047D9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Выберите удобный тариф',
    desc: '1, 2 или 3 план — решать вам',
  },
  {
    num: '04',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26 L16 6 L26 26" stroke="#0047D9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 20 h14" stroke="#0047D9" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="13" r="3" fill="#0047D9" opacity="0.2"/>
      </svg>
    ),
    label: 'Получите оборудование и пользуйтесь',
    desc: 'Курьер доставит всё в удобное время',
  },
]

const stepNums = ['01', '02', '03', '04']

export default function Steps({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const stepLabels = [
    { label: t.steps.step1Title, desc: t.steps.step1Desc },
    { label: t.steps.step2Title, desc: t.steps.step2Desc },
    { label: t.steps.step3Title, desc: t.steps.step3Desc },
    { label: t.steps.step4Title, desc: t.steps.step4Desc },
  ]
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    arrowRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ background: '#fff', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(24px, 3vw, 36px)',
          fontWeight: 800,
          color: '#001060',
          marginBottom: '56px',
          letterSpacing: '0.02em',
        }}>
          {t.steps.title}
        </h2>

        <div className="steps-outer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative',
          alignItems: 'start',
        }}>
          {stepLabels.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
              {/* Step */}
              <div
                ref={(el) => { itemRefs.current[i] = el }}
                className="step-item"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '0 12px',
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'forwards',
                }}
              >
                {/* Circle number */}
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0047D9, #002299)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 6px 20px rgba(0,71,217,0.3)',
                }}>
                  <span style={{ color: 'white', fontSize: '20px', fontWeight: 800 }}>{stepNums[i]}</span>
                </div>

                {/* Icon */}
                <div style={{
                  width: '60px', height: '60px',
                  background: '#EEF4FF',
                  borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  {stepIcons[i].icon}
                </div>

                {/* Label */}
                <h4 style={{
                  fontSize: '14px', fontWeight: 700, color: '#001060',
                  margin: '0 0 8px',
                  lineHeight: 1.4,
                }}>
                  {step.label}
                </h4>
                <p style={{
                  fontSize: '13px', color: '#6a7a9a',
                  margin: 0, lineHeight: 1.55,
                }}>
                  {step.desc}
                </p>
              </div>

              {/* Arrow between steps */}
              {i < stepLabels.length - 1 && (
                <div
                  ref={(el) => { arrowRefs.current[i] = el }}
                  className="step-item"
                  style={{
                    position: 'absolute',
                    right: '-18px',
                    top: '28px',
                    zIndex: 2,
                    animationDelay: `${i * 0.2 + 0.3}s`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
                    <path d="M0 12 Q18 6 36 12" stroke="#0047D9" strokeWidth="2" strokeDasharray="5 3" fill="none" opacity="0.4"/>
                    <path d="M26 6 L36 12 L26 18" stroke="#0047D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
          .step-arrow { display: none !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
