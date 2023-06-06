'use client';

import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  
  const one = <p className="font-mono text-green text-md mb-[30px]">Olá, meu nome é</p>

  const two = <h1 className="text-[clamp(40px,7vw,80px)] leading-[1.1] font-black text-lightestSlate">Ricardo Paz.</h1>
  const three = <h2 className="text-[clamp(28px,5vw,70px)] leading-[1.1] font-[600] text-lightSlate">Desenvolvedor WEB e Mobile.</h2>

  const four = (
    <p className="text-lightSlate mt-5 max-w-[540px]">
      Sou especialista em construção de interfaces intuitivas, com design robustos, interativos e acessíveis. 
      Atualmente trabalho como <span className="text-green">Senior Front-end Developer</span> na OLX Brasil (maior grupo de anúncios do Brasil) atuando nos portais
      <a href="https://olx.com" target="_blank" rel="noreferrer" className="link ml-1">OLX</a>,
      <a href="https://zapimoveis.com" target="_blank" rel="noreferrer" className="link ml-1">Zap Imóveis</a> e
      <a href="https://vivareal.com" target="_blank" rel="noreferrer" className="link ml-1">Vivareal</a>.
    </p>
  )

  const five = (
    <a href="#about" className="btn-primary btn-lg mt-[50px]">
      Me conheça mais!
    </a>
  )

  const items = [one, two, three, four, five];

  return (
    <section className="flex flex-col items-start justify-center h-screen mx-auto max-w-[1000px]">
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={2000}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </section>
  )
}

export default Hero
