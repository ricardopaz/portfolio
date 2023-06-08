"use client";

import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function NotFoundPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = (<h1 className="text-[12rem] font-bold leading-[0.5] text-green font-mono">404</h1>)
  const two = (<p className="text-4xl text-lightSlate">Página Não Encontrada</p>)
  const three = (<button className="btn-primary btn-lg">Ir para Página Inicial</button>)

  const items = [one, two, three]
  
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-8">
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={2000}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  )
}