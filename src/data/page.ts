// Conteúdo derivado de Nail_Designer_2026.json
import { ImageMap } from './imageMap'


export const PAGE = {
  title: 'Nail Designer 2026',
  checkoutUrl: import.meta.env.VITE_CHECKOUT_URL || 'https://pay.cakto.com.br/hfe7h83',

  hero: {
    badge: 'Perfeito para Iniciantes e Profissionais!',
    headline: 'De iniciante a profissional desejada — aprenda Cutilagem, Fibra de Vidro, Molde F1, Encapsuladas e muito mais do zero, com a formação que já está lotando agendas pelo Brasil.',
    subheadline:
      'Torne-se a Nail Designer mais procurada da sua cidade. Agenda cheia, clientes fiéis e de <strong>3 a 7 salários por mês</strong> — do seu jeito e no seu tempo.',
    ctaLabel: 'FAZER MINHA INSCRIÇÃO!',
    bgImage: ImageMap.heroBg,
    bgImageMobile: ImageMap.heroBgMobile,
    logoUrl: ImageMap.logo,
  },

  vsl: {
    pandaUrl:
      'https://player-vz-6c237b89-9e9.tv.pandavideo.com.br/embed/?v=21093722-ce47-4f0a-b1fc-55567fdfa510',
    localVideoPath: '/assets/videos/nail_designer_hero_720p.mp4',
    thumbnailUrl: 'https://patrickpdesign.com.br/wp-content/uploads/2023/05/Locutor-VSL-02_01.jpg',
  },

  whatYouGet: {
    heading: 'Veja <strong>tudo</strong> o que você vai <strong>receber:</strong>',
    mockupImages: ImageMap.mockups,
  },

  about: {
    heading: 'O caminho do <span style="background:linear-gradient(133deg,#F30082,#C5075E);-webkit-background-clip:text;-webkit-text-fill-color:transparent">ZERO aos 7 SALÁRIOS</span> por mês sendo uma Expert em Alongamentos.',
    body: 'Você não precisa ter talento. Não precisa ter experiência. Este curso foi feito para mulheres que querem uma profissão real, renda real e independência. Do zero ao profissional, com segurança e clareza.',
    body2: 'Nossas alunas não apenas aprendem; elas estão conquistando o mercado de unhas com habilidades verdadeiramente excepcionais. <strong>E a próxima estrela pode ser você.</strong>',
    ctaLabel: 'Quero ser uma Nail Designer de Alto Nível',
  },

  techniques: {
    heading: 'TUDO QUE VOCÊ VAI DOMINAR — E PODER COBRAR — DEPOIS DO CURSO',
    subheading: 'Todas as Técnicas Atualizadas.',
    // 28 módulos exatos do currículo original — mesma ordem do HTML
    items: [
      'Esmaltação em Gel',
      'Apresentação dos Materiais',
      'Fibra de Vidro',
      'Molde F1',
      'Alongamento Natural',
      'Alongamento Redondo',
      'Unha Almond',
      'Unha Stiletto',
      'Unha Bailarina',
      'Francesinha Permanente',
      'Francesinha Bilateral',
      'Francesinha Reversa',
      'Francesinha Reta',
      'Esmaltação Art',
      'Decoração Cascata',
      'Decoração Trass',
      'Polygel',
      'Unha Encapsulada',
      'Spa Dos Pés',
      'Banho de Gel',
      'Cutilagem Descomplicada',
      'Blindagem da Fibra',
      'Manutenção Natural',
      'Lixamento Boomerang',
      'Manutenção com Reposição',
      'Esfoliação Avançada',
      'Tratamento para Calos',
      'Dicas de Atendimento',
    ],
  },

  bonuses: [
    {
      title: 'Curso Extensão de Cílios (Valor: R$ 197)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['Curso Extensão de Cílios'],
      description:
        'Curso de extensão de cílios com 17 aulas, abrangendo técnicas fio a fio, volume híbrido, volume brasileiro e lash lifting. Com certificado ao concluir.',
    },
    {
      title: 'APOSTILAS PROFISSIONAIS + FICHAS DE ANOTAÇÃO (Valor: R$ 97)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['APOSTILAS PROFISSIONAIS + FICHAS DE ANOTAÇÃO'],
      description:
        'Cada módulo acompanha apostila de resumo profissional e ficha exclusiva para anotações. Organize o aprendizado e transforme conteúdo em prática real.',
    },
    {
      title: 'Treinamento de Cutilagem (Valor: R$ 97)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['Treinamento de Cutilagem'],
      description:
        'Faça uma Cutilagem perfeita com nosso treinamento profissional — passo a passo prático em uma laranja.',
    },
    {
      title: 'Manicure e Pedicure (Valor: R$ 197)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['Manicure e Pedicure'],
      description:
        'Especialização em manicure e pedicure para iniciantes e profissionais, incluindo spa dos pés e técnicas avançadas. Com certificado.',
    },
    {
      title: 'Polygel Iniciante (Valor: R$ 97)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['Polygel Iniciante'],
      description:
        'Aula completa de Polygel Avançado — aplicação, gel e formatos. Resumido e eficiente, com certificado.',
    },
    {
      title: 'Manicure Masculina (Valor: R$ 97)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['Manicure Masculina'],
      description:
        'Curso avançado de Manicure Masculina — nicho ainda pouco explorado, ideal para se destacar. Com certificado.',
    },
    {
      title: 'COMO FIDELIZAR Clientes (Valor: R$ 147)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['COMO FIDELIZAR Clientes'],
      description:
        'Aprenda a fidelizar clientes, cobrar corretamente, definir preços com lucro e escolher maquininhas com menores taxas.',
    },
    {
      title: 'TEMPLATES DE WIND BANNER (Valor: R$ 47)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['TEMPLATES DE WIND BANNER'],
      description:
        'Modelos prontos e chamativos para colocar na frente do seu espaço e transformar movimento em agendamentos.',
    },
    {
      title: 'TEMPLATE PROFISSIONAL PARA FACHADA DE LOJA (Valor: R$ 47)',
      tag: 'BÔNUS',
      image: ImageMap.bonusImages['TEMPLATE PROFISSIONAL PARA FACHADA DE LOJA'],
      description:
        'Arte profissional para fachada de ateliê ou estúdio de unhas — personalizável com seu nome e serviços.',
    },
  ],

  lessonPreview: {
    videos: [
      {
        url: 'https://player.vimeo.com/video/1169566548?badge=0&autopause=0&player_id=0&app_id=58479',
        label: 'Aula de Exemplo — Técnica 1',
      },
      {
        url: 'https://player.vimeo.com/video/1169566531?badge=0&autopause=0&player_id=0&app_id=58479',
        label: 'Aula de Exemplo — Técnica 2',
      },
    ],
  },

  raffle: {
    heading: 'Entre para o curso e concorra todo mês a um KIT MANICURE para começar do jeito certo',
    body: 'Todos os meses, uma aluna será sorteada para receber em casa um <strong>KIT MANICURE INICIAL</strong>, completo, profissional e pronto para trabalhar.',
    ctaLabel: 'Quero me inscrever e já entrar no sorteio do Kit!',
    image: ImageMap.raffle,
  },

  studyArea: {
    badge: 'ÁREA DE ESTUDOS',
    heading: 'Área de Estudos!',
    subheading: 'Veja onde você irá assistir às aulas do curso.',
    body: 'Você terá acesso a uma área de membros totalmente intuitiva e organizada, pensada para facilitar sua experiência do início ao fim. Lá dentro, todas as aulas ficam disponíveis de forma clara e prática, além de contar com suporte direto para tirar suas dúvidas, apostilas completas para acompanhar o conteúdo e a emissão do seu certificado ao concluir o curso. Tudo em um só lugar, simples de navegar e disponível sempre que você precisar.',
    securityNote: 'Ambiente seguro, organizado e com suporte especializado para te acompanhar em cada etapa.',
    thumbnail: ImageMap.studyAreaPreview,
  },

  certificates: {
    heading: 'Receba 25 Certificados de Conclusão e Seja uma Profissional Certificada!',
    body: 'Ao concluir nosso curso, você adquire novas habilidades e recebe <strong>25 Certificados de Conclusão</strong>, testemunhando seu comprometimento e dedicação.',
    urgency: '🚨 Essa condição especial com todos os certificados e bônus está disponível apenas nesta página.',
    ctaLabel: 'Quero ser uma Nail Designer de Alto Nível',
  },

  testimonials: {
    heading: 'Veja os Depoimentos de Mulheres Comuns e Reais que Concluíram o Curso:',
    placeholders: ImageMap.testimonials,
  },

  pricing: {
    warning: '⚠️ VOCÊ NÃO VERÁ ESSA OFERTA NOVAMENTE',
    heading: 'Aproveite, pois é somente para as <strong>10 primeiras</strong>',
    price: 'R$ 78,90',
    priceLabel: 'à vista',
    installments: '12x de R$ 9,18',
    ctaLabel: 'CLIQUE PARA RECEBER ACESSO!',
    safeImage: ImageMap.safeCheckout,
    paymentImage: ImageMap.paymentIcons,
  },

  guarantee: {
    days: 7,
    heading: 'Garantia de 7 dias.',
    body: 'Acesse o curso e, se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.',
    image: ImageMap.guarantee,
  },

  faq: [
    {
      q: 'E se por algum motivo eu não gostar do curso?',
      a: 'Confiamos tanto em nosso conteúdo que garantimos 7 dias de garantia incondicional! Basta solicitar e devolveremos 100% do valor.',
    },
    {
      q: 'Preciso ter os materiais antes de iniciar?',
      a: 'Não! O curso começa com aulas teóricas. Você aprende o que comprar e onde, e pode ir adquirindo os materiais conforme assiste.',
    },
    {
      q: 'O curso terá certificado?',
      a: 'Você recebe 25 certificados, um por módulo, com seu nome, prontos para mostrar às clientes.',
    },
    {
      q: 'Tenho que pagar todo mês?',
      a: 'Não. Seu pagamento é único e o curso é seu para sempre.',
    },
    {
      q: 'Terei suporte após a compra?',
      a: 'Sim! Em nossa área de membros disponibilizamos WhatsApp de suporte direto com a equipe.',
    },
    {
      q: 'O curso tem atualizações? Pago por elas?',
      a: 'O curso é atualizado frequentemente com novas aulas, técnicas e materiais — tudo incluído na compra única, para sempre.',
    },
    {
      q: 'Comprando, como faço para acessar?',
      a: 'Imediatamente após o pagamento você recebe sua senha de acesso por e-mail. Sem esperar.',
    },
    {
      q: 'Como solicito os certificados?',
      a: 'Concluindo 60% do curso você já pode solicitar. Nossa equipe personaliza e envia pelo WhatsApp rapidinho.',
    },
  ],

  footer: {
    copy: '© Copyright 2025. Todos os direitos reservados.',
    dev: 'Desenvolvido por: MONEVO',
    logoUrl: ImageMap.logo,
  },
}
