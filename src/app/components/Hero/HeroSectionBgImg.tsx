import Image from 'next/image'

export function HeroSectionBgImg() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1634328724811-c20d433c3358?q=750&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="BgImage"
        sizes='"(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"'
        priority
        fill
        className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover"
      />
      <div className="absolute h-full w-full bg-gradient-to-r from-brandBlue900/90 from-40% to-brandBlue500/45 to-90% p-6 md:p-12 lg:px-16 lg:py-12"></div>
    </>
  )
}
