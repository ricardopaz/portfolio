const Hero = () => {
  return (
    <section className="flex flex-col items-start justify-center h-screen mx-[100px]">
      <p className="font-mono text-green text-md mb-[30px]">Olá, meu nome é</p>

      <h1 className="text-[80px] leading-[88px] font-black text-lightestSlate">Ricardo Paz.</h1>
      <h2 className="text-[70px] leading-[77px] font-bold text-lightSlate">Desenvolvedor WEB e Mobile.</h2>

      <p className="text-lightSlate mt-5 max-w-[540px]">
        Sou especialista em construção de interfaces intuitivas, com design robustos, interativos e acessíveis. 
        Atualmente trabalho como <span className="text-green">Senior Front-end Developer</span> na OLX Brasil (maior grupo de anúncios do Brasil) atuando nos portais
        <a href="https://olx.com" target="_blank" rel="noreferrer" className="text-green ml-1">OLX</a>,
        <a href="https://zapimoveis.com" target="_blank" rel="noreferrer" className="text-green ml-1">Zap Imóveis</a> e
        <a href="https://vivareal.com" target="_blank" rel="noreferrer" className="text-green ml-1">Vivareal</a>.
      </p>

      <a href="https://linkedin.com/in/ricardopdsf" target="_blank" rel="noreferrer" className="btn-primary btn-lg mt-[50px]">
        Me conheça um pouco mais!
      </a>
    </section>
  )
}

export default Hero