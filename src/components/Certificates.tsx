import { PAGE } from '../data/page'
import { CTAButton } from './CTAButton'

export function Certificates() {
  const { certificates, checkoutUrl } = PAGE

  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        <div className="text-6xl">🏆</div>

        <h2
          className="text-3xl md:text-4xl font-black text-white"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {certificates.heading}
        </h2>

        <p
          className="text-gray-300 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: certificates.body }}
        />

        {/* Urgency banner */}
        <div
          className="rounded-2xl px-6 py-5 w-full"
          style={{ background: 'rgba(227,41,93,0.12)', border: '1px solid rgba(227,41,93,0.4)' }}
        >
          {certificates.urgency.split('\n').map((line, i) => (
            <p
              key={i}
              className={i === 0 ? 'font-black text-lg' : 'text-gray-200 text-sm mt-1'}
              style={i === 0 ? { color: '#E7295D', fontFamily: "'Montserrat', sans-serif" } : {}}
            >
              {line}
            </p>
          ))}
        </div>

        <CTAButton label={certificates.ctaLabel} href={checkoutUrl} size="lg" eventLabel="certs-cta" />
      </div>
    </section>
  )
}
