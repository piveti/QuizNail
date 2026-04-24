import { PAGE } from '../data/page'
import { ImageMap } from '../data/imageMap'
import { Image } from './Image'

export function Techniques() {
  const { techniques } = PAGE

  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Heading */}
        <div className="text-center">
          <p
            className="font-bold tracking-widest uppercase text-sm mb-2"
            style={{
              background: 'linear-gradient(133deg,#F30082,#C5075E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {techniques.subheading}
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {techniques.heading}
          </h2>
        </div>

        {/*
         * Grid 4 colunas — fiel ao original (4 col desktop / 3 md / 2 sm / 1 xs)
         * Cada card: imagem circular + badge emoji + título abaixo
         */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full">
          {techniques.items.map((item) => {
            const imgSrc = ImageMap.moduleImages[item]

            return (
              <div
                key={item}
                className="flex flex-col items-center gap-3 rounded-2xl p-4 pb-5 text-center"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Moldura circular com imagem */}
                <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{ border: '2px solid rgba(255,255,255,0.1)' }}
                  >
                    {imgSrc ? (
                      <Image
                        src={imgSrc}
                        alt={item}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-3xl"
                        style={{ background: '#1a0f1e' }}
                      >
                        💅
                      </div>
                    )}
                  </div>
                </div>

                {/* Título */}
                <span
                  className="text-sm font-semibold text-gray-200 leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
