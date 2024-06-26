import { BgGradientColor } from './components/SectionColor/BgGradient'
import dynamic from 'next/dynamic'

const DynamicHero = dynamic(
  () => import('./components/Hero/index').then((module) => module.Hero),
  {
    ssr: false,
  },
)
const DynamicCard = dynamic(
  () => import('./components/Cards/index').then((module) => module.Card),
  {
    ssr: false,
  },
)
const DynamicBenefits = dynamic(
  () => import('./components/Benefits/index').then((module) => module.Benefits),
  {
    ssr: false,
  },
)
const DynamicAbout = dynamic(
  () => import('./components/About/index').then((module) => module.About),
  {
    ssr: false,
  },
)
const DynamicSocialProve = dynamic(
  () =>
    import('./components/SocialProve/index').then(
      (module) => module.SocialProve,
    ),
  {
    ssr: false,
  },
)
const DynamicFooter = dynamic(
  () => import('./components/Footer/index').then((module) => module.Footer),
  {
    ssr: false,
  },
)

export default function Home() {
  return (
    <>
      <BgGradientColor>
        <DynamicHero />
        <DynamicCard />
        <DynamicBenefits />
        <DynamicAbout />
        <DynamicSocialProve />
      </BgGradientColor>
      <DynamicFooter />
    </>
  )
}
