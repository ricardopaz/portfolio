import Image from "next/image"

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-[100px] pb-[50px] gap-4">
      <p className="text-center font-mono text-xs text-lightestSlate">
        Feito por mim com
      </p>
      <div className="flex gap-6 items-center">
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="relative w-[80px] h-[40px]">
          <Image fill src="/nextjs-white-logo.svg" alt="logomarca do next.js" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="relative w-[130px] h-[16px]">
          <Image fill src="/tailwindcss-logo.svg" alt="logomarca do next.js" />
        </a>
      </div>
      <p className="text-center font-mono text-xs text-lightestSlate">
        Adaptação de <a className="link" href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer">Brittany Chiang Portfolio</a>
      </p>
    </section>
  )
}

export default Footer
