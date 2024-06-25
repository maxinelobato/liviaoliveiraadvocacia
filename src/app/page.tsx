// import { About } from './components/About'
// import { Benefits } from './components/Benefits'
// import { Card } from './components/Cards'
// import { Footer } from './components/Footer'
// import { Hero } from './components/Hero'
// import { SocialProve } from './components/SocialProve'
import { BgGradientColor } from './components/SectionColor/BgGradient'
import dynamic from 'next/dynamic'

const DynamicHero = dynamic<{ ssr: false }>(() =>
  import('./components/Hero/index').then((module) => module.Hero),
)
const DynamicCard = dynamic<{ ssr: false }>(() =>
  import('./components/Cards/index').then((module) => module.Card),
)
const DynamicBenefits = dynamic<{ ssr: false }>(() =>
  import('./components/Benefits/index').then((module) => module.Benefits),
)
const DynamicAbout = dynamic<{ ssr: false }>(() =>
  import('./components/About/index').then((module) => module.About),
)
const DynamicSocialProve = dynamic<{ ssr: false }>(() =>
  import('./components/SocialProve/index').then((module) => module.SocialProve),
)
const DynamicFooter = dynamic<{ ssr: false }>(
  () => import('./components/Footer/index').then((module) => module.Footer),
  {
    loading: () => <p>Loading...</p>,
  },
)

export default function Home() {
  return (
    <>
      <BgGradientColor>
        <DynamicHero ssr={false} />
        <DynamicCard ssr={false} />
        <DynamicBenefits ssr={false} />
        <DynamicAbout ssr={false} />
        <DynamicSocialProve ssr={false} />
      </BgGradientColor>
      <DynamicFooter ssr={false} />
    </>
  )
}
