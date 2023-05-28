interface Project {
  from: string
  href: string
  image?: string
  feature: string
  tecnologies: string[]
  description: React.ReactElement
  cta?: { text: string; href: string }
  links?: { icon: any; href: string }[]
}

export const highlightsProjects: Project[] = [
  {
    from: 'Destaque',
    image: '/portfolio-zap.png',
    feature: 'Calculadora de Poder de Compra',
    href: 'https://zapimoveis.com.br/calculadora-poder-compra',
    description: (
      <>
        Esta calculadora foi desenvolvida em 2 projetos sendo eles escritos em React e Vue.js. 
        Basicamente foi uma ferramenta criada para auxíliar nosso leads a entender o seu poder de compra de um imóvel e partindo daí nós indicamos imóveis baseado em seu resultado.
        Ess calculadora foi criada para as 3 plataformas <a className="link" href="https://www.olx.com.br/financiamento-imoveis/calculadora-poder-compra" rel="noreferer" target="_blank">OLX</a>, <a className="link" href="https://zapimoveis.com.br/calculadora-poder-compra" rel="noreferer" target="_blank">ZAP</a> e <a className="link" href="https://calculadora.vivareal.com.br/" rel="noreferer" target="_blank">Viva</a>.
      </>
    ),
    tecnologies: ['React', 'Vue.js', 'GraphQl', 'GA', 'GTM'],
    cta: { text: 'Visualizar', href: 'https://zapimoveis.com.br/calculadora-poder-compra' }
  },
  {
    from: 'Destaque',
    feature: 'Site da AuroBank',
    image: '/portfolio-auro.png',
    href: 'https://aurobank.com.br',
    description: (
      <>
        A AuroBank é uma empresa que presta serviços financeiro e que inicialmente veio com uma proposta de captação de leads para o produto &quot;Financiamento Imobiliário&quot;. 
        Fui responsável pelo desenvolvimento completo desse projeto, desde a negociação, levantamento de requisios, confecção do design e desenvolvimento. Hoje hospedo não só ess aaplicação mas como todas que desenvolvo em particular em minha conta da Vercel.
      </>
    ),
    tecnologies: ['Next.js', 'Chakra UI', 'Sass', 'TypeScript', 'GTM'],
    cta: { text: 'Visualizar', href: 'https://aurobank.com.br' }
  },
  {
    from: 'Destaque',
    feature: 'Site da Creditz',
    image: '/portfolio-creditz.png',
    href: 'https://creditz.vercel.app/',
    description: (
      <>
        A CReditz é uma empresa que oferta produtos de crédito para o consumidor PF e além dessa página inicial criei Landing Pages para cada produto, com links nessa página inicial.
        O design foi terceirizado e fiz apenas o desenvolvimento das páginas, interações e integração com o CRM RD Station levando para lead para uma esteira de atendimento.
      </>
    ),
    tecnologies: ['Next.js', 'Next UI', 'Sass', 'TypeScript', 'GTM', 'RD Station API'],
    cta: { text: 'Visualizar', href: 'https://creditz.vercel.app/' }
  }
]