import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Magenta principal do original
          magenta: '#F30082',
          'magenta-dark': '#C5075E',
          // Fundos de seção
          dark: '#141414',
          darker: '#0d0c0c',
          purple: '#2A1030',
          // Mantidos por retrocompatibilidade
          gold: '#F30082',
          amber: '#C5075E',
          green: '#F30082',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
