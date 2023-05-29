import { tv } from "tailwind-variants";

export const headerVariants = tv({
  slots: {
    container: 'z-10 flex items-center justify-between fixed top-0 w-full px-[50px] duration-300 backdrop-blur-[10px] pointer-events-auto filter-none select-auto',
    rightContent: 'flex gap-8 items-center max-[768px]:hidden',
    menu: 'flex gap-6',
    menuItem: 'text-lightestSlate text-[13px] font-mono hover:text-green duration-200 hover:after:w-full after:block after:w-0 after:relative after:top-[0.2em] after:bg-green after:easy-in-menu after:duration-200 after:opacity-50 after:h-[2px]',
    menuItemSpan: 'mr-1 text-green',
    button: ''
  },
  variants: {
    isInTop: {
      true: {
        container: 'h-[100px]'
      },
      false: {
        container: 'h-[70px] bg-[rgba(10,25,47,0.85)] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]'
      }
    },
    scrollDirection: {
      down: {
        container: 'translate-y-[calc(70px_*_-1)]'
      },
      up: {
        container: 'translate-y-0'
      }
    }
  }
});