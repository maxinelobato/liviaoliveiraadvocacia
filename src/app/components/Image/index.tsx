import Image from 'next/image'
import LogoLiviaHero from '../../../../public/logo-livia.png'
import AboutLivia from '../../../../public/img3.webp'

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
        width={372}
        height={288}
        loading="lazy"
        rel="preload"
        className="h-72 w-full rounded-xl object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
      />
    </>
  )
}
