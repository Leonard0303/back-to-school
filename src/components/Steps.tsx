import type { Lang } from '../translations'
import { translations } from '../translations'

const stepIcons = [
  // Step 1: Application / Paper airplane
  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>,
  // Step 2: Message / Consultation
  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  // Step 3: Delivery box
  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>,
]

export default function Steps({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const steps = [
    { num: '1', title: t.steps.step1Title, desc: t.steps.step1Desc },
    { num: '2', title: t.steps.step2Title, desc: t.steps.step2Desc },
    { num: '3', title: t.steps.step3Title, desc: t.steps.step3Desc },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center text-blue-950 mb-16 tracking-tight">
          {t.steps.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative group">
              {/* Desktop Connecting Arrow (Hidden on Mobile) */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-8 text-gray-300 z-10">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Number Badge */}
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-blue-600/20 mb-4 transition-transform duration-300 group-hover:scale-110">
                {step.num}
              </div>

              {/* Modern SVG Icon Wrapper */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                {stepIcons[idx]}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
