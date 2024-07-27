import { CarrosselHome } from './CarrosselHome'
import {
  SocialProveH1,
  SocialProveParagraph,
  SocialProveSection,
  SocialProveSpace,
  SocialProveSpan,
} from './SocialProveComponents'

export function SocialProve() {
  return (
    <>
      <SocialProveSection>
        <SocialProveSpace>
          <SocialProveH1>
            Leia as avaliações{' '}
            <SocialProveSpan>dos nossos clientes</SocialProveSpan>
          </SocialProveH1>
          <SocialProveParagraph>
            Ao longo dos anos a Dra. Lívia só vem colecionando gratidão por seu
            profissionalismo
          </SocialProveParagraph>
        </SocialProveSpace>
        <CarrosselHome />
      </SocialProveSection>
    </>
  )
}
