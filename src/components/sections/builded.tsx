import Image from 'next/image'
import SectionContainer from '../section-container'

import { highlightsProjects } from '../../utils/projects'

const Builded = () => {
  return (
    <SectionContainer number="03" title="Algumas coisas que construi">
      <ul className="flex flex-col w-full gap-20 mt-12">
        {highlightsProjects.map((project, index) => {
          const isOdd = index % 2 === 0

          return (
            <li key={`highlight-project-${index}`} className="relative grid grid-cols-12 gap-[10px] items-center">
              <div className={`flex flex-col relative [grid-area:1/1/-1/7] ${isOdd && '!col-[7/-1] text-right items-end'} gap-6`}>
                <p className="text-green font-mono text-sm -mb-6">{project.from}</p>
                <h2 className="text-2xl font-bold text-lightestSlate">{project.feature}</h2>
  
                <p className="bg-lightNavy text-lightSlate p-[25px] w-full shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] rounded-md z-[2]">
                  {project.description}
                </p>
  
                {project.tecnologies?.length > 0 && (
                  <ul className="flex text-lightSlate font-mono text-xs gap-4">
                     {project.tecnologies.map((tech, indexTech) => <li key={`tech-${index}-${indexTech}`}>{tech}</li>)}
                  </ul>
                )}
  
                {project.links?.length > 0 && (
                  <ul className="flex text-lightSlate text-xs gap-4">
                     {project.links.map((link, indexLink) => (
                        <li key={`link-${index}-${indexLink}`}>
                          <a href={link.href} rel="noreferer" target="_blank">{link.icon}</a>
                        </li>
                     ))}
                  </ul>
                )}
                
                {project.cta && (
                  <a className="flex btn-primary w-max" href={project.cta.href} rel="noreferer" target="_blank">
                    {project.cta.text}
                  </a>
                )}
              </div>
  
              <div className={`flex items-center relative [grid-area:1/6/-1/-1] ${isOdd && '!col-[1/8]'} z-[1] w-full h-full`}>
                <div className="group w-full relative bg-green rounded-lg shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] cursor-pointer duration-300 before:w-full before:h-full before:rounded-lg before:absolute before:duration-300 before:top-0 before:left-0 before:bg-navy before:mix-blend-screen">
                  <Image
                    fill
                    src={project.image} 
                    alt="imagem que representa o projeto" 
                    className="!relative rounded-lg grayscale-[100%] brightness-90 contrast-100 duration-300 mix-blend-multiply group-hover:mix-blend-normal group-hover:filter-none"
                  />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </SectionContainer>
  )
}

export default Builded
