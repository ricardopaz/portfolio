'use client';

import { useState } from 'react'
import { menuItems } from '../utils/constants'
import { aside, hamburgerButton } from '../styles/variants/sidebar'

const SideBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const { button, box, inner } = hamburgerButton({ isOpen })
  const { container, button: btnAside, menu, menuItem, menuItemSpan } = aside({ isOpen })

  return (
    <div className="hidden max-[768px]:block">
      <button className={button()} onClick={() => setOpen(!isOpen)}>
        <div className={box()}>
          <div className={inner()} />
        </div>
      </button>

      <aside className={container()}>
        <ul className={menu()}>
          {menuItems.map((item, index) => (
            <li key={`menu-item-${item.href}`}>
              <a href={item.href} className={menuItem()} onClick={() => setOpen(false)}>
                <span className={menuItemSpan()}>
                  0{index + 1}.
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={btnAside({ className: 'btn-primary btn-lg' })}>
          Curriculo
        </button>
      </aside>
    </div>
  )
}

export default SideBar;
