import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import { PAGE } from '../data/page'

const YT_VIDEOS = [
  { id: 'RqUYER9U9V4' },
  { id: '68a_miunzG4' },
  { id: 'wkXyzaxhrRg' },
  { id: 'kILW8h5_ZH8' },
]

const btnBase: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  border: '2px solid #e91e8c',
  background: 'transparent',
  color: '#fff',
  borderRadius: 30,
  padding: '14px 36px',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: 15,
  letterSpacing: '0.05em',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background 0.2s, color 0.2s',
}

export function Testimonials() {
  const { testimonials, checkoutUrl } = PAGE

  return (
    <section style={{ background: '#0b0e1a', padding: '60px 0' }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', padding: '0 16px', marginBottom: 40 }}>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(22px, 4vw, 32px)',
            lineHeight: 1.3,
            color: '#fff',
          }}
        >
          <span style={{ color: '#c1e673' }}>Isso é o que acontece</span>
          <br />
          quando uma mulher decide:
        </h2>
      </div>

      {/* Carrossel Swiper — fotos de alunas */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        className="wave-carousel"
        style={{ paddingLeft: 16, paddingRight: 16 }}
      >
        {testimonials.placeholders.map((src, i) => (
          <SwiperSlide key={`${src}-${i}`}>
            <img
              src={src}
              alt={`Depoimento de aluna ${i + 1}`}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 12,
                display: 'block',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Grid 2×2 vídeos YouTube */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          maxWidth: 960,
          margin: '40px auto 0',
          padding: '0 16px',
        }}
        className="yt-video-grid"
      >
        {YT_VIDEOS.map(({ id }) => (
          <div
            key={id}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}?controls=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Depoimento ${id}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: 40, padding: '0 16px' }}>
        <a
          href={checkoutUrl}
          style={btnBase}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.background = '#e91e8c'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
          }}
        >
          <span>▶</span>
          QUERO ACESSAR AGORA
        </a>
      </div>

    </section>
  )
}
