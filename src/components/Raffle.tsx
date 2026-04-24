import { PAGE } from '../data/page'
import { CTAButton } from './CTAButton'
import { Image } from './Image'

export function Raffle() {
  const { raffle, checkoutUrl } = PAGE

  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <Image
          src={raffle.image}
          alt="Sorteio Kit Manicure"
          className="w-full md:w-80 object-contain rounded-2xl"
        />

        <div className="flex flex-col gap-6 flex-1">
          <p
            className="font-bold uppercase tracking-widest text-sm"
            style={{ background: 'linear-gradient(133deg,#F30082,#C5075E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: "'Montserrat', sans-serif" }}
          >
            Ainda tem mais uma coisinha…
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white leading-snug" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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
