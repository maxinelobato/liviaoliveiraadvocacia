import Image from 'next/image'
import LogoLiviaHero from '../../../../public/logo-livia.png'
import AboutLivia from '../../../../public/liviaimg.avif'
import BgImage from '../../../../public/bgImage.avif'

export function ImgBgImage() {
  return (
    <Image
      src={BgImage}
      alt="Bg Image"
      priority
      fill
      sizes="100vw"
      className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover"
    />
  )
}

export function ImgLogoLivia() {
  return (
    <>
      <Image
        alt="Imagem"
        src={LogoLiviaHero}
        width={180}
        height={100}
        loading="lazy"
        className="w-48 md:w-auto lg:w-52"
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
      />
    </>
  )
}

export function ImgLivia() {
  return (
    <>
      <Image
        alt="Imagem"
        src={AboutLivia}
        className="h-72 w-full rounded-xl object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
        loading="lazy"
        width={1080}
        height={1080}
        sizes='"(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"'
      />
    </>
  )
}
