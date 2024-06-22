'use client'

import { HeroDivide } from '../Hero/HeroComponents'
import {
  FooterAllRights,
  FooterAllRightsParagraph,
  FooterAllRightsParagraphEnd,
  FooterBg,
  FooterButtonAnchor,
  FooterButtonFlex,
  FooterButtonProperty,
  FooterButtonText,
  FooterFlex,
  FooterFlexJustifyCenter,
  FooterH1,
  FooterImgProperty,
  FooterLabelContact,
  FooterLi,
  FooterParagraphLivia,
  FooterParagraphLiviaOab,
  FooterProperty,
  FooterSpace,
  FooterUl,
} from './FooterComponents'
import { IconWtpFooter } from '../Icons/IconWtpFooter'
import { At, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { ImgLogoLivia } from '../Image'
import { sendGTMEvent } from '@next/third-parties/google'

export function Footer() {
  return (
    <>
      <FooterBg>
        <FooterProperty>
          <FooterH1>
            &ldquo;Meu trabalho é uma das minhas grandes paixões,{' '}
            <strong>
              meu compromisso é atuar com valor a ética, comprometimento,
              pessoalidade e excelência,
            </strong>{' '}
            compartilhando tudo que aprendi ao longo do meu caminho.&rdquo;
          </FooterH1>
          <HeroDivide />
          <FooterImgProperty>
            <ImgLogoLivia />
          </FooterImgProperty>
          <FooterParagraphLivia>Lívia Oliveira</FooterParagraphLivia>
          <FooterParagraphLiviaOab>OAB/MG 102.238</FooterParagraphLiviaOab>
        </FooterProperty>
        <FooterFlexJustifyCenter>
          <FooterSpace>
            <FooterUl>
              <FooterLi>
                <FooterFlex>
                  <FooterButtonProperty>
                    <FooterButtonAnchor
                      onClick={() =>
                        sendGTMEvent({
                          event: 'buttonClicked',
                          value: 'whatsapp',
                        })
                      }
                      href="https://api.whatsapp.com/send?phone=5531992258880&text=Ol%C3%A1,%20tudo%20bem?%20Preciso%20falar%20com%20um%20Advogado%20Especialista%20em%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar?"
                    >
                      <FooterButtonFlex>
                        <IconWtpFooter icon={WhatsappLogo} />
                        <FooterButtonText>
                          <FooterLabelContact>Whatsapp:</FooterLabelContact>
                          (31) 99225-8880
                        </FooterButtonText>
                      </FooterButtonFlex>
                    </FooterButtonAnchor>
                  </FooterButtonProperty>
                </FooterFlex>
              </FooterLi>
              <FooterLi>
                <FooterFlex>
                  <FooterButtonProperty>
                    <FooterButtonAnchor
                      onClick={() =>
                        sendGTMEvent({
                          event: 'buttonClicked',
                          value: 'mailto',
                        })
                      }
                      href="mailto:liviaoli.adv@gmail.com"
                    >
                      <FooterButtonFlex>
                        <IconWtpFooter icon={At} />
                        <FooterButtonText>
                          <FooterLabelContact>Email:</FooterLabelContact>
                          liviaoli.adv@gmail.com
                        </FooterButtonText>
                      </FooterButtonFlex>
                    </FooterButtonAnchor>
                  </FooterButtonProperty>
                </FooterFlex>
              </FooterLi>
            </FooterUl>
          </FooterSpace>
        </FooterFlexJustifyCenter>
        <FooterAllRights>
          <FooterAllRightsParagraph>
            Este site não faz parte do Google nem do Facebook ou do Facebook
            Inc. Além disso, não oferecemos nenhum tipo de serviço oficial do
            governo, NÃO praticamos fraude, não somos uma empresa que vende
            criptoativos ou qualquer outro serviço.
          </FooterAllRightsParagraph>
          <FooterAllRightsParagraph>
            Essa empresa trabalha exclusivamente com serviços jurídicos.
          </FooterAllRightsParagraph>
          <FooterAllRightsParagraphEnd>
            Lívia Oliveira Advocacia &copy; 2024. Todos os direitos reservados.
          </FooterAllRightsParagraphEnd>
        </FooterAllRights>
      </FooterBg>
    </>
  )
}
