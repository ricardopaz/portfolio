'use client';

import { FiFolder } from 'react-icons/fi'
import { useEffect, useRef } from 'react'
import sr, { srConfig } from '../../utils/sr'
import { Project, otherProjects } from '../../utils/projects'

const OtherProjects = () => {
  const revealtitle = useRef(null);
  const revealMessage = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealtitle.current, srConfig());
    sr.reveal(revealMessage.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const openProject = (project: Project) => {
    window.open(project.href, '_blank')
  }

  return (
    <section className="flex flex-col items-center py-[100px] max-[768px]:py-[80px] max-[480px]:py-[60px]">
      <h1 className="text-3xl text-lightestSlate font-bold mb-2" ref={revealtitle}>
        Outros projetos
      </h1>
      <p className="max-w-md text-center font-mono text-xs text-green mb-16" ref={revealMessage}>
        Gostaria de trazer todos os projetos, mas como sabemos o mercado nem sempre nos dar permissão para divulgação do trabalho realizado.
        Portanto espero que curta o que tenho disponível.
      </p>

      <div className="grid grid-cols-3 gap-[15px] max-[1080px]:grid-cols-2 max-[480px]:grid-cols-1">
        {otherProjects.map((project, index) => (
          <div 
            key={`other-project-${index}`}
            onClick={() => openProject(project)}
            ref={el => (revealProjects.current[index] = el)}
            className="group grid col-span-1 py-8 px-7 bg-lightNavy shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] rounded-lg duration-200 hover:-translate-y-2 cursor-pointer"
          >
            <div className="flex justify-between items-center mb-[35px]">
              <FiFolder className="w-[40px] h-[40px] text-green" />
              {project.links?.length > 0 && (
                <ul className="flex gap-x-4 flex-wrap text-lightSlate text-xl">
                  {project.links.map((link, indexLink) => (
                    <li key={`link-${index}-${indexLink}`}>
                      <a className="hover:text-green hover:-translate-y-1 duration-200" href={link.href} target="_blank" rel="noreferrer">
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <h2 className="text-xl text-lightestSlate font-bold mb-[10px] group-hover:text-green duration-200">{project.feature}</h2>
            <p className="text-[17px text-lightSlate">{project.description}</p>

            {project.tecnologies?.length > 0 && (
              <ul className="flex gap-x-4 flex-wrap font-mono text-xs text-lightSlate mt-[20px] items-end">
                {project.tecnologies.map((tech, indexTech) => (
                  <li key={`tech-${index}-${indexTech}`}>{tech}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherProjects
