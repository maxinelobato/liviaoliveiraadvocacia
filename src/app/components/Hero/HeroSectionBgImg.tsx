import Image from 'next/image'
import bgImage from '../../../../public/bgImage.avif'

export function HeroSectionBgImg() {
  return (
    <>
      <Image
        src={bgImage}
        alt="BgImage"
        sizes="100vw"
        priority
        fill
        className="h-80 w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover"
      />
      <div className="absolute h-full w-full bg-gradient-to-r from-brandBlue900/90 from-40% to-brandBlue500/45 to-90% p-6 md:p-12 lg:px-16 lg:py-12"></div>
    </>
  )
}
