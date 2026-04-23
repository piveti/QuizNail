import { PAGE } from '../data/page'

export function WhatYouGet() {
  const { whatYouGet } = PAGE

  return (
    <section className="section-dark py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <h2
          className="text-3xl md:text-4xl font-black text-center text-white"
          dangerouslySetInnerHTML={{ __html: whatYouGet.heading }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {whatYouGet.mockupImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Conteúdo do curso ${i + 1}`}
              className="w-full rounded-2xl shadow-xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
