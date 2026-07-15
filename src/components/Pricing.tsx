import { useEffect, useRef } from 'react'
import type { Lang } from '../translations'
import { translations } from '../translations'

const planIcons = [
  ['wifi', 'sim', 'tablet', 'tv'],
]

function IconWifi() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M2 10 Q14 2 26 10" stroke="#0047D9" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M5.5 14.5 Q14 8.5 22.5 14.5" stroke="#0047D9" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M9.5 19 Q14 15.5 18.5 19" stroke="#0047D9" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="14" cy="23" r="2" fill="#0047D9"/>
    </svg>
  )
}

function IconSim() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6" y="4" width="16" height="20" rx="3" stroke="#0047D9" strokeWidth="2" fill="none"/>
      <path d="M6 9 L11 4" stroke="#0047D9" strokeWidth="2" strokeLinecap="round"/>
      <rect x="10" y="12" width="8" height="7" rx="1.5" fill="#0047D9" opacity="0.3"/>
      <rect x="11" y="13" width="2.5" height="2.5" rx="0.5" fill="#0047D9"/>
      <rect x="14.5" y="13" width="2.5" height="2.5" rx="0.5" fill="#0047D9"/>
      <rect x="11" y="16.5" width="2.5" height="2.5" rx="0.5" fill="#0047D9"/>
      <rect x="14.5" y="16.5" width="2.5" height="2.5" rx="0.5" fill="#0047D9"/>
    </svg>
  )
}

function IconTablet() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="2" width="18" height="24" rx="3" stroke="#0047D9" strokeWidth="2" fill="none"/>
      <rect x="8" y="6" width="12" height="14" rx="1" fill="#0047D9" opacity="0.15"/>
      <circle cx="14" cy="23.5" r="1.2" fill="#0047D9"/>
    </svg>
  )
}

function IconTV() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="6" width="22" height="16" rx="3" stroke="#0047D9" strokeWidth="2" fill="none"/>
      <line x1="11" y1="22" x2="8" y2="26" stroke="#0047D9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="17" y1="22" x2="20" y2="26" stroke="#0047D9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8" y1="26" x2="20" y2="26" stroke="#0047D9" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 12 L16 14 L10 16 Z" fill="#0047D9"/>
    </svg>
  )
}

function getIcon(name: string) {
  switch (name) {
    case 'wifi': return <IconWifi />
    case 'sim': return <IconSim />
    case 'tablet': return <IconTablet />
    case 'tv': return <IconTV />
    default: return null
  }
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="#0047D9" opacity="0.12"/>
      <path d="M5 8.5 L7 10.5 L11 6.5" stroke="#0047D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Pricing({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const plan = t.plans.card1
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ background: '#fff', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section title */}
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(26px, 3vw, 38px)',
          fontWeight: 800,
          color: '#001060',
          marginBottom: '12px',
          letterSpacing: '0.02em',
        }}>
          {t.plans.title}
        </h2>
        <p style={{ textAlign: 'center', color: '#666', fontSize: '15px', marginBottom: '48px' }}>
          {t.plans.subtitle}
        </p>

        {/* Single card */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
          <div
            ref={cardRef}
            className="pricing-card"
            style={{
              opacity: 0,
              background: '#fff',
              borderRadius: '20px',
              border: '2px solid #0047D9',
              boxShadow: '0 12px 48px rgba(0,71,217,0.15)',
              padding: '32px 28px 28px',
              display: 'flex',
              flexDirection: 'column',
              animationFillMode: 'forwards',
              position: 'relative',
              maxWidth: '448px',
              width: '100%',
            }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              background: '#FFC400',
              color: '#001060',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '5px 14px',
              borderRadius: '20px',
              marginBottom: '16px',
              width: 'fit-content',
            }}>
              {plan.badge}
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '20px',
              fontWeight: 800,
              color: '#001060',
              margin: '0 0 20px 0',
              letterSpacing: '0.02em',
            }}>
              {plan.name}
            </h3>

            {/* Items list */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', flex: 1 }}>
              {plan.features.map((item, j) => (
                <li key={j} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontSize: '15px', color: '#2a3a5c', fontWeight: 500,
                  padding: '7px 0',
                  borderBottom: j < plan.features.length - 1 ? '1px solid #f0f3f9' : 'none',
                }}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            {/* Icons */}
            <div style={{
              display: 'flex', gap: '12px', alignItems: 'center',
              padding: '16px 0',
              borderTop: '1px solid #f0f3f9',
              borderBottom: '1px solid #f0f3f9',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}>
              {planIcons[0].map((icon, j) => (
                <div key={j} className="plan-icon" style={{
                  width: '48px', height: '48px',
                  background: '#EEF4FF',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {getIcon(icon)}
                </div>
              ))}
            </div>

            {/* Price */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                fontSize: '36px',
                fontWeight: 800,
                color: '#001060',
                letterSpacing: '-0.01em',
              }}>
                {plan.price}
              </span>
              <span style={{ fontSize: '18px', fontWeight: 600, color: '#0047D9', marginLeft: '4px' }}>
                {plan.period}
              </span>
            </div>

            {/* Button */}
            <button
              className="btn-blue"
              onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#0047D9',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '15px 0',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              {t.plans.btn}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 400px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
