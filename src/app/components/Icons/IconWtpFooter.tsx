import { ElementType } from 'react'

export interface IconWtpProps {
  icon: ElementType
}

export function IconWtpFooter({ icon: Icon }: IconWtpProps) {
  return <Icon className="h-8 w-8" weight="fill" />
}
