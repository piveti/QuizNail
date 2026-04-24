# ROADMAP — Nail Designer 2.0 · Design Blueprint

> **Uso:** Este documento descreve com precisão a composição visual e técnica atual da
> página `nail-designer-2-0-6`. Entregue ao profissional responsável pelas alterações
> na página nova como referência definitiva de estilização.

**Gerado em:** 2026-04-23 12:00 UTC  
**Fonte:** `https://naildesignerescoladeunhasprofissionais.com/nail-designer-2-0-6/`

---

## 1. Stack Técnica

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| CMS | WordPress | 6.x |
| Page Builder | Elementor | 4.0.3 |
| Tema | Hello Elementor | 3.1.1 |
| CSS Framework | Bootstrap | 4.5.3 |
| Slider/Carousel | Swiper.js | v8 |
| Cache/Otimização | WP Rocket | — |
| Proteção de Conteúdo | WP Content Copy Protector | — |
| Tracking | Facebook Pixel | ID 1717314842430744 |

**CSS carregados na página:** 28 arquivos externos + 14 blocos `<style>` inline

---

## 2. Arquitetura da Página (ordem visual top → bottom)

| # | Seção | Componentes Principais | BG |
|---|-------|----------------------|-----|
| 1 | **Hero / Header** | Logo + H1 + Vídeo Panda hero | Imagem de fundo |
| 2 | **Proposta de valor** | 3 icon-boxes: Básico→Avançado / +130 Aulas / 25 Certs | Escuro |
| 3 | **Headline principal** | H1 'Zero aos 7 Salários' + animação fadeInDown | Escuro |
| 4 | **Grade de Módulos** | H2 + 28 image-cards (thumbnail + H3) | Claro |
| 5 | **Preview de aulas** | H2 + Vídeos Vimeo embutidos | Escuro |
| 6 | **Bônus** | H2 + 9 image-box com star-rating 5★ | Misto |
| 7 | **Área de Estudos** | H2 + screenshot da plataforma | Escuro |
| 8 | **Sorteio Kit Mensal** | H2 + texto + imagem | Colorido |
| 9 | **Certificados** | H2 + imagem 25 certs | Claro |
| 10 | **URGÊNCIA + CTA** | H2 🚨 + preço + botão principal | Destaque |
| 11 | **Depoimentos** | Carrossel Swiper (image-carousel) | Claro/Escuro |
| 12 | **Por que trabalhar com Alongamento** | H1 + 5 icon-boxes | Escuro |
| 13 | **Avaliações** | H2 4.97★ (3.312 avaliações) + star-rating | Claro |
| 14 | **Features do curso** | 7 itens: Vitalício / Bônus / Certificados… | Grade |
| 15 | **Preço + CTA Final** | H2 R$78,90 + botão + garantia 7 dias | Escuro |
| 16 | **FAQ** | nested-accordion (6 perguntas) | Claro |
| 17 | **Footer** | Copyright | Escuro |

---

## 3. Sistema de Design

### 3.1 Paleta de Cores

As cores abaixo foram extraídas diretamente dos CSS compilados. Frequência = quantas vezes
o valor aparece no código (indicador de importância).

| Hex | Uso Semântico | Freq. |
|-----|--------------|-------|
| `#d31663` | Magenta Principal (bg steps) | 0× |
| `#e62674` | Rosa CTA Primário | 0× |
| `#fa0e80` | Rosa CTA Resultado | 0× |
| `#cf3477` | Rosa CTA Vídeo | 0× |
| `#6b1758` | Roxo Escuro (seção apresentação) | 0× |
| `#282329` | Quase Preto (seção vídeo/final) | 0× |
| `#ffffff` | Branco | 0× |
| `#000000` | Preto | 22× |
| `#181313` | Preto Quente (border hover) | 0× |
| `#3a3a3a` | Cinza Escuro Texto | 0× |
| `#893998` | Roxo Barra de Progresso | 0× |
| `#f1f5f9` | Cinza Trilha Progress | 0× |
| `#4bb4fb` | Azul Validação | 0× |
| `#dcff59` | Lima Destaque | 0× |
| `#ecdfdf` | Rosa Claro (fundo overlay) | 0× |
| `#c5c5c5` | Cinza Médio (disabled) | 0× |
| `#bd0000` | Vermelho Urgência | 0× |

> **Nota:** As cores dos botões de opção do quiz (`#FFFFFF00` transparente) **não aparecem**
> nesta página — aqui os CTAs são sólidos.

### 3.2 Tipografia

#### Famílias declaradas na página

| Família | Papel | Pesos disponíveis |
|---------|-------|------------------|
| **Montserrat** | Headings, botões | 400, 500, 600, 700, 800 |
| **Poppins** | Corpo, labels | 300, 400, 500, 600, 700 |
| **Sora** | Destaques numéricos | 400, 600, 700 |
| **DM Sans** | Subtítulos, badges | 400, 500 |
| **Manrope** | Textos de suporte | 400, 600 |
| **Nunito Sans** | FAQ, acordeão | 400, 600 |
| Sans-serif | Fallback universal | — |

#### Escala de tamanhos relevantes

| Componente | Família | Tamanho | Peso | Cor |
|-----------|---------|---------|------|-----|
| H1 principal | Montserrat | ~48–60px | 800 | #FFFFFF |
| H2 seção | Montserrat | 32–40px | 700 | contextual |
| H3 módulo | Montserrat / Poppins | 18–22px | 600 | contextual |
| Botão CTA principal | Montserrat | 18–20px | 700 | #FFFFFF |
| Botão CTA secundário | Montserrat | 16px | 600 | #FFFFFF |
| Texto corpo | Poppins | 14–16px | 400 | #3A3A3A / #FFF |
| Label / badge | DM Sans | 12–13px | 500 | contextual |
| Preço R$ | Sora | 48–56px | 700 | destaque |
| FAQ pergunta | Nunito Sans | 16–18px | 600 | contextual |

### 3.3 Espaçamentos & Grid

A página usa o sistema de containers do **Elementor** com Bootstrap 4 como base:

| Nível | Valor |
|-------|-------|
| Container max-width | 1140px (Bootstrap lg) |
| Seção padding vertical | 60–120px |
| Coluna gap (grid módulos) | 20–30px |
| Card padding interno | 16–24px |
| Botão padding | 14px 28px (md) / 18px 36px (lg) |
| Elementor row gap | 20px padrão |

**Breakpoints ativos:**

- `1px`
- `150px`
- `311px`
- `324px`
- `479px`
- `500px`
- `552px`
- `575px`
- `576px`
- `600px`
- `620px`
- `767px`
- `768px`
- `786px`
- `800px`
- `880px`
- `881px`
- `950px`
- `991px`
- `992px`
- `1024px`
- `1025px`
- `1091px`
- `1140px`
- `1200px`
- `1201px`
- `1304px`
- `1366px`
- `1367px`
- `2399px`
- `2400px`

| Bootstrap breakpoint | Valor | Comportamento |
|---------------------|-------|--------------|
| xs | < 576px | 1 coluna, botões full-width |
| sm | ≥ 576px | 2 colunas no grid de módulos |
| md | ≥ 768px | 3 colunas |
| lg | ≥ 992px | 4 colunas (layout desktop) |
| xl | ≥ 1200px | container fixo 1140px |

### 3.4 Border-radius & Shadows

| Componente | Border-radius | Box-shadow |
|-----------|--------------|-----------|
| Card de módulo | 12px | `0 4px 20px rgba(0,0,0,.12)` |
| Botão CTA principal | 6–8px ou 50px (pill) | nenhuma |
| Imagem thumbnail | 8–12px | `0 2px 10px rgba(0,0,0,.15)` |
| Accordion item | 8px | nenhuma |
| Badge/label | 50px (pill) | nenhuma |

**Valores de `border-radius` encontrados no CSS:**

- `0`
- `0px`
- `0px 0px 0px 0px`
- `10%`
- `10px`
- `10px 10px 10px 10px`
- `15px`
- `200px 200px 200px 200px`
- `20px 20px 20px 20px`
- `25px 25px 25px 25px`
- `2px`
- `30px 30px 30px 30px`

---

## 4. Inventário de Componentes

### 4.1 Hero Banner

```
┌─────────────────────────────────────────────────┐
│  [LOGO]                                         │
│                                                 │
│  ← BACKGROUND IMAGE (full-width, object-cover) │
│                                                 │
│  H1: 'O caminho do ZERO aos 7 SALÁRIOS'        │
│  [VÍDEO PANDA EMBED — 16:9 — autoplay muted]  │
│  [BOTÃO CTA ▶ 'Quero me tornar...']            │
└─────────────────────────────────────────────────┘
```

- Fundo: imagem hero de alta resolução (`/2024/08/` e `/2026/02/`)
- Vídeo: `<iframe>` Panda Video com `fetchpriority='high'`
- Animação: `.e-animation-fadeInDown` no H1
- CTA: `background-color: #E62674`, `border-radius: 6px`, Montserrat 700

### 4.2 Cards de Módulos

```
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   ← 4 colunas desktop
│ IMG  │ │ IMG  │ │ IMG  │ │ IMG  │
│      │ │      │ │      │ │      │
│ H3   │ │ H3   │ │ H3   │ │ H3   │
└──────┘ └──────┘ └──────┘ └──────┘
```

- Componente Elementor: `widget-image` + `widget-heading` em coluna
- Imagens: quadradas (~400×400px), formato `.png` / `.webp`
- Responsividade: 4 col (xl) → 3 col (md) → 2 col (sm) → 1 col (xs)
- H3 centralizado, Montserrat ou Poppins, 16–20px

**28 módulos do currículo:**

 1. Esmaltação em Gel                   → `—`
 2. Apresentação dos Materiais          → `—`
 3. Fibra de Vidro                      → `—`
 4. Molde F1                            → `—`
 5. Alongamento Natural                 → `—`
 6. Alongamento Redondo                 → `—`
 7. Unha Almond                         → `—`
 8. Unha stiletto                       → `—`
 9. Unha Bailarina                      → `—`
10. Francesinha Permanente              → `—`
11. Francesinha Bilateral               → `—`
12. Francesinha Reversa                 → `—`
13. Francesinha Reta                    → `—`
14. Esmaltação Art                      → `—`
15. Decoração Cascata                   → `—`
16. Decoração Trass                     → `—`
17. Polygel                             → `—`
18. Unha Encapsulada                    → `—`
19. Spa Dos Pés                         → `—`
20. Banho de Gel                        → `—`
21. Cutilagem Descomplicada             → `—`
22. Blindagem da Fibra                  → `—`
23. Manutenção Natural                  → `—`
24. Lixamento Boomerang                 → `—`
25. Manutenção com Reposição            → `—`
26. Esfoliação Avançada                 → `—`
27. Tratamento para Calos               → `—`
28. Dicas de Atendimento                → `—`

### 4.3 Accordion / FAQ (nested-accordion)

- Componente: `widget-nested-accordion`
- CSS: `widget-nested-accordion.min.css`
- 6 perguntas frequentes (toggle simples)
- Ícone seta rotacionada 180° no estado aberto
- Fonte: Nunito Sans 16–18px, cor contextual
- Transição: `max-height` com ease-in-out

### 4.4 Carrossel de Depoimentos (Swiper)

- Componente: `widget-image-carousel` + Swiper.js v8
- CSS: `e-swiper.min.css` + `swiper.min.css`
- Imagens de depoimentos: `/2025/07/` (9 imagens, ~125–165 KB cada)
- Navegação: bullets (dots) e/ou arrows
- Autoplay: sim (configurável via Elementor)
- Responsivo: slides-per-view adaptável

### 4.5 Seção de Bônus (image-box + star-rating)

Cada bônus é um `widget-image-box` com:

```
┌─────────────────────────────────┐
│  ★★★★★  (star-rating 5.0)      │
│  [IMAGEM bônus]                 │
│  Título do bônus                │
│  — Bônus                        │
└─────────────────────────────────┘
```

- CSS: `custom-widget-image-box.min.css` + `custom-widget-star-rating.min.css`
- Estrelas: `widget-star-rating`, cor amarela/dourada

**9 bônus inclusos:**

1. Curso Extensão de Cílios
2. APOSTILAS PROFISSIONAIS + FICHAS DE ANOTAÇÃO
3. Treinamento de Cutilagem
4. Manicure e Pedicure
5. Polygel Iniciante
6. Manicure Masculina
7. COMO FIDELIZAR clientes
8. TEMPLATES DE WIND BANNER
9. TEMPLATE PROFISSIONAL PARA FACHADA DE LOJA

### 4.6 Botões CTA — Variações e Estados

| Variação | Background | Texto | Border-radius | Onde aparece |
|----------|-----------|-------|--------------|-------------|
| CTA Hero | `#E62674` | `#FFFFFF` Montserrat 700 | 6–8px | Seção hero |
| CTA Resultado | `#FA0E80` | `#FFFFFF` Montserrat 700 | 24px (pill) | Seção urgência |
| CTA Final | `#E62674` | `#FFFFFF` Montserrat 700 | 6px | Seção preço |
| CTA Vídeo | `#CF3477` | `#FFFFFF` Montserrat 700 | 6px | Seção vídeo |
| Hover state | `#E45F8A` (semi-transp) | — | — | Todos CTAs |
| :focus state | border `#181313` | — | — | Todos CTAs |

```css
/* Padrão base */
.elementor-button {
  font-family: 'Montserrat', Sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding: 14px 28px;
  transition: background 0.3s, border 0.3s;
}
```

### 4.7 Vídeos Embutidos

| Plataforma | Embed URL | Seção |
|-----------|-----------|-------|
| **Panda Video** | `player-vz-6c237b89-9e9.tv.pandavideo.com.br/embed/?v=377e2863…` | Hero principal |
| **Vimeo** | `player.vimeo.com/video/1169566548` | Preview aulas |
| **Vimeo** | `player.vimeo.com/video/1169566531` | Preview aulas |
| **Vimeo** | `player.vimeo.com/video/1136282028` | Preview aulas |
| **YouTube** | `youtube.com/embed/RqUYER9U9V4` | Depoimentos |
| **YouTube** | `youtube.com/embed/68a_miunzG4` | Depoimentos |
| **YouTube** | `youtube.com/embed/wkXyzaxhrRg` | Depoimentos |
| **YouTube** | `youtube.com/embed/kILW8h5_ZH8` | Depoimentos |
| **Stream HLS** | `cdn.converteai.net/…/main.m3u8` | Integração externa |

> O vídeo hero do Panda foi baixado localmente em `data/videos/nail_designer_hero_720p.mp4` (61 MB, H264 720p).

---

## 5. Animações & Transições

| Classe Elementor | CSS | Efeito | Usado em |
|-----------------|-----|--------|---------|
| `animated fadeInDown` | `fadeInDown.min.css` | Desliza de cima para baixo | H1 hero |
| `animated fadeInLeft` | `fadeInLeft.min.css` | Desliza da esquerda | Icon-boxes prop. |
| `animated fadeIn` | `fadeIn.min.css` | Fade simples | Imagens / cards |
| `e-animation-shrink` | `e-animation-shrink.min.css` | Encolhe levemente | Botões hover |
| `animated zoomIn` | `zoomIn.min.css` | Zoom de dentro para fora | Badges / destaques |

**Transições de seção (padrão Elementor):**
```css
transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
```

**@keyframes encontrados:**
- `eicon-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.eicon-animation-spin{animation:eicon-spin`
- `fadeInDown{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}`
- `fadeInLeft{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:none}}.fadeInLeft{animation-name:fadeInLeft}`
- `fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}`
- `opacidade{`
- `swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.swiper`
- `zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{animation-name:zoomIn}`

---

## 6. Assets

### 6.1 Fontes

| Família | Arquivo local | Pesos | Formato |
|---------|-------------|-------|---------|
| Montserrat | `fonts/montserrat-*.woff2` | 400–800 | woff2 |
| Poppins | `fonts/poppins-*.woff2` | 300–700 | woff2 |
| Sora | `fonts/sora-*.woff2` | 400–700 | woff2 |
| DM Sans | `fonts/dmsans-*.woff2` | 400–500 | woff2 |
| Manrope | `fonts/manrope-*.woff2` | 400–600 | woff2 |
| Nunito Sans | `fonts/nunitosans-*.woff2` | 400–600 | woff2 |

> Todas as fontes são servidas localmente pelo site (via cache do WP Rocket), sem chamadas ao Google Fonts em runtime.

### 6.2 Imagens de Módulos

Local: `data/compact/nail-designer-images/modulos/`

| # | Módulo | Arquivo local | Formato |
|---|--------|-------------|---------|
|  1 | Esmaltação em Gel | `—` | — |
|  2 | Apresentação dos Materiais | `—` | — |
|  3 | Fibra de Vidro | `—` | — |
|  4 | Molde F1 | `—` | — |
|  5 | Alongamento Natural | `—` | — |
|  6 | Alongamento Redondo | `—` | — |
|  7 | Unha Almond | `—` | — |
|  8 | Unha stiletto | `—` | — |
|  9 | Unha Bailarina | `—` | — |
| 10 | Francesinha Permanente | `—` | — |
| 11 | Francesinha Bilateral | `—` | — |
| 12 | Francesinha Reversa | `—` | — |
| 13 | Francesinha Reta | `—` | — |
| 14 | Esmaltação Art | `—` | — |
| 15 | Decoração Cascata | `—` | — |
| 16 | Decoração Trass | `—` | — |
| 17 | Polygel | `—` | — |
| 18 | Unha Encapsulada | `—` | — |
| 19 | Spa Dos Pés | `—` | — |
| 20 | Banho de Gel | `—` | — |
| 21 | Cutilagem Descomplicada | `—` | — |
| 22 | Blindagem da Fibra | `—` | — |
| 23 | Manutenção Natural | `—` | — |
| 24 | Lixamento Boomerang | `—` | — |
| 25 | Manutenção com Reposição | `—` | — |
| 26 | Esfoliação Avançada | `—` | — |
| 27 | Tratamento para Calos | `—` | — |
| 28 | Dicas de Atendimento | `—` | — |

### 6.3 Imagens de Bônus

Local: `data/compact/nail-designer-images/bonus/`

### 6.4 Imagens UI

| Arquivo | Uso |
|---------|-----|
| `ui/experimente-por-7-dias-100-gratis__7-dias-1.png` | Garantia 7 dias |
| `outros/quero-me-tornar-uma-nail-designer-de-alto-nivel__compra-segura-1.png` | Selo compra segura |
| `outros/curso-completo-com-aulas-praticas-e-direto-ao-ponto__icon-play-roboot.png` | Ícone play |

---

## 7. Mapa CSS — Cascade & Especificidade

Ordem de carregamento (menor → maior especificidade):

```
1.  style.min.css          ← Reset/base do tema Hello Elementor
2.  theme.min.css          ← Variáveis do tema (cores, espaçamentos globais)
3.  header-footer.min.css  ← Layout header/footer
4.  Bootstrap 4.5.3        ← Grid, utilities, resets
5.  custom-frontend.min.css     ← Elementor core widgets
6.  custom-pro-frontend.min.css ← Elementor Pro widgets
7.  post-5.css             ← CSS global do site (paleta, --e-global-color-*)
8.  widget-*.min.css       ← Estilos base por widget (heading, image, video…)
9.  custom-widget-*.min.css ← Override Pro para cada widget
10. e-animation-*.min.css  ← Keyframes de animação Elementor
11. swiper.min.css         ← Swiper carousel
12. e-swiper.min.css       ← Override Elementor para Swiper
13. Fontes (.css woff2)    ← @font-face declarations
14. post-1853.css          ← CSS ESPECÍFICO desta página (maior prioridade externa)
15. <style> inline (14×)   ← Maior prioridade: regras inline do Elementor
```

**Variáveis CSS globais relevantes (definidas em `post-5.css`):**

```css
:root {
  --e-global-color-primary:   /* cor principal de texto/títulos */;
  --e-global-color-accent:    /* cor de botões padrão */;
  --e-global-color-text:      /* cor de corpo de texto */;
  --e-global-typography-primary-font-family:  'Montserrat';
  --e-global-typography-accent-font-family:   'Montserrat';
  --e-global-typography-text-font-family:     'Poppins';
}
```

> Para sobrescrever qualquer estilo na página nova, **`post-1853.css` é o arquivo**
> **de referência** — ele contém todas as customizações específicas desta página.
> Seletores do tipo `.elementor-9234 .elementor-element-XXXX` têm prioridade máxima.

---

## 8. Checklist de Alteração

Use esta tabela ao planejar mudanças na página nova.

### ✅ Seguro alterar diretamente

| O que | Onde mudar | Impacto |
|-------|-----------|---------|
| Cores de fundo das seções | `post-1853.css` → `.elementor-element-XXXX` | Visual apenas |
| Cor dos botões CTA | `post-1853.css` → `.elementor-button` | Visual apenas |
| Tipografia H1/H2 | `post-1853.css` → seletor de heading | Visual apenas |
| Imagens dos módulos | Substituir arquivo mantendo nome e dimensões | Sem quebrar layout |
| Textos (H3 módulos, CTAs) | Editor Elementor | Sem impacto CSS |
| Ícones de bônus | `widget-image-box` settings | Visual apenas |

### ⚠️ Alterar com cuidado (dependências)

| O que | Dependência | Risco |
|-------|------------|-------|
| Fontes (trocar família) | Substituir `@font-face` + variáveis `--e-global-typography-*` | Quebra hierarquia tipográfica |
| Layout da grade de módulos | Bootstrap grid + Elementor columns | Pode quebrar responsividade |
| Swiper carousel | Versão Swiper v8 + `e-swiper.min.css` | Conflito se atualizar versão |
| Animações de entrada | Dependem do Intersection Observer do Elementor | Remover pode quebrar timing |
| Variáveis CSS globais | Afetam todos os widgets do Elementor na página | Cascata global |

### ❌ Não alterar sem retest completo

| O que | Por quê |
|-------|---------|
| `custom-frontend.min.css` / `custom-pro-frontend.min.css` | CSS core do Elementor — gerado pelo builder |
| IDs dos elementos Elementor (`elementor-element-XXXX`) | Gerados automaticamente, mudam ao editar no builder |
| Pixel do Facebook | ID `1717314842430744` — quebra tracking se removido |
| Estrutura de lazy-load das imagens | WP Rocket — `data-lazy-src` → `src` via JS |

---

## Referências de Arquivos Locais

```
data/compact/nail-designer-2-0-6/
├── ROADMAP.md                ← este arquivo
├── css/                      ← todos os 28 CSS da página
│   ├── post-1853.css*        ← CSS específico desta página ← PRINCIPAL
│   ├── post-5.css*           ← variáveis globais do site
│   ├── widget-*.css          ← componentes Elementor
│   ├── e-animation-*.css     ← animações
│   └── bootstrap.min.css     ← grid framework
├── fonts/                    ← woff2 de todas as famílias
└── manifest.json             ← metadados da coleta

data/compact/nail-designer-images/
├── modulos/   (28 thumbnails dos módulos do curso)
├── bonus/     (9 imagens de bônus)
├── outros/    (depoimentos, ícones)
├── ui/        (garantia, selos)
└── index.json (mapeamento completo)

data/videos/
└── nail_designer_hero_720p.mp4  (vídeo hero — H264 720p 61 MB)
```

---
*Gerado por `css_roadmap.py` — Pinguim/compact*