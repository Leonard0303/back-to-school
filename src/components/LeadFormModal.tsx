import { useEffect, useMemo } from 'react'
import type { Lang } from '../translations'
import { translations } from '../translations'
import { useUTM } from '../hooks/useUTM'

const FORM_URL = 'https://qbox.telecom.kz/forms/#/1f1155849c774ba98f5049a7c383b5cf'

interface LeadFormModalProps {
  lang: Lang
  open: boolean
  onClose: () => void
}

export default function LeadFormModal({ lang, open, onClose }: LeadFormModalProps) {
  const t = translations[lang]
  const { getUTMParams } = useUTM()

  const formUrlWithUTM = useMemo(() => {
    const utms = getUTMParams()
    const params = new URLSearchParams()
    params.append('lang', lang === 'kz' ? 'kk' : 'ru')
    Object.entries(utms).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    return `${FORM_URL}?${params.toString()}`
  }, [getUTMParams, lang])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 8, 40, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          height: 'min(720px, 92vh)',
          background: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
        }}
      >
        <button
          onClick={onClose}
          aria-label={t.modal.closeLabel}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(0,16,96,0.08)',
            color: '#001060',
            fontSize: '18px',
            lineHeight: 1,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>
        <iframe
          src={formUrlWithUTM}
          title={t.modal.formTitle}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}
