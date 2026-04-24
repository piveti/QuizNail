import { useState } from 'react'
import { PAGE } from '../data/page'
import { track } from '../lib/analytics'

export function FAQ() {
  const { faq } = PAGE
  const [open, setOpen] = useState<number | null>(null)

  function toggle(i: number) {
    const next = open === i ? null : i
    setOpen(next)
    if (next !== null) track('FAQOpen', { question: faq[i].q })
  }

  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(243,0,130,0.6)', fontFamily: "'Montserrat', sans-serif" }}>FAQ</p>
          <h2
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left
                           font-semibold text-white hover:bg-white/5 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="ml-4 text-xl flex-shrink-0" style={{ color: '#F30082' }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>

              {open === i && (
                <div className="px-5 pb-5 text-gray-300 leading-relaxed text-sm border-t border-gray-700 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
