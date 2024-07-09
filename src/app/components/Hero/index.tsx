import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { StarRating } from '../StarRating'
import {
  HeroDivide,
  HeroH1,
  HeroGradient,
  HeroParagraph,
  HeroSectionProperty,
  HeroRoot,
  HeroParagraphStrong,
} from './HeroComponents'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function Hero() {
  return (
    <>
      <HeroRoot>
        <div className="h-auto w-full bg-hero-image bg-cover bg-fixed bg-center bg-no-repeat object-cover">
          <HeroGradient />
          <HeroSectionProperty>
            <HeroH1>advogada previdenciária</HeroH1>
            <HeroParagraph>Precisa de ajuda com INSS?</HeroParagraph>
            <HeroParagraphStrong>Eu posso te ajudar</HeroParagraphStrong>
            <HeroParagraph>
              Sou Especialista em Previdência Social com mais de 15 anos de
              experiência.
            </HeroParagraph>
            <HeroDivide />
            <HeroParagraph>
              Atendimento em Todas as Regiões de Belo Horizonte/MG
            </HeroParagraph>
            <ButtonHome href="https://api.whatsapp.com/send?phone=5531992258880&text=Ol%C3%A1,%20tudo%20bem?%20Preciso%20falar%20com%20um%20Advogado%20Especialista%20em%20Direito%20Previdenci%C3%A1rio.%20Pode%20me%20ajudar?">
              <ButtonHomeText>clique e fale comigo</ButtonHomeText>
              <ButtonHomeFlex>
                <WhatsappLogo size={24} weight="fill" />
              </ButtonHomeFlex>
            </ButtonHome>
            <StarRating />
          </HeroSectionProperty>
        </div>
      </HeroRoot>
    </>
  )
}
