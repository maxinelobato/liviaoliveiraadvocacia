import { ElementType } from 'react'

export interface IconCardWtpProps {
  icon: ElementType
}

export function IconCardWtp({ icon: Icon }: IconCardWtpProps) {
  return <Icon className="h-6 w-6" weight="regular" />
}
