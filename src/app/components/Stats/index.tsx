import {
  StatsH1,
  StatsParagraph,
  StatsProperty,
  StatsSection,
  StatsSpan,
} from './StatsComponents'

export function Stats() {
  const features = [
    {
      title: 'Clientes Atendidos',
      subtitle: '+ de 2.000',
    },
    {
      title: 'Processos no Êxito',
      subtitle: '+ de 2.000',
    },
    {
      title: 'de Experiência em Jurídica Previdenciária',
      subtitle: '+ de 15 Anos',
    },
  ]

  return (
    <>
      <StatsSection>
        <StatsProperty>
          <StatsH1>
            Quantos clientes a <StatsSpan>Dra Lívia já ajudou?</StatsSpan>
          </StatsH1>

          <StatsParagraph>
            São mais de 15 anos de experiência na área Previdenciária
          </StatsParagraph>
        </StatsProperty>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-lg bg-yellow-100 p-8 px-4 py-8 text-center shadow-lg"
              >
                <dt className="order-last text-lg font-medium text-brandBlue500">
                  {item.title}
                </dt>
                <dd className="text-4xl font-extrabold text-brandBlue500 md:text-5xl">
                  {item.subtitle}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </StatsSection>
    </>
  )
}
