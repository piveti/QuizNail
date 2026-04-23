import { PAGE } from '../data/page'
import { CTAButton } from './CTAButton'

export function Hero() {
  const { hero, checkoutUrl } = PAGE

  return (
    <section
      id="topo"
      className="relative min-h-[600px] md:min-h-[640px] flex flex-col justify-center items-start overflow-hidden"
      style={{
        backgroundImage: `url(${hero.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-24 flex flex-col gap-6">
        {/* Logo */}
        <img
          src={hero.logoUrl}
          alt="Nail Designer Logo"
          className="h-14 md:h-16 object-contain self-start"
        />

        {/* Badge */}
        <span className="text-sm font-semibold text-brand-gold bg-white/10 rounded-full px-4 py-1 w-fit">
          {hero.badge}
        </span>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-black leading-tight text-white text-shadow max-w-2xl">
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p
          className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed"
          dangerouslySetInnerHTML={{ __html: hero.subheadline }}
        />

        <CTAButton label={hero.ctaLabel} href={checkoutUrl} size="lg" eventLabel="hero-cta" />
      </div>
    </section>
  )
}
