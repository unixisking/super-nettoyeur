import * as React from "react"

import { FaWhatsapp } from "react-icons/fa"
import { Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"

export default function Popup() {
  let [isShowing, setIsShowing] = React.useState(true)
  let [isScrollShowing, setIsScrollShowing] = React.useState(
    typeof window !== undefined && window.scrollY > 8000
  )

  const handleScroll = React.useCallback(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setIsScrollShowing(window.scrollY > 800)
      })
    }
  }, [])

  React.useEffect(() => {
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=0791304768&text=Bonjour"
        className="floating w-14 h-14 border-radius-full bg-green-500 fixed bottom-8 right-12 z-50 rounded-md block md:hidden"
      >
        <FaWhatsapp
          id="helloworld"
          className="text-white w-10 h-10 flex justify-center align-center mx-auto mt-2"
        />
      </a>
      <Transition
        as={React.Fragment}
        show={isShowing && isScrollShowing}
        enter="transform transition ease-in-out duration-800 sm:duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="fixed bottom-0 right-0 md:-right-2 xl:-right-12 pb-2 sm:pb-2 z-50 hidden md:block w-2/3">
          <div className="max-w-3xl px-2 sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg bg-darkbg shadow-lg">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-green-600">
                    <FaWhatsapp
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="ml-3 font-medium text-white truncate">
                    <p className="md:hidden">Demander un devis</p>
                    <p className="hidden md:inline">
                      Demander un devis instantané par WhatsApp
                    </p>
                  </div>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto mr-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=0791304768&text=Bonjour"
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    Demander un devis
                  </a>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <button
                    onClick={() => setIsShowing(false)}
                    type="button"
                    className="flex p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  )
}
