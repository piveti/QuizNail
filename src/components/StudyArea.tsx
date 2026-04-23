import { PAGE } from '../data/page'

export function StudyArea() {
  const { studyArea } = PAGE

  return (
    <section className="section-darker py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-white">
          {studyArea.heading}
        </h2>

        <div className="video-wrapper w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl shadow-black/70 bg-black/20">
          <iframe
            src={studyArea.vimeoUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            title="Área de Estudos Nail Designer"
            className="w-full h-full border-0"
          />
        </div>

        {/* Fallback link */}
        <div className="mt-[-1rem] text-center">
          <a 
            href={studyArea.vimeoUrl.replace('/video/', '/')} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm underline flex items-center justify-center gap-2 transition-colors"
          >
            Problemas com o vídeo? Assistir no Vimeo
          </a>
        </div>


        <img
          src={studyArea.image}
          alt="Área de membros preview"
          className="w-full max-w-2xl rounded-xl shadow-xl"
          loading="lazy"
        />
      </div>
    </section>
  )
}
