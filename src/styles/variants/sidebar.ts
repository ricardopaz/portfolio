import { tv } from "tailwind-variants";

export const hamburgerButton = tv({
  slots: {
    button: 'max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center max-[768px]:relative max-[768px]:z-10 max-[768px]:-mr-[15px] max-[768px]:p-[15px] max-[768px]:transform-none max-[768px]:ease-linear max-[768px]:duration-150',
    box: 'inline-block relative w-[30px] h-[24px]',
    inner: `absolute top-[50%] right-0 w-[30px] h-[2px] bg-green duration-200 transition-transform
      before:block before:absolute before:left-auto before:right-0 before:w-[30px] before:h-[2px] before:rounded-sm before:bg-green
      after:block after:absolute after:left-auto after:right-0 after:w-[30px] after:h-[2px] after:rounded-sm after:bg-green`
  },
  variants: {
    isOpen: {
      true: {
        button: '',
        inner: `
          [transition:transform_0.22s_cubic-bezier(0.215,0.61,0.355,1)_0.12s] rotate-[225deg] 
          before:w-[100%] before:top-[0] before:opacity-[0] before:[transition:top_0.1s_ease-out,opacity_0.1s_ease-out_0.12s]
          after:w-[100%] after:bottom-[0] after:-rotate-90 after:[transition:bottom_0.1s_ease-out,transform_0.22s_cubic-bezier(0.215,0.61,0.355,1)_0.12s]
        `,
      },
      false: {
        button: 'hidden',
        inner: `
          [transition:transform_0.22s_cubic-bezier(0.55,0.055,0.675,0.19)_0s] rotate-[0] 
          before:w-[120%] before:top-[-10px] before:opacity-[1] before:[transition:top_0.1s_ease-in_0.25s,opacity_0.1s_ease-in]
          after:w-[80%] after:bottom-[-10px] after:rotate-0 after:[transition:bottom_0.1s_ease-in_0.25s,transform_0.22s_cubic-bezier(0.55,0.055,0.675,0.19)]
        `
      }
    },
  }
});

export const aside = tv({
  slots: {
    container: 'fixed flex flex-col gap-16 items-center justify-center top-0 bottom-0 right-0 px-[50px] py-[10px] w-[min(75vw,400px)] h-screen outline-none bg-lightNavy shadow-[-10px_0px_30px_-15px_rgba(2,12,27,0.7)] z-[9] [transition:all_0.25s_cubic-bezier(0.645,0.045,0.355,1)]',
    menu: 'flex flex-col gap-8',
    menuItem: 'text-lightestSlate text-lg font-mono hover:text-green duration-200 hover:after:w-full after:block after:w-0 after:relative after:top-[0.2em] after:bg-green after:easy-in-menu after:duration-200 after:opacity-50 after:h-[2px]',
    menuItemSpan: 'mr-1 text-green',
    button: ''
  },
  variants: {
    isOpen: {
      true: {
        container: 'translate-x-[0vw]'
      },
      false: {
        container: 'translate-x-[100vw]'
      }
    }
  }
})