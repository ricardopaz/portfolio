'use client';

import Image from 'next/image'
import useScrollDirection from '../utils/use-scroll-direction-hook'

import { menuItems } from '../utils/constants'
import { useCallback, useEffect, useState } from 'react'
import { headerVariants } from '../styles/variants/header'
import SideBar from './sidebar';

const Header = () => {
  const scrollDirection = useScrollDirection('down');

  const [isInTop, setIsInTop] = useState<boolean>(true);
  
  const onScroll = useCallback(() => {
      const { pageYOffset } = window;
      setIsInTop(pageYOffset <= 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const { button, container, menu, menuItem, menuItemSpan, rightContent } = headerVariants({
    scrollDirection, isInTop
  })

  return (
    <header className={container()}>
      <a href='#'>
        <Image src="/logo.svg" width={30} height={30} alt='Imagem ilustrativa da marca Ricardo Paz Developer' />
      </a>

      <SideBar />

      <div className={rightContent()}>
        <ul className={menu()}>
          {menuItems.map((item, index) => (
            <li key={`menu-item-${item.href}`}>
              <a href={item.href} className={menuItem()}>
                <span className={menuItemSpan()}>
                  0{index + 1}.
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={button({ className: 'btn-primary' })}>
          Curriculo
        </button>
      </div>
    </header>
  )
}

export default Header;
