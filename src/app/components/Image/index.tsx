import Image from 'next/image'
import LogoLiviaHero from '../../../../public/logo-livia.png'
import AboutLivia from '../../../../public/img3.webp'
import BgImage from '../../../../public/bgImage.avif'

export function ImgBgImage() {
  return (
    <Image
      src={BgImage}
      quality={100}
      alt="Bg Image"
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
        rel="preload"
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
        rel="preload"
        width={500}
        height={500}
      />
    </>
  )
}
