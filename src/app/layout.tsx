'use client';

import '../styles/base.scss';

import Loader from '../components/loader';
import Header from '../components/header';
import BarEmail from '../components/bar-email';
import BarSocialIcons from '../components/bar-social-icons';

import { useEffect, useState } from 'react';
import { firaCode, firaSans } from '../utils/fonts';

// export const metadata = {
//   title: 'Ricardo Paz | Web & Mobile developer',
//   description: 'Hello! I\'m Ricardo, a Software Developer based in Recife/PE, Brazil. I enjoy creating beautiful and reliable applications for internet and phones. My goal is to always build scalable products and performant experiences.',
// }

export default function RootLayout({ children }) {
  const isBrowser = typeof window !== `undefined`;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading || !isBrowser) {
      return;
    }

    if (window.location.hash) {
      const id = window.location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading]);

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
