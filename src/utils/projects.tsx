import { FiExternalLink, FiGithub } from "react-icons/fi"

export interface Project {
  from?: string
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
        Basicamente é uma ferramenta criada para auxíliar os leads a entender o seu poder de compra de um imóvel e partindo do seu resultado é possível buscar imóveis com fit em seu perfil.
        Essa calculadora foi criada para as 3 plataformas <a className="link" href="https://www.olx.com.br/financiamento-imoveis/calculadora-poder-compra" rel="noreferrer" target="_blank">OLX</a>, <a className="link" href="https://zapimoveis.com.br/calculadora-poder-compra" rel="noreferrer" target="_blank">ZAP</a> e <a className="link" href="https://calculadora.vivareal.com.br/" rel="noreferrer" target="_blank">Viva</a>.
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
        A Creditz é uma empresa que oferta produtos de crédito para o consumidor PF e além dessa página inicial criei Landing Pages para cada produto, com links nessa página inicial.
        O design foi terceirizado e fiz apenas o desenvolvimento das páginas, interações e integração com o CRM RD Station levando para lead para uma esteira de atendimento.
      </>
    ),
    tecnologies: ['Next.js', 'Next UI', 'Sass', 'TypeScript', 'GTM', 'RD Station API'],
    cta: { text: 'Visualizar', href: 'https://creditz.vercel.app/' }
  }
]

export const otherProjects: Project[] = [
  {
    feature: 'Portifólio',
    href: 'https://github.com/ricardopaz/portfolio',
    description: (
      <>
        Esse projeto é exatamente esta página que você está vendo, desenvolvi usando Next.js na versão 13.4 com Typescript e Tailwind Css. Baseado no design da Brittany Chiang.
      </>
    ),
    tecnologies: ['Next.js', 'Typescript', 'Tailwind', 'Sass'],
    links: [
      { icon: <FiGithub className="w-[20px] h-[20px]" />, href: 'https://github.com/ricardopaz/portfolio' },
    ]
  },
  {
    feature: 'Site MZI',
    href: 'https://mzi-app.vercel.app/',
    description: (
      <>
        Site criado para uma empresa de investimentos que buscava aumentar o posicionamento de marca e no meio digital e criamos essa LP para iniciar uma proposta de captação e orientação de leads para o mercado da empresa.
      </>
    ),
    tecnologies: ['Next.js', 'Sass', 'Chakra', 'Typescript'],
    links: [
      { icon: <FiExternalLink className="w-[20px] h-[20px]" />, href: 'https://mzi-app.vercel.app/' }
    ]
  },
  {
    feature: 'POC Editor',
    href: 'https://github.com/ricardopaz/poc-editor',
    description: (
      <>
        Essa POC foi desenvolvida para validar uma hipótese técnica ao implementar um editor com possibilidade de uso de tags fixas e autocomplete. A sua utilidade é voltada para criação de templates de documentos.
      </>
    ),
    tecnologies: ['Vue.js', 'Quill.js'],
    links: [
      { icon: <FiGithub className="w-[20px] h-[20px]" />, href: 'https://github.com/ricardopaz/poc-editor' },
      { icon: <FiExternalLink className="w-[20px] h-[20px]" />, href: 'https://poc-editor.vercel.app/' }
    ]
  },
  {
    feature: 'SympleCont',
    href: 'https://symplecont-app.vercel.app/',
    description: (
      <>
        Uma projeto que iniciei junto a um parceiro da área contábil no intúito de criarmos um sistema voltado para a gestão financeira de pequenas empresas. 
      </>
    ),
    tecnologies: ['Next.js', 'Chakra', 'Sass', 'Typescript'],
    links: [
      { icon: <FiExternalLink className="w-[20px] h-[20px]" />, href: 'https://symplecont-app.vercel.app/' }
    ]
  },
  {
    feature: 'Loja Oficial - Zap Imóveis',
    href: 'https://www.zapimoveis.com.br/imobiliaria/109155',
    description: (
      <>
        Lojas oficiais nada mais é do que um perfil com mais detalhe para as imobiliárias anunciantes do portal Zap Imóveis. 
        Essa feature vem com a proposta de agregar mais valor aos produtos (SVAs) e posicionar mais as imobs em mecanismos de busca.
      </>
    ),
    tecnologies: ['Vue.js', 'Vuex', 'GraphQl', 'Sass'],
    links: [
      { icon: <FiExternalLink className="w-[20px] h-[20px]" />, href: 'https://www.zapimoveis.com.br/imobiliaria/109155' }
    ]
  },
]