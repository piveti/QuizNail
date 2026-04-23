import { PAGE } from '../data/page'
import { CTAButton } from './CTAButton'

export function Raffle() {
  const { raffle, checkoutUrl } = PAGE

  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={raffle.image}
          alt="Sorteio Kit Manicure"
          className="w-full md:w-80 object-contain rounded-2xl"
          loading="lazy"
        />

        <div className="flex flex-col gap-6 flex-1">
          <p className="text-brand-gold font-bold uppercase tracking-widest text-sm">
            Ainda tem mais uma coisinha…
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
            {raffle.heading}
          </h2>
          <p
            className="text-gray-300 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: raffle.body }}
          />
          <CTAButton label={raffle.ctaLabel} href={checkoutUrl} variant="green" size="lg" eventLabel="raffle-cta" />
        </div>
      </div>
    </section>
  )
}
