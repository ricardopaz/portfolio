interface SectionContainerProps {
  id?: string
  title: string
  number: string
  children: any
}

const SectionContainer = ({ id, number, title, children }: SectionContainerProps) => {
  return (
    <section id={id} className="flex flex-col items-start justify-center py-[100px] mx-[100px]">
      <h1 className="flex items-center gap-2 text-3xl leading-6 font-bold text-lightestSlate after:flex after:w-[300px] after:h-[1px] after:bg-lightestNavy after:ml-4">
        <span className="text-green font-mono font-thin text-xl leading-5 self-end">{number}.</span> {title}
      </h1>
      {children}
    </section>
  )
}

export default SectionContainer