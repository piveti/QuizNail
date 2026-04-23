import { useEffect, useRef, useState } from 'react'
import { PAGE } from '../data/page'
import { track } from '../lib/analytics'
import { CTAButton } from './CTAButton'

export function VideoSection() {
  const { vsl, checkoutUrl } = PAGE
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Estados do Player
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState<string | null>(null)
  const [showOverlay, setShowOverlay] = useState(true)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)

  // 1. Lógica de Autoplay Inteligente
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (!videoRef.current) return

      try {
        // Tenta dar play com som primeiro
        videoRef.current.muted = false
        await videoRef.current.play()
        setIsPlaying(true)
        setIsMuted(false)
        setShowOverlay(false)
        console.log('[VSL] Autoplay com som: SUCESSO.')
      } catch (error) {
        console.warn('[VSL] Autoplay com som BLOQUEADO. Tentando muted fallback...')
        
        try {
          if (videoRef.current) {
            videoRef.current.muted = true
            await videoRef.current.play()
            setIsPlaying(true)
            setIsMuted(true)
            setAutoplayBlocked(true)
            console.log('[VSL] Fallback Muted: SUCESSO.')
          }
        } catch (mutedError) {
          console.error('[VSL] Autoplay totalmente bloqueado.', mutedError)
          setShowOverlay(true)
        }
      }
    }

    if (isReady) {
      attemptAutoplay()
    }
  }, [isReady])

  // 2. Ação Principal: Play/Pause (Disparado pelo clique no container)
  const togglePlayPause = async () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play()
        setIsPlaying(true)
        setShowOverlay(false)
      } catch (e) {
        console.error('[VSL] Erro ao tentar dar play:', e)
      }
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
      setShowOverlay(true)
    }
  }

  // 3. Ação de Áudio: Mute/Unmute (Disparado apenas pelo botão de som)
  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation() // CRITICAL: Impede que o clique dispare o togglePlayPause do pai

    if (!videoRef.current) return

    const newMutedState = !videoRef.current.muted
    videoRef.current.muted = newMutedState
    setIsMuted(newMutedState)
    
    if (!newMutedState) {
      setAutoplayBlocked(false) // Remove o estado de bloqueio se o usuário ativou o som
    }
    
    console.log(`[VSL] Botão de som clicado. Muted: ${newMutedState}`)
  }

  // 4. Handlers de Eventos de Sincronização de Estado
  const handleLoadedMetadata = () => {
    console.log('[VSL] Metadados carregados.')
    setIsReady(true)
  }

  return (
    <section className="section-darker py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-2xl md:text-3xl font-black text-center text-white leading-tight">
          Assista ao vídeo e descubra como funciona
        </h2>

        <div 
          className="video-wrapper w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80 bg-black/40 relative cursor-pointer group"
          onClick={togglePlayPause}
        >
          {/* Botão de Som Independente */}
          <button
            type="button"
            onClick={toggleMute}
            className={`vsl-unmute-button ${isMuted ? 'pulse' : ''}`}
            aria-label={isMuted ? 'Ativar som' : 'Silenciar som'}
          >
            {isMuted ? (
              <div className="flex items-center gap-2 pr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                <span className="text-[10px] font-bold uppercase tracking-tighter whitespace-nowrap">Ativar Som</span>
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            )}
          </button>

          {/* Vídeo Nativo Customizado */}
          <video
            ref={videoRef}
            src={vsl.localVideoPath}
            poster={vsl.thumbnailUrl}
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => { setIsPlaying(true); setShowOverlay(false); track('VSL_Play', { type: 'local' }); }}
            onPause={() => { setIsPlaying(false); setShowOverlay(true); }}
            onError={() => setHasError('Erro ao carregar vídeo backup.')}
          />

          {/* Overlay Central de Feedback Play/Pause */}
          <div className={`vsl-overlay ${showOverlay || !isPlaying ? 'vsl-overlay-active' : ''}`}>
            <div className="vsl-play-button">
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="ml-2"><path d="M5 3l14 9-14 9V3z"/></svg>
              )}
            </div>
          </div>

          {/* Erro Fallback */}
          {hasError && (
            <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-gray-900 px-6 text-center">
              <p className="text-white font-bold mb-2">Ops! Ocorreu um problema.</p>
              <p className="text-yellow-500 text-xs underline">Tente recarregar a página</p>
            </div>
          )}
        </div>

        {/* Debug Info & Status */}
        <div className="flex items-center gap-4 text-[9px] text-gray-600 uppercase tracking-[0.2em] font-medium">
          <span>Server Backup Mode</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse"></span>
          {autoplayBlocked && <span className="text-yellow-600/80">Browser Audio Blocked</span>}
        </div>

        <CTAButton label="FAZER MINHA INSCRIÇÃO!" href={checkoutUrl} size="lg" eventLabel="vsl-cta-premium" />
      </div>
    </section>
  )
}
