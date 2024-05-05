import { ElementType } from 'react'

export interface IconStarSocialProveProps {
  icon: ElementType
}

export function IconStarSocialProve({ icon: Icon }: IconStarSocialProveProps) {
  return <Icon weight="fill" className="h-5 w-5" />
}
