import { track } from '../lib/analytics'
import { trackInitiateCheckout } from '../lib/pixel'

interface Props {
  label: string
  href: string
  variant?: 'primary' | 'green' | 'gold'
  size?: 'base' | 'lg'
  className?: string
  eventLabel?: string
}

export function CTAButton({ label, href, variant: _variant = 'primary', size = 'base', className = '', eventLabel }: Props) {
  const cls = size === 'lg' ? 'btn-primary-lg pulse-cta' : 'btn-primary'

  function handleClick() {
    track('CTAClick', { label: eventLabel || label, href })
    trackInitiateCheckout()
  }

  return (
    <a href={href} onClick={handleClick} className={`${cls} ${className}`}>
      {label}
    </a>
  )
}
