import { PAGE } from '../data/page'
import { Image } from './Image'

export function Guarantee() {
  const { guarantee } = PAGE

  return (
    <section className="section-darker py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <Image
          src={guarantee.image}
          alt={`Garantia ${guarantee.days} dias`}
          className="w-36 md:w-44 object-contain flex-shrink-0"
        />

        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-black text-white">
            {guarantee.heading}
          </h2>
          <p className="text-gray-300 leading-relaxed">{guarantee.body}</p>
        </div>
      </div>
    </section>
  )
}
