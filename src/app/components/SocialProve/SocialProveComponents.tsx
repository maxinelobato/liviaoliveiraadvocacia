import { ComponentProps } from 'react'

export interface SocialProveComponentsProps {
  className: string
}

type SocialProveSectionProps = ComponentProps<'div'>

export function SocialProveSection(props: SocialProveSectionProps) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-9 py-16 pt-2" {...props} />
    </section>
  )
}

type SocialProveSpaceProps = ComponentProps<'div'>

export function SocialProveSpace(props: SocialProveSpaceProps) {
  return <div className="px-2 py-4" {...props} />
}

type SocialProveH1Props = ComponentProps<'h1'>

export function SocialProveH1(props: SocialProveH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 1px #000000' }}
      className="mb-6 max-w-5xl p-2 pt-8 text-center font-sans text-4xl font-semibold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type SocialProveSpanProps = ComponentProps<'span'>

export function SocialProveSpan(props: SocialProveSpanProps) {
  return <span className="font-black text-white sm:block" {...props} />
}

type SocialProveParagraphProps = ComponentProps<'p'>

export function SocialProveParagraph(props: SocialProveParagraphProps) {
  return (
    <p
      style={{ textShadow: '0px 0px 1px #000000' }}
      className="text-center text-sm font-medium text-white sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type SocialProveColumnFillBalanceProps = ComponentProps<'div'>

export function SocialProveColumnFillBalance(
  props: SocialProveColumnFillBalanceProps,
) {
  return (
    <div
      className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-8"
      {...props}
    />
  )
}

type SocialProveBlockMapIdxProps = ComponentProps<'blockquote'>

export function SocialProveBlockMapIdx(props: SocialProveBlockMapIdxProps) {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote
        className="rounded-lg border border-white/20 bg-white/20 p-6 shadow-lg sm:p-8"
        {...props}
      />
    </div>
  )
}

type SocialProveFlexItensProps = ComponentProps<'div'>

export function SocialProveFlexItens(props: SocialProveFlexItensProps) {
  return <div className="flex items-center gap-4" {...props} />
}

type SocialProveDivProps = ComponentProps<'div'>

export function SocialProveDiv(props: SocialProveDivProps) {
  return <div {...props} />
}

type SocialProveDivWhatTimeProps = ComponentProps<'div'>

export function SocialProveDivWhatTime(props: SocialProveDivWhatTimeProps) {
  return (
    <div
      className="flex items-center justify-center gap-0.5 text-yellow-500"
      {...props}
    />
  )
}

type SocialProveDivWhatTimeParagraphProps = ComponentProps<'p'>

export function SocialProveDivWhatTimeParagraph(
  props: SocialProveDivWhatTimeParagraphProps,
) {
  return (
    <p
      style={{ textShadow: '0px 0px 1px #000000' }}
      className="ml-1 text-sm font-medium text-white"
      {...props}
    />
  )
}

type SocialProveClientNameParagraphProps = ComponentProps<'p'>

export function SocialProveClientNameParagraph(
  props: SocialProveClientNameParagraphProps,
) {
  return <p className="mt-0.5 text-lg font-bold text-white" {...props} />
}

type SocialProveClientProveParagraphProps = ComponentProps<'p'>

export function SocialProveClientProveParagraph(
  props: SocialProveClientProveParagraphProps,
) {
  return <p className="mt-4 font-medium text-white" {...props} />
}
