import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { StarRating } from '../StarRating'
import {
  HeroDivide,
  HeroSectionBgImage,
  HeroSectionH1,
  HeroSectionParagraph,
  HeroSectionParagraphStrong,
  HeroSectionProperty,
  HeroSectionRoot,
} from './HeroComponents'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { ImgBgImage } from '../Image'

export function Hero() {
  return (
    <>
      <HeroSectionRoot>
        <ImgBgImage />
        <HeroSectionBgImage />
        <HeroSectionProperty>
          <HeroSectionH1>advogada previdenciária</HeroSectionH1>
          <HeroSectionParagraph>
            Precisa de ajuda com INSS?
          </HeroSectionParagraph>
          <HeroSectionParagraphStrong>
            Eu posso te ajudar
          </HeroSectionParagraphStrong>
          <HeroSectionParagraph>
            Sou Especialista em Previdência Social com mais de 15 anos de
            experiência.
          </HeroSectionParagraph>
          <HeroDivide />
          <HeroSectionParagraph>
            Atendimento em Todas as Regiões de Belo Horizonte/MG
          </HeroSectionParagraph>

          <ButtonHome href="https://api.whatsapp.com/send?phone=5531992258880&text=Ol%C3%A1,%20tudo%20bem?%20Preciso%20falar%20com%20um%20Advogado%20Especialista%20em%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar?">
            <ButtonHomeText>clique e fale comigo</ButtonHomeText>
            <ButtonHomeFlex>
              <WhatsappLogo size={24} weight="fill" />
            </ButtonHomeFlex>
          </ButtonHome>
          <StarRating />
        </HeroSectionProperty>
      </HeroSectionRoot>
    </>
  )
}
