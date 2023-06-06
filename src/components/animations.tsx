import { Transition } from "@headlessui/react"
import { useEffect, useState } from "react"

export const Fade = ({ children }) => (
  <Transition.Child
    enter="transition duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition.Child>
)

export const FadeDown = ({ children, index }) => {
  const delay = {
    0: 'delay-[0s]',
    1: 'delay-[0.1s]',
    2: 'delay-[0.2s]',
    3: 'delay-[0.3s]',
    4: 'delay-[0.4s]',
  }[index]

  return (
    <Transition.Child
      enter={`transition duration-300 ${delay}`}
      enterFrom="opacity-0 translate-y-[-20px]"
      enterTo="opacity-100 translate-y-0"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  )
}

export const FadeUp = ({ children }) => (
  <Transition.Child
    enter="transition duration-300"
    enterFrom="opacity-0 translate-y-[20px]"
    enterTo="opacity-100 translate-y-0"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition.Child>
)