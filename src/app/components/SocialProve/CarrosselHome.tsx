'use client'

import Image from 'next/image'
import { Star } from '@phosphor-icons/react'
import {
  CarrosselBlockMapIdx,
  CarrosselClientNameParagraph,
  CarrosselClientProveParagraph,
  CarrosselColumnFillBalance,
  CarrosselDiv,
  CarrosselDivWhatTime,
  CarrosselFlexItens,
  CarrosselSection,
} from './CarrosselComponents'
import { Swiper, SwiperSlide } from 'swiper/react'
import './swiper.css'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Autoplay } from 'swiper/modules'

export function CarrosselHome() {
  const features = {
    imgURL1:
      'https://lh3.googleusercontent.com/a-/ALV-UjUP1fK68fKh4EWJD4dZAm_DzJiYOLyTNgoGSROpR2URGhchsgWp=w45-h45-p-rp-mo-br100',
    whatTime1: 'um mês atrás',
    clientName1: 'Ramiria Carvalho',
    clientProve1:
      'A Dra. Lívia é uma excelente profissional, advogada muito capaz, dedicada, simpática, atenciosa e principalmente com o diferencial do olhar humano, o que acredito que possibilita entender melhor as necessidades em cada caso. E foi o que chamou mais a minha atenção, o fato de que até mesmo os clientes com maior simplicidade e de pouco estudo se sentirem muito à vontade e serem sempre muito bem recebidos e tratados por ela e por toda a sua equipe, algo que minha mãe faz questão de sempre destacar, desde o primeiro contato com a Dra. Lívia. Estamos muito satisfeitos e só temos a agradecer por todo o seu profissionalismo e dedicação. Graças à Deus e aos esforços da Dra. Lívia, minha mãe agora pôde receber o seu benefício.',

    imgURL2:
      'https://lh3.googleusercontent.com/a/ACg8ocKdQCxd530uvm_CSJhy4Qqf96o__AqPaGMdK-u5Hcv_ZdkVKQ=w45-h45-p-rp-mo-br100',
    whatTime2: 'um mês atrás',
    clientName2: 'Leonice Soares Ferreira',
    clientProve2:
      'Tive o prazer de conhecer o Dr.livia e ver de perto como ela trata seus clientes com muita atenção e faz de tudo pra que eles se sintam a vontade para se dirigir a ela.Minha mãe como cliente dela sempre foi muito bem recebida por ela e pela secretaria a Larissa que também nao posso deixar de mencionar a sua educação e bom humor com todos .A Dr.livia além de muito competente é um exemplo de simplicidade e educação e nessa profissão de advogado é muito importante tendo em vista que vai atender varios tipos de pessoas grande parte delas pessoas muito simples.Só tenho que agradecer em meu nome e no nome da minha mãe que foi a cliente ,e dizer que super indico o trabalho da Dr.livia uma grande profissional.',

    imgURL3:
      'https://lh3.googleusercontent.com/a/ACg8ocIRf-9Gfu2rWzbtYdZKC7-VIPjV-NBQRi7MRU1mzkVgnwjHjQ=w45-h45-p-rp-mo-br100',
    whatTime3: 'um mês atrás',
    clientName3: 'Veneci Ferreira',
    clientProve3:
      'So tenho agradecer a Doutora, graças a Deud estou aposentada. Depois de muito tentar coliquei na mão dela e meu benefício saiu . Sempre muito atenciosa comigo, so deus sabe o tamanho da minha gratidão.😍',

    imgURL4:
      'https://lh3.googleusercontent.com/a/ACg8ocL2KKMOu-kV_jlzEMSruir1bAbVJiUkyfPaBSUeU4ZuC86xVw=w45-h45-p-rp-mo-br100',
    whatTime4: '2 semanas atrás',
    clientName4: 'Edna Ohana',
    clientProve4:
      'Fiquei muito satisfeita com o trabalho da Dra Lívia, me atendeu com muita simpatia, me tirou todas as dúvidas , e resolveu tudo com bastante rapidez. Estou aposentada. Reconendo!',

    imgURL5:
      'https://lh3.googleusercontent.com/a/ACg8ocJFnyMRLNXjH71D9e5hkztkABGr_hTIJKm67TLQVebwGwIELg=w45-h45-p-rp-mo-ba3-br100',
    whatTime5: 'um mês atrás',
    clientName5: 'Alaide Gomes',
    clientProve5:
      'Dra. Lívia muito simpática, proativa e uma profissional muito dedicada aos seus clientes',

    imgURL6:
      'https://lh3.googleusercontent.com/a/ACg8ocKy22bSKQEqUge32THllKR34wz6tH9GMJTzpd3S-7hGOmnROQ=w45-h45-p-rp-mo-br100',
    whatTime6: '4 meses atrás',
    clientName6: 'Aline H.S.',
    clientProve6:
      'Dra. Lívia resolveu com muita eficiência o problema de aposentadoria da minha mãe. Só tenho a agradecer pelos excelentes serviços prestados!',

    imgURL7:
      'https://lh3.googleusercontent.com/a/ACg8ocK6G6IwCOvxkBzsNoiMB1sPgAW073E5xeKTd40ZaUpWyLoKmw=w45-h45-p-rp-mo-br100',
    whatTime7: 'um ano atrás',
    clientName7: 'Rosana Santos',
    clientProve7:
      'Recebi um excelente atendimento da Dra. Lívia. Muito clara em suas palavras o que me deixou à vontade em explanar todas minhas dúvidas. Indico demais essa profissional.',

    imgURL8:
      'https://lh3.googleusercontent.com/a/ACg8ocITdmn5dS0OsyGWsVkRkNV9Pqb-kMNClti5pqNImiRGCl2z6w=w45-h45-p-rp-mo-br100',
    whatTime8: 'um ano atrás',
    clientName8: 'Ricardo Leite',
    clientProve8:
      ' A doutora Lívia é uma profissional que trata diretamente com você, uma empatia enorme, buscando sempre a melhor forma de atender a nossa demanda. Muito segura, demonstra alto conhecimento técnico, te explica com clareza toda a parte técnica, verdadeira sem criar expectativas e sempre com o propósito em ajudar e trazer resultados positivos a quem a procura. Recomendo a todos. Obrigado doutora Lívia pelo excelente trabalho realizado e por trazer mais alegria e esperança em dias melhores. Um forte abraço. Ricardo, Lucas e Gabriela.',

    imgURL9:
      'https://lh3.googleusercontent.com/a-/ALV-UjXiQk9iWn7qRbAZLXkth6AImi8k1TcFmrROxfhJ4kbc2CnglZr8ww=w45-h45-p-rp-mo-br100',
    whatTime9: '8 meses atrás',
    clientName9: 'Sergio Faleiro',
    clientProve9:
      'Muito satisfeito com o serviço solicitado. Dra. Lívia Oliveira foi muito prestativa e eficiente. Meus objetivos foram alcançados com a segurança que precisava. Obrigado',
  }

  return (
    <>
      <CarrosselSection>
        <CarrosselColumnFillBalance>
          <Swiper
            autoHeight={true}
            navigation={true}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL1}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName1}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve1}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL2}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName2}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve2}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL3}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName3}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve3}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL4}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName4}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve4}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL5}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName5}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve5}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL6}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName6}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve6}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL7}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName7}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve7}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL8}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName8}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve8}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
            <SwiperSlide>
              <CarrosselBlockMapIdx>
                <CarrosselFlexItens>
                  <Image
                    alt="Clients"
                    width={45}
                    height={45}
                    src={features.imgURL9}
                    loading="lazy"
                    className="size-14 rounded-full object-cover"
                  />
                  <CarrosselDiv>
                    <CarrosselDivWhatTime>
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                      <Star size={20} weight="fill" />
                    </CarrosselDivWhatTime>
                    <CarrosselClientNameParagraph>
                      {features.clientName9}
                    </CarrosselClientNameParagraph>
                  </CarrosselDiv>
                </CarrosselFlexItens>
                <CarrosselClientProveParagraph>
                  {features.clientProve9}
                </CarrosselClientProveParagraph>
              </CarrosselBlockMapIdx>
            </SwiperSlide>
          </Swiper>
        </CarrosselColumnFillBalance>
      </CarrosselSection>
    </>
  )
}
