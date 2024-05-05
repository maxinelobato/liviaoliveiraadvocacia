import { ComponentProps } from 'react'

export interface IconCardProps {
  className: string
}

type IconCardPropertyProps = ComponentProps<'h1'>

export function IconCardProperty(props: IconCardPropertyProps) {
  return <h1 className="h-10 w-10" {...props} />
}
