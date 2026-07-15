import type { Lang } from '../translations'
import { translations } from '../translations'

const featureIcons = [
  // Internet / Wifi
  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
  </svg>,
  // Mobile / Smartphone
  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
  </svg>,
  // Tablet
  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="3" />
    <line x1="12" y1="20" x2="12" y2="20" strokeWidth="3" />
  </svg>,
  // TV+
  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
]

export default function Pricing({ lang }: { lang: Lang }) {
  const t = translations[lang].plans

  return (
    <section id="pricing" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">

        {/* Header section */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-blue-950 tracking-tight mb-3">
            {t.title}
          </h2>
          <p className="text-sm md:text-lg font-normal text-gray-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Unified Card Container */}
        <div className="max-w-5xl mx-auto bg-white border-2 border-blue-600 rounded-[28px] md:rounded-[36px] overflow-hidden shadow-xl flex flex-col md:flex-row">

          {/* LEFT COLUMN: Premium list (2/3) */}
          <div className="p-6 md:p-10 md:w-2/3 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-200">
            <div className="inline-block bg-yellow-500 text-blue-950 text-xs font-black px-3 py-1 rounded-full mb-6 tracking-wide">
              {t.badge}
            </div>

            <div className="space-y-6 md:space-y-8">
              {t.features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    {featureIcons[index]}
                  </div>
                  <div>
                    <p
                      className="text-gray-700 text-sm md:text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Pricing & Button (1/3) */}
          <div className="p-6 md:p-10 md:w-1/3 bg-blue-50/40 flex flex-col justify-between items-center text-center">
            <div className="my-auto">
              <p className="text-xs uppercase tracking-widest text-blue-600 font-extrabold mb-2">
                {t.priceLabel}
              </p>

              <div className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">
                {t.price} <span className="text-base font-medium text-gray-500">{t.period}</span>
              </div>

              <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-[220px] mx-auto">
                {t.note}
              </p>
            </div>

            <div className="w-full mt-6">
              <a
                href="#final-cta"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-blue-600/10 transition-all duration-200 active:scale-[0.98]"
              >
                {t.btn}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
