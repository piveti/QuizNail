import { track } from '../lib/analytics'
import { trackInitiateCheckout } from '../lib/pixel'

interface Props {
  label: string
  href: string
  variant?: 'gold' | 'green'
  size?: 'base' | 'lg'
  className?: string
  eventLabel?: string
}

export function CTAButton({ label, href, variant = 'gold', size = 'base', className = '', eventLabel }: Props) {
  const cls =
    variant === 'green'
      ? size === 'lg' ? 'btn-green text-lg md:text-xl px-10 py-5' : 'btn-green'
      : size === 'lg' ? 'btn-primary-lg pulse-cta' : 'btn-primary'

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
