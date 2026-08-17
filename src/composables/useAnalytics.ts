/**
 * Аналитика лендинга Back to School.
 *
 * Все события уходят в window.dataLayer — оттуда их забирает Google Tag Manager
 * (контейнер GTM-MDR9JB9J, подключён в index.html) и раздаёт в GA4, рекламные
 * пиксели и т.д. Настройка тегов делается в интерфейсе GTM, здесь только
 * отправка — код менять для новых тегов не нужно.
 *
 * Имена событий начинаются с «b2s_», чтобы не смешаться с остальной
 * аналитикой telecom.kz.
 *
 * СПИСОК СОБЫТИЙ (для настройки триггеров в GTM):
 *   b2s_page_view      — загрузка страницы (+ язык, utm-метки)
 *   b2s_cta_click      — клик по жёлтой кнопке (placement: hero/pricing/bottom)
 *   b2s_form_open      — открылась лид-форма
 *   b2s_form_close     — форму закрыли, не отправив
 *   b2s_form_message   — форма QBox прислала сообщение (см. init ниже)
 *   b2s_form_submit    — заявка отправлена (если QBox сообщает об этом)
 *   b2s_lang_switch    — переключение языка
 *   b2s_scroll_depth   — прокрутка 25 / 50 / 75 / 100 %
 *   b2s_section_view   — секция появилась на экране (section: hero/pricing/...)
 *   b2s_outbound_click — клик по внешней ссылке (оферта и т.п.)
 *
 * К каждому событию автоматически добавляется client_id — обезличенный
 * идентификатор посетителя, он же уходит в QBox вместе с заявкой.
 * Имя и телефон в аналитику НЕ передаются: это запрещено правилами Google
 * (PII) и относится к персональным данным. Они остаются только в QBox,
 * а связь «заявка ↔ сессия» обеспечивает client_id.
 */
import type { Lang } from '../translations'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/** Префикс всех событий лендинга (back to school). */
const PREFIX = 'b2s'

const CLIENT_ID_KEY = 'b2s_client_id'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

/**
 * Постоянный обезличенный ID посетителя.
 *
 * Зачем: он уходит и в аналитику (с каждым событием), и в QBox (параметром
 * ссылки на форму). Благодаря этому по заявке в QBox можно найти её сессию
 * в аналитике — и наоборот, не передавая при этом имя и телефон.
 * Хранится в localStorage, поэтому переживает перезаход на сайт.
 */
export const getClientId = (): string => {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem(CLIENT_ID_KEY)
  if (!id) {
    id = `b2s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
    localStorage.setItem(CLIENT_ID_KEY, id)
  }
  return id
}

/** UTM-метки, сохранённые при заходе (см. useUTM). */
const getStoredUTM = (): Record<string, string> => {
  const utm: Record<string, string> = {}
  UTM_KEYS.forEach((key) => {
    const value = sessionStorage.getItem(key)
    if (value) utm[key] = value
  })
  return utm
}

/**
 * Отправляет событие в dataLayer.
 * @param event  имя без префикса, например 'cta_click' → в GTM придёт 'b2s_cta_click'
 * @param params дополнительные поля (язык, место клика и т.п.)
 */
export const track = (event: string, params: Record<string, unknown> = {}): void => {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: `${PREFIX}_${event}`, client_id: getClientId(), ...params })
}

/** Секции лендинга: селектор → имя в аналитике. */
const SECTIONS: Array<[string, string]> = [
  ['.hero-bg', 'hero'],
  ['#pricing', 'pricing'],
  ['#steps', 'steps'],
  ['#final-cta', 'final_cta'],
  ['footer', 'footer'],
]

/**
 * Автоматический трекинг: просмотр страницы, глубина прокрутки, показы секций,
 * внешние ссылки и сообщения от формы QBox.
 * Вызывается один раз из App.vue.
 */
export const initAnalytics = (getLang: () => Lang): void => {
  if (typeof window === 'undefined') return

  // 1. Загрузка страницы — с языком и рекламными метками
  track('page_view', { lang: getLang(), ...getStoredUTM() })

  // 2. Глубина прокрутки: каждый рубеж отправляется один раз
  const reached = new Set<number>()
  const onScroll = () => {
    // Контейнером прокрутки может быть и <html>, и <body> (у body задан
    // overflow-x), поэтому берём позицию из всех возможных источников.
    const el = document.scrollingElement || document.documentElement
    const scrolled = window.scrollY || el.scrollTop || document.body.scrollTop || 0
    const scrollable = el.scrollHeight - window.innerHeight
    if (scrollable <= 0) return
    const percent = Math.round((scrolled / scrollable) * 100)
    ;[25, 50, 75, 100].forEach((mark) => {
      if (percent >= mark && !reached.has(mark)) {
        reached.add(mark)
        track('scroll_depth', { percent: mark, lang: getLang() })
      }
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('scroll', onScroll, { passive: true })
  onScroll() // страница могла открыться уже прокрученной (переход по якорю)

  // 3. Показы секций — какие блоки человек реально увидел
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const name = entry.target.getAttribute('data-analytics-section')
          if (name) track('section_view', { section: name, lang: getLang() })
          observer.unobserve(entry.target) // каждая секция считается один раз
        })
      },
      { threshold: 0.4 }
    )
    SECTIONS.forEach(([selector, name]) => {
      const el = document.querySelector(selector)
      if (!el) return
      el.setAttribute('data-analytics-section', name)
      observer.observe(el)
    })
  }

  // 4. Клики по внешним ссылкам (публичная оферта и любые ссылки наружу)
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement | null)?.closest?.('a[href]') as HTMLAnchorElement | null
    if (!link) return
    const href = link.getAttribute('href') || ''
    if (!/^https?:/i.test(href) || link.hostname === window.location.hostname) return
    track('outbound_click', { url: href, lang: getLang() })
  })

  // 5. Сообщения от формы QBox.
  //    Форма живёт в чужом iframe, напрямую её события не видны. Но если QBox
  //    отправляет postMessage — ловим его здесь. b2s_form_message покажет, что
  //    именно приходит; при явном признаке успеха шлём b2s_form_submit.
  window.addEventListener('message', (e: MessageEvent) => {
    if (!/qbox\.telecom\.kz$/i.test(new URL(e.origin).hostname)) return
    let raw = ''
    try {
      raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data)
    } catch {
      raw = String(e.data)
    }
    track('form_message', { payload: raw.slice(0, 300), lang: getLang() })
    if (/success|submit|complete|sent|thank|spasibo|готово/i.test(raw)) {
      track('form_submit', { lang: getLang() })
    }
  })
}
