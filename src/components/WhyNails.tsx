const ARROW_ICON = (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#e91e8c">
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448
    0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72
    20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0
    17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/>
  </svg>
)

const REASONS = [
  {
    title: 'Alta demanda o ano todo',
    body: 'Clientes voltam a cada 15–20 dias. Agenda cheia significa renda previsível e constante.',
  },
  {
    title: 'Rápido retorno financeiro',
    body: 'Com poucas clientes por dia já é possível gerar um faturamento acima da média de empregos tradicionais.',
  },
  {
    title: 'Profissão que transforma vidas',
    body: 'Você eleva a autoestima de outras mulheres enquanto constrói sua própria independência.',
  },
  {
    title: 'Baixo investimento inicial',
    body: 'É possível começar com estrutura simples e crescer conforme aumenta sua clientela.',
  },
  {
    title: 'Liberdade e flexibilidade',
    body: 'Trabalhe por conta própria, faça seus horários e construa sua própria marca.',
  },
]

export function WhyNails() {
  return (
    <section style={{ background: '#f4f4f4', padding: '60px 16px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>

        <h2
          style={{
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(22px, 4vw, 30px)',
            color: '#111',
            marginBottom: 8,
          }}
        >
          Por que você precisa trabalhar com{' '}
          <span style={{ color: '#e91e8c' }}>Alongamento de Unhas?</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {REASONS.map((r) => (
            <div
              key={r.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
                background: '#fff',
                borderRadius: 12,
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                padding: '20px 24px',
                maxWidth: 680,
                margin: '0 auto',
                width: '100%',
              }}
            >
              {/* Ícone circular */}
              <div
                style={{
                  flexShrink: 0,
                  width: 48,
                  height: 48,
                  border: '2px solid #e91e8c',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {ARROW_ICON}
              </div>

              {/* Texto */}
              <div>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#111',
                    marginBottom: 4,
                  }}
                >
                  {r.title}
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: '#555', lineHeight: 1.6 }}>
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
