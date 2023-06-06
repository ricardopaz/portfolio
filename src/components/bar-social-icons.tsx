import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FadeUp } from './animations';

const links = [
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/ricardopdsf/' },
  { icon: <FiGithub />, href: 'https://github.com/ricardopaz' },
  { icon: <FiInstagram />, href: 'https://instagram.com/ricardopdsf' },
]

const SocialIcons = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <Transition 
      as="div"
      show={isMounted}
      className="w-[40px] fixed bottom-0 left-[40px] max-[1080px]:left-[20px] after:block after:w-[1px] after:h-[90px] after:mx-auto after:bg-lightSlate max-[768px]:hidden"
    >
      <FadeUp>
        <ul className="flex flex-col gap-8 items-center m-0 p-0 list-none mb-8">
          {links.map((link, index) => (
            <li key={`social-link-${index}`}>
              <a href={link.href} target="_blank" rel="noreferrer" className="flex w-[20px] h-[20px] text-lightSlate hover:text-green hover:-translate-y-1 duration-200">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>
    </Transition>
  )
}

export default SocialIcons
