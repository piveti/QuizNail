// Base paths
const BASE = '/assets/nail-designer-images'
const IMG  = '/assets/images'  // novo diretório — clone/nail-designer-2-0-6 copy/images/

export const ImageMap = {
  // ── Brand ─────────────────────────────────────────────────────────────────
  logo: `${IMG}/Black-And-White-Minimalist-Typography-Personal-Logo.png`,

  // ── Hero ──────────────────────────────────────────────────────────────────
  // Imagem de fundo real extraída do HTML do original (mobile portrait 1080×2884)
  heroBg:       `${IMG}/Copia-de-Copia-de-Copia-de-Design-sem-nome-1080-x-2884-px-1-scaled.webp`,
  heroBgMobile: `${IMG}/Copia-de-Copia-de-Copia-de-Design-sem-nome-1080-x-2884-px-1-scaled.webp`,

  // ── 28 Módulos do Currículo — mapeamento exato do HTML ────────────────────
  // Chave = nome exato que aparece no <h3> do original
  moduleImages: {
    'Esmaltação em Gel':          `${IMG}/Design-sem-nome-6.webp`,
    'Apresentação dos Materiais': `${IMG}/2.png`,
    'Fibra de Vidro':             `${IMG}/3.png`,
    'Molde F1':                   `${IMG}/4.png`,
    'Alongamento Natural':        `${IMG}/9.png`,
    'Alongamento Redondo':        `${IMG}/6.png`,
    'Unha Almond':                `${IMG}/5.png`,
    'Unha Stiletto':              `${IMG}/7.png`,
    'Unha Bailarina':             `${IMG}/8.png`,
    'Francesinha Permanente':     `${IMG}/10.png`,
    'Francesinha Bilateral':      `${IMG}/11.png`,
    'Francesinha Reversa':        `${IMG}/12.png`,
    'Francesinha Reta':           `${IMG}/2-1.png`,
    'Esmaltação Art':             `${IMG}/13.png`,
    'Decoração Cascata':          `${IMG}/14.png`,
    'Decoração Trass':            `${IMG}/15.png`,
    'Polygel':                    `${IMG}/1-1.png`,
    'Unha Encapsulada':           `${IMG}/17.png`,
    'Spa Dos Pés':                `${IMG}/18.png`,
    'Banho de Gel':               `${IMG}/16.png`,
    'Cutilagem Descomplicada':    `${IMG}/20.png`,
    'Blindagem da Fibra':         `${IMG}/21.png`,
    'Manutenção Natural':         `${IMG}/22.png`,
    'Lixamento Boomerang':        `${IMG}/23.png`,
    'Manutenção com Reposição':   `${IMG}/24.png`,
    'Esfoliação Avançada':        `${IMG}/25.png`,
    'Tratamento para Calos':      `${IMG}/26.png`,
    'Dicas de Atendimento':       `${IMG}/27.png`,
  } as Record<string, string>,

  // ── Retrocompatibilidade: techniqueImages aponta para moduleImages ─────────
  techniqueImages: {} as Record<string, string>, // preenchido abaixo

  // ── What You Get mockups ──────────────────────────────────────────────────
  mockups: [
    `${IMG}/Design-sem-nome-5.webp`,
    `${IMG}/Design-sem-nome-6.webp`,
  ],

  // ── Bônus ─────────────────────────────────────────────────────────────────
  bonusImages: {
    'Curso Extensão de Cílios':                      `${IMG}/3-1.png`,
    'APOSTILAS PROFISSIONAIS + FICHAS DE ANOTAÇÃO':  `${IMG}/Seu-Nome-1.webp`,
    'Treinamento de Cutilagem':                      `${IMG}/Seu-Nome-1.png`,
    'Manicure e Pedicure':                           `${IMG}/2-1.png`,
    'Polygel Iniciante':                             `${IMG}/1-1.png`,
    'Manicure Masculina':                            `${IMG}/4-1.png`,
    'COMO FIDELIZAR Clientes':                       `${IMG}/Seu-Nome.webp`,
    'TEMPLATES DE WIND BANNER':                      `${IMG}/Wind-Banner.webp`,
    'TEMPLATE PROFISSIONAL PARA FACHADA DE LOJA':    `${IMG}/Wind-Banner-1.webp`,
  } as Record<string, string>,

  // ── Sorteio ───────────────────────────────────────────────────────────────
  raffle: `${IMG}/Design-sem-nome-3.webp`,

  // ── Área de Estudos ───────────────────────────────────────────────────────
  studyAreaPreview: `${IMG}/Seu-Nome-1.png`,

  // ── Depoimentos ───────────────────────────────────────────────────────────
  // Mantendo as imagens "ainda-em-duvida" que são as capturas reais de depoimentos
  testimonials: [
    `${BASE}/outros/ainda-em-duvida__1.png`,
    `${BASE}/outros/ainda-em-duvida__1-1.png`,
    `${BASE}/outros/ainda-em-duvida__3.png`,
    `${BASE}/outros/ainda-em-duvida__4.png`,
    `${BASE}/outros/ainda-em-duvida__5.png`,
    `${BASE}/outros/ainda-em-duvida__6.png`,
    `${BASE}/outros/ainda-em-duvida__7.png`,
    `${BASE}/outros/ainda-em-duvida__8.png`,
    `${BASE}/outros/ainda-em-duvida__9.png`,
  ],

  // ── UI / Pricing / Garantia ───────────────────────────────────────────────
  safeCheckout: `${IMG}/compra-segura-1.png`,
  paymentIcons:  `${IMG}/compra-segura-1.png`,
  guarantee:     `${IMG}/7-dias-1.png`,
}

// Preenche techniqueImages com os nomes usados na versão anterior para
// não quebrar qualquer referência direta que ainda exista
ImageMap.techniqueImages = ImageMap.moduleImages
