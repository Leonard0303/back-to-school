/**
 * Конфигурация лид-формы QBox (Back to School).
 *
 * Всё, что связано с формой, настраивается ЗДЕСЬ и больше нигде не дублируется:
 * адрес формы, имя продукта и соответствие «язык сайта → язык формы».
 * Компонент LeadFormModal.vue только подставляет готовый URL в <iframe>.
 */
import type { Lang } from '../translations'
import type { UTMParams } from '../composables/useUTM'

/** Базовый адрес приложения форм QBox (часть ссылки до «#»). */
const QBOX_BASE_URL = 'https://qbox.telecom.kz/forms/'

/** ID формы — часть исходной ссылки QBox после «#/». */
const QBOX_FORM_ID = '1f1155849c774ba98f5049a7c383b5cf'

/** Имя продукта, с которым лид уходит в QBox. */
export const PRODUCT_NAME = 'back-to-school'

/**
 * Язык сайта → код языка формы QBox.
 * Тип Record<Lang, …> гарантирует: добавите новый язык сайта —
 * TypeScript потребует указать для него язык формы здесь.
 */
const FORM_LANG: Record<Lang, string> = {
  ru: 'ru',
  kz: 'kk',
}

/**
 * Собирает ссылку на форму: язык + имя продукта + UTM-метки.
 *
 * Параметры ставятся ДО «#», потому что QBox — SPA с hash-роутингом:
 * только в таком виде они попадают в location.search и читаются формой.
 * (Если дописать их после «#/<id>», они станут частью хэша и потеряются.)
 */
export const buildLeadFormUrl = (lang: Lang, utm: UTMParams): string => {
  const params = new URLSearchParams({
    lang: FORM_LANG[lang],
    product: PRODUCT_NAME,
  })
  Object.entries(utm).forEach(([key, value]) => {
    if (value) params.append(key, value)
  })
  return `${QBOX_BASE_URL}?${params.toString()}#/${QBOX_FORM_ID}`
}
