import Image from 'next/image'
import LogoLiviaHero from '../../../../public/img/logo-livia.png'
import AboutLivia from '../../../../public/img/img3.webp'

export function ImgBgImage() {
  return (
    <picture>
      <source
        media="(max-width:768px)"
        srcSet="https://images.unsplash.com/photo-1634328724811-c20d433c3358?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        type="image/avif"
      />
      <source
        media="(max-width:1200px)"
        srcSet="https://images.unsplash.com/photo-1634328724811-c20d433c3358?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        type="image/avif"
      />
      <Image
        src="https://images.unsplash.com/photo-1634328724811-c20d433c3358?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="BgImage"
        width={500}
        height={500}
        sizes='"(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"'
        priority
        fill
        className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover"
      />
    </picture>
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
        width={500}
        height={500}
        priority
        className="h-72 w-full rounded-xl object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
      />
    </>
  )
}
