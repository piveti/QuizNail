import { PAGE } from '../data/page'
import { track } from '../lib/analytics'
import { trackInitiateCheckout } from '../lib/pixel'

export function Pricing() {
  const { pricing, checkoutUrl } = PAGE

  function handleClick() {
    track('CTAClick', { label: 'pricing-cta', section: 'pricing' })
    trackInitiateCheckout()
  }

  return (
    <section id="nail0102" className="section-dark py-20 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
        {/* Warning */}
        <div className="bg-red-900/40 border border-red-500/50 rounded-xl px-6 py-3 w-full text-center">
          <p className="font-black text-red-300 text-lg">{pricing.warning}</p>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-black text-center text-white"
          dangerouslySetInnerHTML={{ __html: pricing.heading }}
        />

        {/* Price card */}
        <div className="bg-gradient-to-b from-[#1e1b1b] to-[#161313] border border-yellow-600/40
                        rounded-3xl p-8 w-full flex flex-col items-center gap-5 shadow-2xl shadow-black/60">
          <p className="text-gray-400 text-sm uppercase tracking-widest">De 12x de</p>
          <p className="text-5xl md:text-6xl font-black gradient-gold">{pricing.price}</p>
          <p className="text-gray-300 text-base">{pricing.priceLabel}</p>
          <p className="text-gray-400 text-sm">ou {pricing.installments}</p>

          <a
            href={checkoutUrl}
            onClick={handleClick}
            className="btn-primary-lg pulse-cta w-full text-center mt-2"
          >
            {pricing.ctaLabel}
          </a>

          {pricing.safeImage && (
            <img
              src={pricing.safeImage}
              alt="Compra segura"
              className="h-10 object-contain opacity-80"
              loading="lazy"
            />
          )}

          {pricing.paymentImage && (
            <img
              src={pricing.paymentImage}
              alt="Formas de pagamento"
              className="w-full max-w-xs object-contain opacity-70"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  )
}
