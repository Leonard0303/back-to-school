import { useState } from 'react'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Benefits from './components/Benefits'
import Steps from './components/Steps'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'
import LeadFormModal from './components/LeadFormModal'

export default function App() {
  const [formOpen, setFormOpen] = useState(false)
  const openForm = () => setFormOpen(true)

  return (
    <div>
      <Hero onOpenForm={openForm} />
      <Pricing />
      <Benefits />
      <Steps />
      <BottomCTA onOpenForm={openForm} />
      <Footer />
      <LeadFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  )
}
