import { ComponentProps } from 'react'

export interface CarrosselComponentsProps {
  className: string
}

type CarrosselSectionProps = ComponentProps<'div'>

export function CarrosselSection(props: CarrosselSectionProps) {
  return (
    <section>
      <div
        className="mx-auto max-w-2xl items-center justify-center px-9 py-16 pt-2"
        {...props}
      />
    </section>
  )
}

type CarrosselSocialProveProps = ComponentProps<'blockquote'>

export function CarrosselSocialProve(props: CarrosselSocialProveProps) {
  return (
    <div className="mb-8">
      <blockquote
        className="rounded-lg bg-yellow-100 p-6 shadow-lg sm:p-8"
        {...props}
      />
    </div>
  )
}

type CarrosselColumnFillBalanceProps = ComponentProps<'div'>

export function CarrosselColumnFillBalance(
  props: CarrosselColumnFillBalanceProps,
) {
  return <div className="mt-8 columns-1 sm:gap-6 lg:gap-8" {...props} />
}

type CarrosselDivWhatTimeProps = ComponentProps<'div'>

export function CarrosselDivWhatTime(props: CarrosselDivWhatTimeProps) {
  return (
    <div
      className="flex items-center justify-center gap-0.5 text-yellow-500"
      {...props}
    />
  )
}

type CarrosselFlexItensProps = ComponentProps<'div'>

export function CarrosselFlexItens(props: CarrosselFlexItensProps) {
  return <div className="flex items-center gap-4" {...props} />
}

type CarrosselDivWhatTimeParagraphProps = ComponentProps<'p'>

export function CarrosselDivWhatTimeParagraph(
  props: CarrosselDivWhatTimeParagraphProps,
) {
  return (
    <p
      style={{ textShadow: '0px 0px 1px #000000' }}
      className="ml-1 text-sm font-medium text-brandBlue500"
      {...props}
    />
  )
}

type CarrosselDivProps = ComponentProps<'div'>

export function CarrosselDiv(props: CarrosselDivProps) {
  return <div {...props} />
}

type CarrosselClientProveParagraphProps = ComponentProps<'p'>

export function CarrosselClientProveParagraph(
  props: CarrosselClientProveParagraphProps,
) {
  return <p className="mt-4 font-medium text-brandBlue500" {...props} />
}

type CarrosselClientNameParagraphProps = ComponentProps<'p'>

export function CarrosselClientNameParagraph(
  props: CarrosselClientNameParagraphProps,
) {
  return <p className="mt-0.5 text-lg font-bold text-brandBlue500" {...props} />
}

type CarrosselBlockMapIdxProps = ComponentProps<'blockquote'>

export function CarrosselBlockMapIdx(props: CarrosselBlockMapIdxProps) {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote
        className="rounded-lg bg-yellow-100 p-6 shadow-lg sm:p-8"
        {...props}
      />
    </div>
  )
}
