import { useEffect, useRef } from 'react'

const benefits = [
  {
    icon: 'wifi',
    title: 'Высокая скорость',
    desc: 'Безлимитный интернет до 100 Мбит/с для учёбы и развлечений без ограничений',
  },
  {
    icon: 'tablet',
    title: 'Современный планшет',
    desc: 'Защищённый планшет с предустановленными образовательными приложениями',
  },
  {
    icon: 'tv',
    title: 'Телевидение TV+',
    desc: 'Более 200 каналов включая образовательные и детские программы',
  },
  {
    icon: 'wallet',
    title: 'Выгодная цена',
    desc: 'Все услуги в одном пакете по специальной цене для учеников и студентов',
  },
]

function WifiIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M4 13 Q18 4 32 13" stroke="#0047D9" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M8 18.5 Q18 11.5 28 18.5" stroke="#0047D9" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M12.5 24 Q18 20 23.5 24" stroke="#0047D9" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="18" cy="29" r="2.5" fill="#0047D9"/>
    </svg>
  )
}

function TabletIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="7" y="3" width="22" height="30" rx="4" stroke="#0047D9" strokeWidth="2.5" fill="none"/>
      <rect x="11" y="8" width="14" height="17" rx="2" fill="#0047D9" opacity="0.15"/>
      <circle cx="18" cy="29.5" r="1.8" fill="#0047D9"/>
      <line x1="15" y1="6" x2="21" y2="6" stroke="#0047D9" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  )
}

function TVIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="8" width="28" height="19" rx="4" stroke="#0047D9" strokeWidth="2.5" fill="none"/>
      <line x1="14" y1="27" x2="10" y2="33" stroke="#0047D9" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="22" y1="27" x2="26" y2="33" stroke="#0047D9" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="10" y1="33" x2="26" y2="33" stroke="#0047D9" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M13 15.5 L21 18 L13 20.5 Z" fill="#0047D9"/>
    </svg>
  )
}

function WalletIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="3" y="9" width="30" height="20" rx="4" stroke="#0047D9" strokeWidth="2.5" fill="none"/>
      <path d="M3 16 L33 16" stroke="#0047D9" strokeWidth="2" opacity="0.4"/>
      <rect x="22" y="19" width="9" height="7" rx="3" fill="#0047D9" opacity="0.2"/>
      <circle cx="26.5" cy="22.5" r="1.5" fill="#0047D9"/>
      <path d="M8 9 L12 4 L16 9" stroke="#0047D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

function getIcon(name: string) {
  switch (name) {
    case 'wifi': return <WifiIcon />
    case 'tablet': return <TabletIcon />
    case 'tv': return <TVIcon />
    case 'wallet': return <WalletIcon />
    default: return null
  }
}

export default function Benefits() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

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
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ background: '#f7f9fe', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(24px, 3vw, 36px)',
          fontWeight: 800,
          color: '#001060',
          marginBottom: '48px',
          letterSpacing: '0.02em',
        }}>
          ЧТО ВЫ ПОЛУЧАЕТЕ
        </h2>

        <div className="benefits-outer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '28px',
        }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el }}
              className="benefit-card fade-section"
              style={{
                background: '#fff',
                borderRadius: '18px',
                padding: '32px 24px',
                textAlign: 'center',
                border: '1px solid #e8ecf4',
                boxShadow: '0 4px 20px rgba(0,20,80,0.06)',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="benefit-icon"
                style={{
                  width: '72px', height: '72px',
                  background: '#EEF4FF',
                  borderRadius: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                {getIcon(b.icon)}
              </div>
              <h3 style={{
                fontSize: '17px', fontWeight: 700, color: '#001060',
                margin: '0 0 12px',
              }}>
                {b.title}
              </h3>
              <p style={{
                fontSize: '14px', color: '#5a6a8a', lineHeight: 1.65,
                margin: 0,
              }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
