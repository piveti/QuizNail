declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
    _fbq: unknown
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '1527163542459342'

// O pixel já é inicializado e PageView já é disparado via <script> no index.html.
// Esta função existe apenas como hook caso o pixel não esteja no HTML (fallback).
export function initPixel() {
  if (!window.fbq) return
  // fbq já foi chamado no HTML — apenas confirma que está ativo
}


export function trackViewContent(params?: Record<string, unknown>) {
  if (!PIXEL_ID || !window.fbq) return
  window.fbq('track', 'ViewContent', params)
}

export function trackLead(params?: Record<string, unknown>) {
  if (!PIXEL_ID || !window.fbq) return
  window.fbq('track', 'Lead', params)
}

export function trackPurchase(value: number, currency = 'BRL') {
  if (!PIXEL_ID || !window.fbq) return
  window.fbq('track', 'Purchase', { value, currency })
}

export function trackInitiateCheckout() {
  if (!PIXEL_ID || !window.fbq) return
  window.fbq('track', 'InitiateCheckout')
}
