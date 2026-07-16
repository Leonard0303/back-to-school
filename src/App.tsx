import { useState } from 'react'
import type { Lang } from './translations'
import { useUTM } from './hooks/useUTM'
import LanguageSwitcher from './components/LanguageSwitcher'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Steps from './components/Steps'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'
import LeadFormModal from './components/LeadFormModal'

export default function App() {
  useUTM()
  const [formOpen, setFormOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('ru')
  const openForm = () => setFormOpen(true)

  return (
    <div>
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Pricing lang={lang} />
      <Steps lang={lang} />
      <BottomCTA lang={lang} onOpenForm={openForm} />
      <Footer lang={lang} />
      <LeadFormModal lang={lang} open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  )
}
