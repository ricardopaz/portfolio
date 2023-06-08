'use client';

import '../styles/base.scss';

import Loader from '../components/loader';
import Header from '../components/header';
import BarEmail from '../components/bar-email';
import BarSocialIcons from '../components/bar-social-icons';

import { useState } from 'react';
import { firaCode, firaSans } from '../utils/fonts';
import { GA_TRACKING_ID } from '../utils/constants';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const isProduction = process.env.NODE_ENV === 'production';

  const handleFinish = () => setIsLoading(false);
  
  return (
    <html lang="en">
      <head>
        <title>Ricardo Paz | Web & Mobile developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Olá! Sou Ricardo, um Desenvolvedor de Software que mora em Recife/PE, Brasil. Gosto de criar criar interfaces Web e Mobile de alto padrão e usabilidade. Meu objetivo é sempre criar produtos escaláveis ​​e experiências de alto desempenho." />

        {/* We only want to add the scripts if in production */}
        {isProduction && (
          <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
              }}
            />
          </>
        )}
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
