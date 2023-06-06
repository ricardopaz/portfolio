'use client';

import { useEffect, useRef } from 'react'
import { srConfig } from '../../utils/sr'

const Contact = () => {
  const revealtitle = useRef(null);
  const revealsubtitle = useRef(null);
  const revealmessage = useRef(null);
  const revealcta = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealtitle.current, srConfig());
    sr.reveal(revealsubtitle.current, srConfig());
    sr.reveal(revealmessage.current, srConfig());
    sr.reveal(revealcta.current, srConfig());
  }, []);

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-[100px]">
      <p className="max-w-md text-center font-mono font-thin text-lg text-green mb-2" ref={revealtitle}>
        04. Qual será o próximo?
      </p>
      <h1 className="text-[clamp(28px,5vw,70px)] text-lightestSlate font-bold mb-4" ref={revealsubtitle}>
        Entre em Contato
      </h1>
      <p className="max-w-lg text-center font-mono text-base text-lightestSlate mb-16" ref={revealmessage}>
        Embora eu não esteja procurando novas oportunidades no momento, minha caixa de entrada está sempre aberta. 
        Se você tem uma pergunta ou apenas quer dizer oi, farei o possível para entrar em contato com você!
      </p>
      <a className="btn-primary btn-lg" href="mailto:me@ricardopaz.dev" ref={revealcta}>
        Entrar em Contato 👋
      </a>
    </section>
  )
}

export default Contact
