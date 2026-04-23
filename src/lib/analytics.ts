export interface TrackPayload {
  event: string
  slug?: string
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  utm_content?: string | null
  utm_term?: string | null
  fbclid?: string | null
  referrer?: string
  url?: string
  ts?: number
  [key: string]: unknown
}

function getUTMs(): Partial<TrackPayload> {
  const p = new URLSearchParams(window.location.search)
  return {
    utm_source: p.get('utm_source'),
    utm_medium: p.get('utm_medium'),
    utm_campaign: p.get('utm_campaign'),
    utm_content: p.get('utm_content'),
    utm_term: p.get('utm_term'),
    fbclid: p.get('fbclid'),
  }
}

function persistUTMs() {
  const utms = getUTMs()
  const hasAny = Object.values(utms).some(Boolean)
  if (hasAny) sessionStorage.setItem('nd_utms', JSON.stringify(utms))
}

function loadUTMs(): Partial<TrackPayload> {
  try {
    return JSON.parse(sessionStorage.getItem('nd_utms') || '{}')
  } catch {
    return {}
  }
}

export function setupAnalytics() {
  persistUTMs()
}

export async function track(event: string, extra: Record<string, unknown> = {}) {
  const payload: TrackPayload = {
    event,
    slug: window.location.pathname.replace(/^\//, '') || 'home',
    ...loadUTMs(),
    referrer: document.referrer || undefined,
    url: window.location.href,
    ts: Date.now(),
    ...extra,
  }

  // Fire-and-forget — never block UX
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    })
  } catch {
    // silent fail in production
  }
}
