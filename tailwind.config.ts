import type { Config } from 'tailwindcss'

import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        brandBlack: '#09090b',
        brandBlue900: '#041031',
        brandBlue500: '#102D53',
        brandBlue200: '#C8CBD2',
        brandWts: '#006400',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
