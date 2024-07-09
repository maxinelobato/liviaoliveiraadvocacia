import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/app/**/*.tsx', './components/**/*.tsx'],
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
        sans: 'var(--font-montserrat)',
      },
      backgroundImage: {
        'hero-img': "url('/bgImage.avif')",
      },
    },
  },
  plugins: [],
}
export default config
