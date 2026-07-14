import { useEffect, useState } from 'react'
import heroPhoto from '../imports/Снимок экрана 2026-07-14 121719.png'
import ktLogo from '../imports/KT_logo_2_W (1).png'
import tvPlusLogo from '../imports/white flat logo TV+ (1).png'

const STARS = [
  { top: '9%',  left: '4%',   size: 9,  opacity: 0.85, delay: 0   },
  { top: '18%', left: '13%',  size: 5,  opacity: 0.6,  delay: 0.5 },
  { top: '7%',  left: '28%',  size: 7,  opacity: 0.7,  delay: 1.0 },
  { top: '14%', left: '53%',  size: 6,  opacity: 0.6,  delay: 0.3 },
  { top: '4%',  left: '69%',  size: 5,  opacity: 0.8,  delay: 0.8 },
  { top: '22%', left: '83%',  size: 7,  opacity: 0.7,  delay: 1.2 },
  { top: '42%', left: '7%',   size: 5,  opacity: 0.5,  delay: 0.6 },
  { top: '58%', left: '18%',  size: 8,  opacity: 0.6,  delay: 1.5 },
  { top: '68%', left: '73%',  size: 5,  opacity: 0.7,  delay: 0.4 },
  { top: '78%', left: '58%',  size: 6,  opacity: 0.5,  delay: 1.1 },
  { top: '33%', left: '46%',  size: 4,  opacity: 0.6,  delay: 0.9 },
  { top: '48%', left: '90%',  size: 6,  opacity: 0.7,  delay: 0.2 },
]

interface HeroProps {
  onOpenForm?: () => void
}

export default function Hero({ onOpenForm }: HeroProps) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero-bg" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,100,255,0.22) 0%, transparent 70%)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,60,180,0.18) 0%, transparent 70%)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', top: '30%', left: '43%', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,80,220,0.13) 0%, transparent 70%)', pointerEvents: 'none' }}/>

      {/* Grid lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }}>
        <line x1="0" y1="30%" x2="100%" y2="25%" stroke="white" strokeWidth="1"/>
        <line x1="0" y1="65%" x2="100%" y2="70%" stroke="white" strokeWidth="1"/>
        <line x1="20%" y1="0" x2="15%" y2="100%" stroke="white" strokeWidth="1"/>
        <line x1="80%" y1="0" x2="85%" y2="100%" stroke="white" strokeWidth="1"/>
      </svg>

      {/* Stars */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="star-twinkle"
          style={{ position: 'absolute', top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 10 10">
            <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill={`rgba(255,255,255,${s.opacity})`}/>
          </svg>
        </div>
      ))}

      {/* Paper plane */}
      <div
        className="plane-float"
        style={{ position: 'absolute', top: '13%', right: '36%', opacity: loaded ? 1 : 0, transition: 'opacity 1.5s ease' }}
      >
        <svg width="64" height="52" viewBox="0 0 64 52" fill="none">
          <path d="M2 26 L62 4 L46 48 L30 34 Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
          <path d="M30 34 L34 50 L44 38" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
          <path d="M30 34 L62 4" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* Single responsive grid — order controlled purely via CSS (grid-template-areas) */}
      <div className="hero-layout" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header — logos */}
        <div className="hero-header" style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(-8px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <img src={ktLogo} alt="Казахтелеком" className="hero-logo" />
            <img src={tvPlusLogo} alt="TV+" className="hero-logo" />
          </div>
        </div>

        {/* Text — badge, heading, description */}
        <div className="hero-text">
          {/* Badge */}
          <div className="hero-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#FFC400', color: '#001060',
            borderRadius: '100px',
            fontWeight: 700, letterSpacing: '0.05em',
            textTransform: 'uppercase',
            width: 'fit-content',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s',
          }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1L8 4.8H12L9 7.2L10.2 11L6.5 8.6L2.8 11L4 7.2L1 4.8H5Z" fill="#001060"/>
            </svg>
            BACK TO SCHOOL
          </div>

          {/* Heading */}
          <h1 className="hero-heading" style={{
            fontWeight: 800,
            letterSpacing: '-0.02em',
            textAlign: 'left',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0.35s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.35s',
          }}>
            <span style={{ color: 'white', display: 'inline-block' }}>УЧИСЬ. ОБЩАЙСЯ.</span><br />
            <span style={{ color: '#FFC107', display: 'inline-block' }}>ДОСТИГАЙ!</span>
          </h1>

          {/* Description */}
          <p className="hero-desc" style={{
            color: 'rgba(255,255,255,0.8)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.5s',
          }}>
            Интернет, мобильная связь, TV и планшет — всё для удобного старта нового учебного года.
          </p>
        </div>

        {/* Image — backpack and tablet */}
        <div className="hero-right-col" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            className="hero-photo"
            style={{
              aspectRatio: '983 / 768',
              backgroundImage: `url(${heroPhoto})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease 0.5s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s',
              animation: loaded ? 'floatBackpack 4.2s ease-in-out 1s infinite' : 'none',
            }}
            aria-label="Планшет и рюкзак как на референсном фото"
            role="img"
          />
        </div>

        {/* CTA — button + note */}
        <div className="hero-cta" style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.6s ease 0.65s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.65s',
        }}>
          <button className="cta-yellow" onClick={onOpenForm} style={{
            background: '#FFC400',
            color: '#001060',
            border: 'none',
            borderRadius: '13px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            display: 'block',
          }}>
            ПОДКЛЮЧИТЬ СЕЙЧАС
          </button>

          {/* Note */}
          <div className="hero-note" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            color: 'rgba(255,255,255,0.6)',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease 0.8s',
          }}>
            <svg className="hero-note-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" fill="none"/>
              <path d="M1.5 5.5l6.5 4 6.5-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
            </svg>
            Менеджер свяжется с вами.
          </div>
        </div>
      </div>
    </section>
  )
}
