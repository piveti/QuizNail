import { PAGE } from '../data/page'
import { CTAButton } from './CTAButton'

export function About() {
  const { about, checkoutUrl } = PAGE

  return (
    <section className="section-darker py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        <h2
          className="text-3xl md:text-5xl font-black leading-tight"
          dangerouslySetInnerHTML={{ __html: about.heading }}
        />

        <p
          className="text-gray-300 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: about.body }}
        />

        <p
          className="text-gray-200 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: about.body2 }}
        />

        <CTAButton label={about.ctaLabel} href={checkoutUrl} size="lg" eventLabel="about-cta" />
      </div>
    </section>
  )
}
