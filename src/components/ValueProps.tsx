const PROPS = [
  {
    icon: '📈',
    title: 'Do Básico ao Avançado',
    body: 'Começou do zero? Sem problema. O curso leva você das técnicas mais simples até as mais avançadas do mercado — sem pular etapas, sem se perder e sem precisar de experiência para começar a atender clientes.',
  },
  {
    icon: '🎬',
    title: '+130 Aulas em Vídeo',
    body: 'Mais de 130 videoaulas práticas, gravadas em HD, disponíveis para assistir a qualquer hora, de qualquer lugar — no seu ritmo, encaixando na sua rotina.',
  },
  {
    icon: '🏆',
    title: '25 Certificados',
    body: 'Receba 25 certificados de conclusão reconhecidos, comprovando seu nível profissional para clientes e salões — dando autoridade para cobrar mais desde o início.',
  },
]

export function ValueProps() {
  return (
    <section className="section-purple py-14 px-4" style={{ borderBottom: '4px solid #E7295D' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROPS.map((p) => (
          <div
            key={p.title}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(243,0,130,0.18)' }}
          >
            <span className="text-4xl">{p.icon}</span>
            <h3
              className="text-lg font-bold text-white font-montserrat"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              {p.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
