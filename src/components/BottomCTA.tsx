import { useEffect, useRef } from 'react'

function PencilCup() {
  return (
    <svg width="90" height="120" viewBox="0 0 90 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cup */}
      <path d="M15 50 L20 110 H70 L75 50 Z" fill="#1A6BFF" opacity="0.9"/>
      <path d="M15 50 L75 50" stroke="#2579FF" strokeWidth="2" fill="none"/>
      {/* Cup highlight */}
      <path d="M18 55 L22 105 H35 L30 55 Z" fill="rgba(255,255,255,0.1)"/>
      {/* Pencil 1 - yellow */}
      <rect x="28" y="5" width="10" height="55" rx="2" fill="#FFC400" transform="rotate(-8, 33, 30)"/>
      <polygon points="23,55 33,55 28,68" fill="#F5A623" transform="rotate(-8, 33, 30)"/>
      <rect x="28" y="5" width="10" height="8" rx="2" fill="#FF6B6B" transform="rotate(-8, 33, 30)"/>
      {/* Pencil 2 - blue */}
      <rect x="42" y="3" width="9" height="52" rx="2" fill="#4A90E2" transform="rotate(5, 46, 28)"/>
      <polygon points="38,52 47,52 42,64" fill="#2C6DB8" transform="rotate(5, 46, 28)"/>
      <rect x="42" y="3" width="9" height="7" rx="2" fill="#FF8A65" transform="rotate(5, 46, 28)"/>
      {/* Pencil 3 - red */}
      <rect x="55" y="8" width="9" height="50" rx="2" fill="#FF6B6B" transform="rotate(12, 59, 33)"/>
      <polygon points="51,53 60,53 55,66" fill="#D94444" transform="rotate(12, 59, 33)"/>
      <rect x="55" y="8" width="9" height="7" rx="2" fill="#FFC400" transform="rotate(12, 59, 33)"/>
      {/* Ruler */}
      <rect x="20" y="10" width="5" height="48" rx="1" fill="rgba(255,255,255,0.8)" transform="rotate(-15, 22, 34)"/>
      {[0,1,2,3,4,5,6].map(i => (
        <line key={i}
          x1="20" y1={16 + i * 6} x2={i % 2 === 0 ? "24" : "23"} y2={16 + i * 6}
          stroke="#0047D9" strokeWidth="0.8" opacity="0.6"
          transform="rotate(-15, 22, 34)"
        />
      ))}
    </svg>
  )
}

function BookStack() {
  return (
    <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Book 3 - bottom */}
      <rect x="10" y="65" width="100" height="20" rx="3" fill="#FFC400"/>
      <rect x="10" y="65" width="12" height="20" rx="3" fill="#E5A800"/>
      <line x1="30" y1="70" x2="100" y2="70" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      <line x1="30" y1="75" x2="85" y2="75" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
      {/* Book 2 - middle */}
      <rect x="8" y="40" width="96" height="22" rx="3" fill="#fff"/>
      <rect x="8" y="40" width="11" height="22" rx="3" fill="#ddd"/>
      <line x1="26" y1="46" x2="96" y2="46" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
      <line x1="26" y1="51" x2="80" y2="51" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
      <line x1="26" y1="56" x2="90" y2="56" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
      {/* Book 1 - top */}
      <rect x="6" y="15" width="98" height="22" rx="3" fill="#2579FF"/>
      <rect x="6" y="15" width="12" height="22" rx="3" fill="#1046B8"/>
      <line x1="24" y1="21" x2="96" y2="21" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="24" y1="26" x2="80" y2="26" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      <line x1="24" y1="31" x2="88" y2="31" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {/* Bookmark on top book */}
      <rect x="82" y="10" width="8" height="20" rx="0" fill="#FFC400"/>
      <path d="M82 30 L86 26 L90 30" fill="#FFC400"/>
    </svg>
  )
}

function TabletCTA() {
  return (
    <svg width="140" height="180" viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="128" height="168" rx="14" fill="#1A2940"/>
      <rect x="4" y="4" width="132" height="172" rx="16" fill="url(#ctaTabletGrad)"/>
      <rect x="14" y="18" width="112" height="136" rx="6" fill="#0A1628"/>
      {/* Screen content */}
      <rect x="14" y="18" width="112" height="22" rx="6" fill="#0D1F38"/>
      <rect x="14" y="32" width="112" height="8" fill="#0D1F38"/>
      {/* App tiles */}
      <rect x="22" y="48" width="22" height="18" rx="4" fill="#1558DD"/>
      <rect x="50" y="48" width="22" height="18" rx="4" fill="#0EA5E9"/>
      <rect x="78" y="48" width="22" height="18" rx="4" fill="#10B981"/>
      <rect x="106" y="48" width="20" height="18" rx="4" fill="#F59E0B"/>
      {/* Content */}
      <rect x="22" y="74" width="96" height="5" rx="2.5" fill="#1E3A5F"/>
      <rect x="22" y="84" width="70" height="4" rx="2" fill="#1E3A5F"/>
      <rect x="22" y="96" width="96" height="40" rx="5" fill="#0D1F38"/>
      <rect x="22" y="96" width="96" height="40" rx="5" stroke="#1558DD" strokeWidth="1"/>
      <polyline points="28,126 42,114 58,118 74,106 90,112 106,100 114,104" stroke="#2579FF" strokeWidth="1.5" fill="none"/>
      <rect x="22" y="144" width="22" height="14" rx="3" fill="#1558DD" opacity="0.7"/>
      <rect x="50" y="144" width="22" height="14" rx="3" fill="#1558DD" opacity="0.7"/>
      <rect x="78" y="144" width="22" height="14" rx="3" fill="#1558DD" opacity="0.7"/>
      <rect x="106" y="144" width="20" height="14" rx="3" fill="#1558DD" opacity="0.7"/>
      {/* Home button */}
      <circle cx="70" cy="164" r="5" fill="#2A3D56"/>
      <circle cx="70" cy="164" r="3" fill="#1A2940"/>
      <circle cx="70" cy="10" r="2.5" fill="#2A3D56"/>
      <defs>
        <linearGradient id="ctaTabletGrad" x1="0" y1="0" x2="136" y2="176" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A3D56"/>
          <stop offset="100%" stopColor="#0F1E30"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function BottomCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const item1Ref = useRef<HTMLDivElement>(null)
  const item2Ref = useRef<HTMLDivElement>(null)
  const item3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )
    ;[sectionRef, leftRef, item1Ref, item2Ref, item3Ref].forEach(
      (r) => r.current && observer.observe(r.current)
    )
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{
      background: 'linear-gradient(135deg, #001060 0%, #002299 40%, #0047D9 80%, #0055FF 100%)',
      padding: '72px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative bg circles */}
      <div style={{
        position: 'absolute', top: '-60px', right: '10%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,122,255,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-40px', left: '5%',
        width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,80,200,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* Left content */}
          <div
            ref={leftRef}
            className="fade-section"
          >
            <h2 style={{
              color: 'white',
              fontSize: 'clamp(26px, 3.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 0 16px',
              letterSpacing: '0.02em',
            }}>
              ПОДКЛЮЧИТЕСЬ К НОВОМУ<br/>
              <span style={{ color: '#FFC400' }}>УЧЕБНОМУ ГОДУ</span> УЖЕ СЕГОДНЯ!
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '16px',
              lineHeight: 1.65,
              margin: '0 0 36px',
              maxWidth: '480px',
            }}>
              Оставьте заявку. Мы подготовим всё необходимое: интернет, SIM-карту, планшет и TV для комфортного обучения.
            </p>
            <button
              className="cta-yellow"
              style={{
                background: '#FFC400',
                color: '#001060',
                border: 'none',
                borderRadius: '12px',
                padding: '18px 44px',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                cursor: 'pointer',
              }}
            >
              ПОДКЛЮЧИТЬ СЕЙЧАС
            </button>
          </div>

          {/* Right — school items */}
          <div style={{
            display: 'flex', alignItems: 'flex-end', gap: '16px',
            position: 'relative', minWidth: '320px', justifyContent: 'center',
          }}>
            <div
              ref={item1Ref}
              className="fade-section"
              style={{ transitionDelay: '0.2s', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.4))' }}
            >
              <PencilCup />
            </div>
            <div
              ref={item2Ref}
              className="fade-section"
              style={{ transitionDelay: '0.4s', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.3))' }}
            >
              <BookStack />
            </div>
            <div
              ref={item3Ref}
              className="fade-section"
              style={{ transitionDelay: '0.6s', filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.4))' }}
            >
              <TabletCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
