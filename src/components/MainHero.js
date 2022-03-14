import React, { useState } from "react"
import clsx from "clsx"
import { Link } from "gatsby"

/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import cleaningToolImage from "../images/cleaning-tool.png"
import { useMediaQuery } from "react-responsive"

const features = [
  "Des prix très justes et une qualité de service exceptionnelle.",
  "Devis gratuit et sur place par WhatsApp pour les particuliers ou sur rendez-vous pour les professionnels.",
  "Service d'entretien et conciergerie sur-mesure pour tout type d'espace : entretien des locaux, ménage pour entreprise et bien d'autres encore.",
  "Une disponibilité 24h/24 et 7j/7, et ce durant toute l'année.",
  "Efficacité et rapidité des interventions dans l'ensemble de la Suisse romande.",
]

export default function MainHero({ blok }) {
  const [dropdownIsShown, setDropdownIsShown] = useState(false)
  const [subMenuIsShown, setSubMenuIsShown] = useState(false)

  const servicesDropdown = blok.navbar[0].Elements.find(
    ele => ele.component === "dropdown"
  )
  console.log("mainhero", blok)
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" })
  return (
    <div
      style={{
        marginBottom: blok.bottom && isDesktop ? `${blok.bottom}px` : null,
      }}
      className="relative lg:h-screen mb-36"
    >
      <div className="max-w-7xl mx-auto">
        <div
          style={{ background: "rgb(240, 248, 237)" }}
          className="relative z-10 pb-8 sm:pb-16 md:pb-20 hero:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            className="hidden hero:block absolute right-0 inset-y-0 h-screen text-secondarybg w-48 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 hero:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/" className="flex items-center">
                      <img
                        className="h-8 w-auto sm:h-12 mt-4"
                        src={blok.logo.filename}
                        alt="Super Serrurier"
                      />
                    </Link>

                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8">
                  {blok.navbar[0].Elements.map(blok => {
                    if (blok.component === "dropdown") {
                      return (
                        <div key={blok._uid} className="relative">
                          <Link
                            to="/services"
                            type="button"
                            onMouseEnter={() => setDropdownIsShown(true)}
                            className="group text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 more_dropdown_button"
                          >
                            <span>{servicesDropdown.text}</span>
                            <svg
                              className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </Link>

                          <div
                            className={clsx(
                              "absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0 transition ease-out duration-200 opacity-0 translate-y-1 z-20",
                              {
                                hidden: !dropdownIsShown,
                                "opacity-100": dropdownIsShown,
                                "translate-y-0": dropdownIsShown,
                              }
                            )}
                          >
                            <div
                              onMouseLeave={() => setDropdownIsShown(false)}
                              className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                            >
                              <div
                                style={{ background: "#F0F8ED" }}
                                className="z-20 relative grid gap-1  py-6 sm:py-8"
                              >
                                {servicesDropdown.Elements.map(element => (
                                  <div class="flex items-center rounded-md hover:bg-green-100 px-5">
                                    <img
                                      src={cleaningToolImage}
                                      className="text-green-500 h-6 w-auto mt-3"
                                    />
                                    <Link
                                      key={element._uid}
                                      to={element.link.url}
                                      className="-m-3 ml-4"
                                    >
                                      {element.text}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    } else {
                      return (
                        <Link
                          key={blok._uid}
                          to={blok.link.url}
                          className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                          {blok.text}
                        </Link>
                      )
                    }
                  })}
                  <Link
                    to="/contact"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={blok.logo.filename}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 py-2 space-y-1">
                    <Link
                      to="/"
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 ml-2 text-base font-medium text-gray-900"
                    >
                      Accueil
                    </Link>
                    <button
                      className="-m-3 p-3 flex rounded-lg hover:bg-gray-50 focus:outline-none w-full"
                      onClick={() => setSubMenuIsShown(!subMenuIsShown)}
                    >
                      <div className="flex items-center w-full">
                        <div className="ml-5 text-base font-medium text-gray-900">
                          {servicesDropdown.text}
                        </div>
                      </div>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          id="icon1"
                          className={clsx(
                            "-rotate-0 text-gray-400 h-6 w-6 transform",
                            { "-rotate-180": subMenuIsShown }
                          )}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </button>
                    <div className={clsx({ hidden: !subMenuIsShown })}>
                      {servicesDropdown.Elements.map(element => (
                        <div class="flex items-center block rounded-md hover:bg-green-100 px-5">
                          <img
                            src={cleaningToolImage}
                            className="text-green-500 h-6 w-auto mt-3"
                          />
                          <Link
                            key={element._uid}
                            to={element.link.url}
                            className="-m-3 ml-4"
                          >
                            {element.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/faq"
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 ml-2 text-base font-medium text-gray-900"
                    >
                      FAQ
                    </Link>
                    <Link
                      to="/a-propos"
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 ml-2 text-base font-medium text-gray-900"
                    >
                      A propos
                    </Link>
                  </div>
                  {blok.button[0]?.link && (
                    <div className="block w-full px-5 py-3 text-center font-medium">
                      <Link
                        to={blok.button[0].link}
                        className="block w-full py-3 px-4 rounded-md shadow-lg bg-primarybg text-white font-bold focus:outline-none"
                      >
                        {blok.button[0].text}
                      </Link>
                    </div>
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-24 lg:px-8">
            <div className="sm:text-center hero:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-primarybg xl:inline">
                  {blok.title}
                </span>
              </h1>
              <a
                id="call-button"
                href="tel:0791304768"
                class="mt-4 inline-flex items-center text-secondarycolor bg-darkbg rounded-full p-2 sm:mt-5 sm:text-base lg:mt-6 lg:text-sm xl:text-base hover:text-secondarycolor-light"
              >
                <span class="px-3 py-2 text-white text-lg  lg:text-xl xl:text-2xl  leading-5  tracking-wide bg-primarybg rounded-full">
                  Appelez-nous
                </span>
                <span class="  ml-3 text-lg  lg:text-xl xl:text-2xl font-semibold leading-5 text-white">
                  079 130 47 68
                </span>
                <svg
                  class="ml-2 w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="mt-6 max-w-xl mx-auto hero:mx-0">
                {features.map(feature => (
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-8 w-8 text-green-700">
                        <svg
                          class=" h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4 text-left">
                      <h3 class="text-base leading-6 font-medium text-gray-600">
                        {feature}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              {blok.button[0]?.link && (
                <div className="sm:flex sm:justify-center hero:justify-start text-center">
                  <div className="rounded-md shadow">
                    <Link
                      to={blok.button[0].link}
                      className="block w-full py-3 px-4 rounded-md shadow-lg bg-primarybg text-white font-bold focus:outline-none"
                    >
                      {blok.button[0].text}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden hero:block">
        <img
          className="h-56 w-full object-cover object-right sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={blok.image.filename}
          alt=""
        />
      </div>
    </div>
  )
}
