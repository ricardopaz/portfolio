'use client';

import '../styles/base.scss';

import Loader from '../components/loader';
import Header from '../components/header';
import BarEmail from '../components/bar-email';
import BarSocialIcons from '../components/bar-social-icons';

import { useState } from 'react';
import { firaCode, firaSans } from '../utils/fonts';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinish = () => setIsLoading(false);
  
  return (
    <html lang="en">
      <head>
        <title>Ricardo Paz | Web & Mobile developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Olá! Sou Ricardo, um Desenvolvedor de Software que mora em Recife/PE, Brasil. Gosto de criar criar interfaces Web e Mobile de alto padrão e usabilidade. Meu objetivo é sempre criar produtos escaláveis ​​e experiências de alto desempenho." />
      </head>

      <body className="" data-react-helmet="class">
        <div className={`${firaSans.variable} ${firaCode.variable}`}>
          {isLoading ? (
            <Loader finishLoading={handleFinish} />
          ) : (
            <>
              <Header />
              <main className="text-white">
                <BarSocialIcons />
                {children}
                <BarEmail />
              </main>
            </>
          )}
        </div>
      </body>
    </html>
  )
}
