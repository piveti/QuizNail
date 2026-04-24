import { useEffect } from 'react'
import { PAGE } from '../data/page'

const VIMEO_SDK = 'https://player.vimeo.com/api/player.js'
const VIMEO_URL =
  'https://player.vimeo.com/video/1136282028?badge=0&autopause=0&player_id=0&app_id=58479'

export function StudyArea() {
  const { studyArea } = PAGE

  useEffect(() => {
    if (document.querySelector(`script[src="${VIMEO_SDK}"]`)) return
    const s = document.createElement('script')
    s.src = VIMEO_SDK
    s.async = true
    document.body.appendChild(s)
  }, [])

  return (
    <section
      className="py-20 px-4"
      style={{ background: 'linear-gradient(160deg, #110c16 0%, #0d0c0c 60%, #12090f 100%)' }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* ── Coluna esquerda — Texto ── */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <span
            className="w-fit flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{
              border: '1px solid rgba(243,0,130,0.5)',
              color: '#F30082',
              fontFamily: "'Montserrat', sans-serif",
              background: 'rgba(243,0,130,0.08)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            {studyArea.badge}
          </span>

          {/* Título */}
          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
          >
            <span
              style={{
                background: 'linear-gradient(133deg,#F30082,#C5075E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Área
            </span>{' '}
            <span className="text-white">de Estudos!</span>
          </h2>

          {/* Subtítulo */}
          <p
            className="text-xl md:text-2xl font-semibold text-white leading-snug"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Veja onde você irá{' '}
            <span
              style={{
                background: 'linear-gradient(133deg,#F30082,#C5075E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              assistir às aulas do curso.
            </span>
          </p>

          {/* Parágrafo */}
          <p
            className="text-gray-300 text-base leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {studyArea.body}
          </p>

          {/* Nota de segurança */}
          <div
            className="flex items-start gap-3 rounded-xl px-4 py-3"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <svg
              className="flex-shrink-0 mt-0.5"
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="#F30082" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {studyArea.securityNote}
            </p>
          </div>
        </div>

        {/* ── Coluna direita — Player Vimeo ── */}
        <div className="w-full">
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              paddingTop: '56.25%',
              background: '#0d0d0d',
              boxShadow: '0 0 40px rgba(224,64,251,0.35)',
            }}
          >
            <iframe
              src={VIMEO_URL}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              title="Área de Estudos — Nail Designer"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
