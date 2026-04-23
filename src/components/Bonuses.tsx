import { PAGE } from '../data/page'
import { CTAButton } from './CTAButton'

export function Bonuses() {
  const { bonuses, checkoutUrl } = PAGE

  return (
    <section className="section-darker py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">
            Calma! Ainda tem mais
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-white">
            Dê uma olhada nos{' '}
            <span className="gradient-green">BÔNUS</span> que você vai receber:
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {bonuses.map((b, i) => (
            <div key={i} className="card-bonus flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <span className="tag-bonus">{b.tag}</span>
                  <h4 className="font-bold text-white mt-1">{b.title}</h4>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        <CTAButton label="Quero todos os Bônus!" href={checkoutUrl} size="lg" eventLabel="bonuses-cta" />
      </div>
    </section>
  )
}
