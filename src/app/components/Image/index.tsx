import Image from 'next/image'
import LogoLiviaHero from '../../../../public/img/logo-livia.png'
import AboutLivia from '../../../../public/img/img3.webp'

export function ImgBgImage() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1634328724811-c20d433c3358?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="BgImage"
      quality={100}
      sizes="100vw"
      priority
      fill
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
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
      />
    </>
  )
}
