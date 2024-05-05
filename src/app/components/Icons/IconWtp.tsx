import { ElementType } from 'react'

export interface IconWtpProps {
  icon: ElementType
}

export function IconWtp({ icon: Icon }: IconWtpProps) {
  return <Icon className="h-6 w-6" weight="regular" />
}
