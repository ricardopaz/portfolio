import { Fira_Code, Fira_Sans } from 'next/font/google'

export const firaSans = Fira_Sans({ 
  subsets: ['latin'], 
  variable: '--font-fira-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })