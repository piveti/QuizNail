import React, { useState } from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
  alt: string
}

type LoadState = 'ok' | 'fallback' | 'broken'

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc = '/assets/nail-designer-images/outros/ainda-em-duvida__5.png',
  loading = 'lazy',
  ...props
}) => {
  const [state, setState] = useState<LoadState>('ok')

  const handleError = () => {
    setState((prev) => {
      if (prev === 'ok') return 'fallback'
      if (prev === 'fallback') return 'broken'
      return 'broken'
    })
  }

  if (state === 'broken') {
    return (
      <div
        className={`${className} bg-zinc-800 flex items-center justify-center text-zinc-600 text-xs`}
        aria-label={alt}
        role="img"
      >
        ✦
      </div>
    )
  }

  return (
    <img
      src={state === 'fallback' ? fallbackSrc : src}
      alt={alt}
      className={`${className}${state === 'fallback' ? ' opacity-50 grayscale' : ''}`}
      loading={loading}
      onError={handleError}
      {...props}
    />
  )
}
