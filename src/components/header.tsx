'use client';

import Image from 'next/image'
import SideBar from './sidebar'
import useScrollDirection from '../utils/hooks/use-scroll-direction-hook'

import { Fade, FadeDown } from './animations'
import { menuItems } from '../utils/constants'
import { Transition } from '@headlessui/react'
import { useCallback, useEffect, useState } from 'react'
import { headerVariants } from '../styles/variants/header'

const Header = () => {
  const scrollDirection = useScrollDirection('down');

  const [isMounted, setIsMounted] = useState(false);
  const [isInTop, setIsInTop] = useState<boolean>(true);
  
  const onScroll = useCallback(() => {
    const { pageYOffset } = window;
    setIsInTop(pageYOffset <= 0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", onScroll);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const { button, container, menu, menuItem, menuItemSpan, rightContent } = headerVariants({
    scrollDirection, isInTop
  })

  return (
    <>
      <Transition as="header" show={isMounted} className={container()}>
        <Fade>
          <a href="#">
            <Image src="/logo.svg" width={30} height={30} alt='Imagem ilustrativa da marca Ricardo Paz Developer' />
          </a>
        </Fade>

        <div className={rightContent()}>
          <ul className={menu()}>
            {menuItems.map((item, index) => (
              <li key={`menu-item-${item.href}`}>
                <FadeDown index={index}>
                  <a href={item.href} className={menuItem()}>
                    <span className={menuItemSpan()}>
                      0{index + 1}.
                    </span>
                    {item.label}
                  </a>
                </FadeDown>
              </li>
            ))}
          </ul>

          <FadeDown index={4}>
            <button className={button({ className: 'btn-primary' })}>
              Curriculo
            </button>
          </FadeDown>
        </div>
        
        <SideBar />
      </Transition>
    </>
  )
}

export default Header;
