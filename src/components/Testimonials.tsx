import { PAGE } from '../data/page'

export function Testimonials() {
  const { testimonials } = PAGE

  return (
    <section className="section-darker py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-2xl md:text-3xl font-black text-center text-white">
          {testimonials.heading}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {testimonials.placeholders.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-xl bg-[#1e1b1b]">
              <img
                src={src}
                alt={`Depoimento ${i + 1}`}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-xs italic text-center max-w-md">
          * Depoimentos reais de alunas verificadas. Resultados individuais podem variar.
        </p>
      </div>
    </section>
  )
}
