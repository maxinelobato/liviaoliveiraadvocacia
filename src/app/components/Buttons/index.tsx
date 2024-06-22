'use client'

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { ButtonFloat } from './ButtonCta'
import { IconWtpFloat } from '../Icons/IconWtpFloat'
import { sendGTMEvent } from '@next/third-parties/google'

export function ButtonFloatWttp() {
  return (
    <>
      <ButtonFloat
        onClick={() =>
          sendGTMEvent({ event: 'buttonWhatsapp', value: 'whatsapp' })
        }
        href="https://api.whatsapp.com/send?phone=5531992258880&text=Ol%C3%A1,%20tudo%20bem?%20Preciso%20falar%20com%20um%20Advogado%20Especialista%20em%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar?"
      >
        <IconWtpFloat icon={WhatsappLogo} />
      </ButtonFloat>
    </>
  )
}
