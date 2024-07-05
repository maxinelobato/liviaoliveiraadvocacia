import { BgGradientColor } from './components/SectionColor/BgGradient'
import dynamic from 'next/dynamic'

const Hero = dynamic(
  () => import('./components/Hero/index').then((module) => module.Hero),
  {
    ssr: false,
  },
)
const Card = dynamic(
  () => import('./components/Cards/index').then((module) => module.Card),
  {
    ssr: false,
  },
)
const Benefits = dynamic(
  () => import('./components/Benefits/index').then((module) => module.Benefits),
  {
    ssr: false,
  },
)
const About = dynamic(
  () => import('./components/About/index').then((module) => module.About),
  {
    ssr: false,
  },
)
const SocialProve = dynamic(
  () =>
    import('./components/SocialProve/index').then(
      (module) => module.SocialProve,
    ),
  {
    ssr: false,
  },
)
const Stats = dynamic(
  () => import('./components/Stats/index').then((module) => module.Stats),
  {
    ssr: false,
  },
)
const Faq = dynamic(
  () => import('./components/Faq/index').then((module) => module.Faq),
  {
    ssr: false,
  },
)
const Footer = dynamic(
  () => import('./components/Footer/index').then((module) => module.Footer),
  {
    ssr: false,
  },
)

export default function Home() {
  return (
    <>
      <BgGradientColor>
        <Hero />
        <Card />
        <Benefits />
        <About />
        <Stats />
        <SocialProve />
        <Faq />
      </BgGradientColor>
      <Footer />
    </>
  )
}
