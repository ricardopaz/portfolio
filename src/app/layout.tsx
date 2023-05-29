import '../styles/base.scss';

import Header from '../components/header';
import BarEmail from '../components/bar-email';
import BarSocialIcons from '../components/bar-social-icons';

import { firaCode, firaSans } from '../utils/fonts';

export const metadata = {
  title: 'Ricardo Paz | Web & Mobile developer',
  description: 'Hello! I\'m Ricardo, a Software Developer based in Recife/PE, Brazil. I enjoy creating beautiful and reliable applications for internet and phones. My goal is to always build scalable products and performant experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>

      <body className={`bg-navy ${firaSans.variable} ${firaCode.variable}`}>
        <Header />
        <main className="text-white">
          <BarSocialIcons />
          {children}
          <BarEmail />
        </main>
      </body>
    </html>
  )
}
