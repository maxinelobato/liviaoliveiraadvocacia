import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { BgGradientColor } from './components/SectionColor/BgGradient'
import { Hero } from './components/Hero'
import { Card } from './components/Cards'
import { Benefits } from './components/Benefits'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { SocialProve } from './components/SocialProve'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Livia Oliveira Advocacia',
  description:
    'Consultoria especializada em direito previdenciário. Solucionamos questões relacionadas a aposentadorias, pensões, auxílios e demais benefícios previdenciários. Conte com nossa experiência para garantir seus direitos previdenciários de forma ágil e eficiente.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="sr">
      <GoogleTagManager gtmId="GTM-KVN3F3HK" />
      <body className={`${montserrat.variable} scroll-smooth antialiased`}>
        <BgGradientColor>
          <Hero />
          <Card />
          <Benefits />
          <About />
          <Stats />
          <SocialProve />
          <Faq />
          {children}
        </BgGradientColor>
        <Footer />
      </body>
    </html>
  )
}
