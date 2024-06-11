import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  style: ['normal'],
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
      <body className={`${montserrat.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
