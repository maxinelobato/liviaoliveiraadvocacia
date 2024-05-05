import { ElementType } from 'react'

export interface IconWtpFloatProps {
  icon: ElementType
}

export function IconWtpFloat({ icon: Icon }: IconWtpFloatProps) {
  return <Icon className="h-8 w-8" weight="regular" />
}
