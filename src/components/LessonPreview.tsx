import { PAGE } from '../data/page'
import { CTAButton } from './CTAButton'

export function LessonPreview() {
  const { lessonPreview, checkoutUrl } = PAGE

  return (
    <section className="section-darker py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header — texto à esquerda */}
        <div className="flex flex-col gap-2 max-w-lg">
          <p
            className="text-white text-xl md:text-2xl font-semibold leading-snug"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Curso completo, com aulas práticas e direto ao ponto.
          </p>
          <p
            className="text-lg font-bold"
            style={{ color: '#F30082', fontFamily: "'Montserrat', sans-serif" }}
          >
            //Veja algumas aulas do curso.
          </p>
        </div>

        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessonPreview.videos.map((v) => (
            <div key={v.url} className="flex flex-col gap-3">
              <div
                className="relative w-full overflow-hidden rounded-xl shadow-2xl bg-black"
                style={{ paddingTop: '56.25%' }}
              >
                <iframe
                  src={v.url}
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                  title={v.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              {v.label && (
                <p
                  className="text-gray-400 text-sm text-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {v.label}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CTAButton
            label="Quero acessar todas as aulas!"
            href={checkoutUrl}
            size="lg"
            eventLabel="lesson-preview-cta"
          />
        </div>
      </div>
    </section>
  )
}
