'use client';

import { srConfig } from '../utils/sr'
import { useEffect, useRef } from 'react'

interface SectionContainerProps {
  id?: string
  title: string
  number: string
  children: any
}

const SectionContainer = ({ id, number, title, children }: SectionContainerProps) => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section 
      id={id} 
      ref={revealContainer}
      className="flex flex-col items-start justify-center py-[100px] max-w-[1000px] mx-auto max-[768px]:py-[80px] max-[480px]:py-[60px]"
    >
      <h1 className="flex items-center gap-2 text-[clamp(26px,5vw,32px)] leading-6 font-bold text-lightestSlate after:flex after:w-[300px] after:h-[1px] after:bg-lightestNavy after:ml-4 max-[1080px]:after:w-[200px] max-[768px]:after:w-auto max-[600px]:w-full">
        <span className="text-green font-mono font-thin text-xl leading-5 self-end max-[768px]:self-center">{number}.</span> {title}
      </h1>
      {children}
    </section>
  )
}

export default SectionContainer