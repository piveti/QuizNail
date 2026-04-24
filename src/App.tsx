import { useEffect } from 'react'
import { setupAnalytics } from './lib/analytics'
import { initPixel } from './lib/pixel'
import { useTracking, useScrollTracking } from './hooks/useTracking'

import { Hero } from './components/Hero'
import { ValueProps } from './components/ValueProps'
import { VideoSection } from './components/VideoSection'
import { WhatYouGet } from './components/WhatYouGet'
import { About } from './components/About'
import { Techniques } from './components/Techniques'
import { LessonPreview } from './components/LessonPreview'
import { Bonuses } from './components/Bonuses'
import { Raffle } from './components/Raffle'
import { StudyArea } from './components/StudyArea'
import { Certificates } from './components/Certificates'
import { Testimonials } from './components/Testimonials'
import { WhyNails } from './components/WhyNails'
import { Pricing } from './components/Pricing'
import { Guarantee } from './components/Guarantee'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    setupAnalytics()
    initPixel()
  }, [])

  useTracking('NailDesigner2026')
  useScrollTracking()

  return (
    <main>
      <Hero />
      <ValueProps />
      <VideoSection />
      <WhatYouGet />
      <About />
      <Techniques />
      <LessonPreview />
      <Bonuses />
      <Raffle />
      <StudyArea />
      <Certificates />
      <Testimonials />
      <WhyNails />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  )
}
