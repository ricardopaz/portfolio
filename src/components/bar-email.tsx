import { FadeUp } from "./animations"
import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"

const BarEmail = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <Transition 
      as="div" 
      show={isMounted} 
      className="flex flex-col items-center w-[40px] fixed bottom-0 right-[40px] max-[1080px]:right-[20px] after:block after:w-[1px] after:h-[90px] after:mx-auto after:bg-lightSlate max-[768px]:hidden"
    >
      <FadeUp>
        <a href="mailto:me@ricardopaz.dev" className="[writing-mode:vertical-lr] text-lightSlate mb-8 hover:text-green hover:-translate-y-1 duration-200">
          me@ricardopaz.dev
        </a>
      </FadeUp>
    </Transition>
  )
}

export default BarEmail
