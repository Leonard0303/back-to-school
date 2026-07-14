import { useEffect, useRef } from 'react'
import finalHeroGadgets from '../imports/final-hero-gadgets.png'

interface BottomCTAProps {
  onOpenForm?: () => void
}

export default function BottomCTA({ onOpenForm }: BottomCTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const item1Ref = useRef<HTMLDivElement>(null)

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
    ;[sectionRef, leftRef, item1Ref].forEach(
      (r) => r.current && observer.observe(r.current)
    )
    return () => observer.disconnect()
  }, [])

  return (
    <section id="final-cta" className="bottom-cta-section" style={{
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
        <div className="bottom-cta-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* Left content */}
          <div
            ref={leftRef}
            className="fade-section bottom-cta-left"
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
            <p className="bottom-cta-desc" style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '16px',
              lineHeight: 1.65,
              margin: '0 0 36px',
              maxWidth: '480px',
            }}>
              Оставьте заявку. Мы подготовим всё необходимое: интернет, SIM-карту, планшет и TV для комфортного обучения.
            </p>
            <button
              className="cta-yellow bottom-cta-btn"
              onClick={onOpenForm}
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
          <div
            ref={item1Ref}
            className="fade-section bottom-cta-right"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', minWidth: '320px',
              transitionDelay: '0.2s',
            }}
          >
            <img
              src={finalHeroGadgets}
              alt="Планшет и школьные принадлежности"
              className="bottom-cta-img"
              style={{
                width: '100%',
                maxWidth: '760px',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.4))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
