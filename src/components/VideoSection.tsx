import { useEffect, useRef, useState } from 'react'
import { PAGE } from '../data/page'
import { track } from '../lib/analytics'
import { CTAButton } from './CTAButton'

export function VideoSection() {
  const { vsl, checkoutUrl } = PAGE
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Estados do Player
  const [useLocalPlayer, setUseLocalPlayer] = useState(true) // Prioridade para o vídeo local
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const [_autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [isSwitchingToPanda, setIsSwitchingToPanda] = useState(false)

  // 1. Lógica de Autoplay Inteligente (Apenas para o player local)
  useEffect(() => {
    if (!useLocalPlayer) return

    const attemptAutoplay = async () => {
      if (!videoRef.current) return

      try {
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
  }, [isReady, useLocalPlayer])

  // 2. Play/Pause
  const togglePlayPause = async () => {
    if (!useLocalPlayer) return // No Panda, o controle é do iframe

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

  // 3. Mute/Unmute
  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if (!videoRef.current) return

    const newMutedState = !videoRef.current.muted
    videoRef.current.muted = newMutedState
    setIsMuted(newMutedState)
    
    if (!newMutedState) {
      setAutoplayBlocked(false)
    }
    
    console.log(`[VSL] Som alterado. Muted: ${newMutedState}`)
  }

  // 4. Fallback para Panda Video
  const handleLocalVideoError = () => {
    console.warn('[VSL] Erro no vídeo local. Acionando fallback para Panda Video...')
    setIsSwitchingToPanda(true)
    // Pequeno delay para a mensagem de transição ser visível antes do iframe carregar
    setTimeout(() => {
      setUseLocalPlayer(false)
      setIsSwitchingToPanda(false)
    }, 800)
  }

  return (
    <section className="section-purple py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h2
          className="text-2xl md:text-3xl font-black text-center text-white leading-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Assista ao vídeo e descubra como funciona
        </h2>

        <div
          className="video-wrapper w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80 bg-black/40 relative group"
          onClick={useLocalPlayer && !isSwitchingToPanda ? togglePlayPause : undefined}
          style={{ cursor: useLocalPlayer && !isSwitchingToPanda ? 'pointer' : 'default' }}
        >
          {/* Mensagem de transição local → Panda */}
          {isSwitchingToPanda && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 gap-3">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <p className="text-white/70 text-sm font-medium tracking-wide">Carregando player alternativo…</p>
            </div>
          )}

          {/* Indicador de carregamento inicial do vídeo local */}
          {useLocalPlayer && !isReady && !isSwitchingToPanda && (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
            </div>
          )}

          {useLocalPlayer ? (
            <>
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

              <video
                ref={videoRef}
                src={vsl.localVideoPath}
                poster={vsl.thumbnailUrl}
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                onLoadedMetadata={() => setIsReady(true)}
                onPlay={() => { setIsPlaying(true); setShowOverlay(false); track('VSL_Play', { type: 'local' }); }}
                onPause={() => { setIsPlaying(false); setShowOverlay(true); }}
                onError={handleLocalVideoError}
              />

              {/* Overlay Central */}
              <div className={`vsl-overlay ${showOverlay || !isPlaying ? 'vsl-overlay-active' : ''}`}>
                <div className="vsl-play-button">
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="ml-2"><path d="M5 3l14 9-14 9V3z"/></svg>
                  )}
                </div>
              </div>
            </>
          ) : (
            <iframe
              src={`${vsl.pandaUrl}&playsinline=1`}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
              allowFullScreen
              title="VSL Nail Designer"
              className="w-full h-full border-0 absolute inset-0"
              loading="eager"
            />
          )}
        </div>

        <CTAButton label="FAZER MINHA INSCRIÇÃO!" href={checkoutUrl} size="lg" eventLabel="vsl-cta-premium" />
      </div>
    </section>
  )
}
