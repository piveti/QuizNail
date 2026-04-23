import { PAGE } from '../data/page'

const ICONS: Record<string, string> = {
  'Cutilagem Profissional': '✂️',
  'Fibra de Vidro': '💎',
  'Molde F1': '💅',
  'Encapsuladas': '✨',
  'Esmaltação em Gel': '💜',
  'Polygel': '🌸',
  'Alongamento Natural': '🌟',
  'Baby Boomer': '🤍',
  'Nail Art Avançada': '🎨',
  'Manutenção Completa': '🛠️',
}

export function Techniques() {
  const { techniques } = PAGE

  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center">
          <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2">
            {techniques.subheading}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">{techniques.heading}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {techniques.items.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center gap-3 bg-[#1e1b1b] border border-yellow-900/20
                         rounded-2xl p-5 hover:border-yellow-500/40 transition-colors text-center"
            >
              <span className="text-3xl">{ICONS[item] ?? '💅'}</span>
              <span className="text-sm font-semibold text-gray-200 leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* Technique showcase images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
          {Object.values(techniques.images).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Técnica ${i + 1}`}
              className="w-full aspect-square object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
