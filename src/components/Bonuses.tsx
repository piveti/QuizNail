import { PAGE } from '../data/page'
import { Image } from './Image'
import { CTAButton } from './CTAButton'

function StarRating() {
  return <span className="star-rating">★★★★★</span>
}

export function Bonuses() {
  const { bonuses, checkoutUrl } = PAGE

  return (
    <section className="section-darker py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            Isso tudo valeria R$ 1.023,00 separadamente — você recebe tudo:
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Dê uma olhada nos{' '}
            <span style={{ background: 'linear-gradient(133deg,#F30082,#C5075E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              BÔNUS
            </span>{' '}
            que você vai receber:
          </h2>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {bonuses.map((b, i) => (
            <div key={i} className="card-bonus flex flex-row items-start gap-4">
              {/* Thumbnail à esquerda */}
              {b.image && (
                <div className="flex-shrink-0 rounded-xl overflow-hidden" style={{ width: 110, height: 110 }}>
                  <Image
                    src={b.image}
                    alt={b.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Conteúdo à direita */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <StarRating />
                <div className="flex items-center gap-2 flex-wrap">
                  <h4
                    className="font-bold text-white"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                  >
                    {b.title}
                  </h4>
                  <span className="tag-bonus">{b.tag}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        <CTAButton label="Quero todos os Bônus!" href={checkoutUrl} size="lg" eventLabel="bonuses-cta" />
      </div>
    </section>
  )
}
