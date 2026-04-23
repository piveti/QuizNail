import { useEffect, useRef } from 'react'
import { track } from '../lib/analytics'
import { trackViewContent } from '../lib/pixel'

export function useTracking(pageName: string) {
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true
    track('ViewContent', { page: pageName })
    trackViewContent({ content_name: pageName, content_type: 'product' })
  }, [pageName])
}

export function useScrollTracking() {
  useEffect(() => {
    const milestones = new Set<number>()
    const check = () => {
      const pct = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100,
      )
      for (const m of [25, 50, 75, 90]) {
        if (pct >= m && !milestones.has(m)) {
          milestones.add(m)
          track('Scroll', { depth: m })
        }
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])
}
