import { track } from '../lib/analytics'
import { trackInitiateCheckout } from '../lib/pixel'

const CHECKOUT_URL = 'https://pay.cakto.com.br/hfe7h83'

const CHECKLIST = [
  'Acesso Vitalício',
  'Atualizações gratuitas para sempre',
  'Todos os Bônus',
  '25 Certificados',
  'Sorteio do Kit Mensal',
  'Grupo de Interação',
]

const BADGES = [
  { icon: '🔒', label: 'Compra Segura' },
  { icon: '✅', label: 'Satisfação Garantida' },
  { icon: '🛡️', label: 'Privacidade Protegida' },
]

export function Pricing() {
  function handleClick() {
    track('CTAClick', { label: 'pricing-cta', section: 'pricing' })
    trackInitiateCheckout()
  }

  return (
    <section
      id="nail0102"
      style={{ background: '#0d0c0c', padding: '60px 16px' }}
    >
      {/* Card centralizado — neon glow constante via .neon-card */}
      <div
        className="neon-card"
        style={{
          maxWidth: 380,
          margin: '0 auto',
          background: '#130929',
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* 1 — Estrelas + avaliação */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#f5c518', fontSize: 20, letterSpacing: 2 }}>★★★★★</div>
          <div style={{ color: '#ccc', fontSize: 14, marginTop: 4 }}>
            4.97 (3.312 Avaliações)
          </div>
        </div>

        {/* 2 — Badge "FORMAÇÃO COMPLETA" — gradiente rastreado do post-1853.css */}
        <div
          className="badge-gradient"
          style={{
            borderRadius: 8,
            padding: '12px 0',
            textAlign: 'center',
            color: '#fff',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: 1,
          }}
        >
          FORMAÇÃO COMPLETA
        </div>

        {/* 3 — Checklist */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {CHECKLIST.map((item, i) => (
            <li
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                color: '#fff',
                fontSize: 14,
                fontFamily: "'Poppins', sans-serif",
                padding: '10px 0',
                borderBottom: i < CHECKLIST.length - 1
                  ? '1px solid rgba(255,255,255,0.06)'
                  : 'none',
              }}
            >
              <span style={{ color: '#00d2ff', fontWeight: 700, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* 4 — Preço */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: 4,
            }}
          >
            <span style={{ color: '#fff', fontSize: 14, fontFamily: "'Poppins', sans-serif" }}>R$</span>
            <span
              style={{
                color: '#ff6b35',
                fontSize: 48,
                fontWeight: 800,
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: 1,
              }}
            >
              78,90
            </span>
          </div>
          <div style={{ color: '#ccc', fontSize: 12, fontFamily: "'Poppins', sans-serif", marginTop: 4 }}>
            OU 12X DE{' '}
            <span style={{ fontWeight: 700 }}>R$ 9,18</span>
          </div>
        </div>

        {/* 5 — Botão CTA */}
        <a
          href={CHECKOUT_URL}
          onClick={handleClick}
          className="cta-btn"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            background: 'linear-gradient(135deg, #f0338a 0%, #c2185b 100%)',
            color: '#fff',
            borderRadius: 10,
            padding: '14px 20px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            boxShadow: '0 4px 20px rgba(233,30,140,0.45)',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.opacity = '1'
          }}
        >
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: 15,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
          }}>
            QUERO MEU ACESSO AGORA
          </span>
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: '0.03em',
          }}>
            R$ 78,90
          </span>
        </a>

        {/* 6 — Badges de segurança (uma vez) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
            flexWrap: 'wrap',
            marginTop: 4,
          }}
        >
          {BADGES.map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                color: '#aaa',
                fontSize: 11,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <span style={{ fontSize: 18 }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
