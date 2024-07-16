import daisyui from 'daisyui'
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
      backgroundImage: {
        'hero-image-desktop': "url('/bgImageDesktop.avif')",
        'hero-image-mobile': "url('/bgImageMobile.avif')",
      },
    },
  },
  plugins: [daisyui],
}
export default config
