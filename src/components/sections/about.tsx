import Image from 'next/image'
import SectionContainer from '../section-container'

const stacks = ['JavaScript (ES6+)', 'React', 'Next.js', 'Node.js', 'Vue.js', 'Typescript', 'Angular', 'TailwindCss', 'Sass', 'Styled Components', 'Supabase', 'Postgress', 'SQL', 'Graphql', 'React Native']

const About = () => {
  return (
    <SectionContainer number="01" title="Sobre">
      <div className="grid grid-cols-[3fr_2fr] gap-14 mt-12">
        <div className="flex flex-col gap-4 text-md text-lightSlate">
          <p>
            Olá! Me chamo Ricardo Paz, moro em Recife/PE no Brasil. Em 2012 descobri que eu gostava de resolver problemas, sim, de qualquer tipo.
            E descobri que existia uma profissão que a sua rotina é pautada nisso &quot;resolver problemas&quot;! 
            Fiquei curioso e busquei entender como isso funcionava.
            Logo percebi que estava me inscrevendo num curso superior de Análise e Desenvolvimento de Sistemas.
          </p>
          <p>
            Primeira aula, algoritmos, vi pela primeira vez um código sendo compilado e transformando 2 + 2 em 4. Isso mudou minha vida!
            Simplesmente depois disso eu busquei entender como tudo funcionava. E imagine o que aconteceu?
          </p>
          <p>
            É, estou aqui agora, depois de <strong>11 anos atuando no mercado</strong>, te dizendo que tenho o melhor trabalho do mundo. Resolvo problemas!
          </p>
          <p>
            Iniciei atuando como fullstack e hoje tenho especialidade em front-end, desenvolvendo interfaces intuitivas e funcionais prezando sempre a experiência do usuário, 
            tratando acessibilidade e design como ponto focal na construção de cada projeto. E atualmente venho trabalhando com a seguinte stack:
          </p>

          <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] gap-[10px] list-none">
            {stacks.map((stack, index) => (
              <li key={`stack-${index}`} className="font-mono text-xs text-lightSlate relative pl-[20px] before:content-['▹'] before:absolute before:left-0 before:text-green before:text-sm">
                {stack}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative max-w-[300px]">
          <div className="group relative bg-green rounded-lg shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] hover:-translate-x-1 hover:-translate-y-1 duration-300 before:w-full before:h-full before:rounded-lg before:absolute before:duration-300 before:top-0 before:left-0 before:bg-navy before:mix-blend-screen after:w-full after:h-full after:rounded-lg after:absolute after:duration-300 after:top-[14px] after:left-[14px] after:border-[2px] after:border-green after:z-[-1] hover:after:translate-x-[8px] hover:after:translate-y-[8px]">
            <Image 
              width={300} 
              height={300} 
              src="/profile.png" 
              alt="fotografia de ricardo paz" 
              className="relative rounded-lg grayscale-[100%] contrast-100 duration-300 mix-blend-multiply group-hover:mix-blend-normal group-hover:filter-none"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default About
