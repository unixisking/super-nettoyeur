import React, { useState } from "react"
import clsx from "clsx"
import { Link } from "gatsby"

import cleaningToolImage from "../images/cleaning-tool.png"
import Button from "./button"

export default function Navbar({ blok }) {
  const [dropdownIsShown, setDropdownIsShown] = useState(false)
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)
  const [subMenuIsShown, setSubMenuIsShown] = useState(false)

  const servicesDropdown = blok.Elements.find(
    ele => ele.component === "dropdown"
  )
  console.log("navbar", blok)
  return (
    <div className="relative">
      <div className="flex justify-between items-center px-4 sm:px-6 md:justify-start md:space-x-10">
        <Link to="/" className="flex items-center">
          <img
            className="h-8 w-auto sm:h-12 mt-4"
            src={blok.Logo}
            alt="Super Serrurier"
          />
          <h2 className="text-primarybg text-2xl font-bold ml-4 mt-2">
            Super Nettoyeur
          </h2>
        </Link>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            onClick={() => setMobileMenuIsShown(true)}
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav className="flex space-x-10 mx-auto">
            {blok.Elements.map(blok => {
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
          </nav>
          <div className="flex items-center md:ml-12">
            <Button to="/contact" text={blok.buttonText} variant="primary" />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden menu_content z-50",
          { hidden: !mobileMenuIsShown }
        )}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src={blok.Logo}
                  alt="Super serrurier"
                />
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => setMobileMenuIsShown(false)}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-6">
                <Link
                  to="/"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="ml-4 text-base font-medium text-gray-900">
                    Accueil
                  </div>
                </Link>
                <button
                  className="-m-3 p-3 flex items-center justify-center rounded-lg hover:bg-gray-50 focus:outline-none"
                  onClick={() => setSubMenuIsShown(!subMenuIsShown)}
                >
                  <div className="flex items-center w-full">
                    <div className="ml-4 text-base font-medium text-gray-900">
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
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="ml-4 text-base font-medium text-gray-900">
                    FAQ
                  </div>
                </Link>
                {/* <Link
                  to="/faq"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="ml-4 text-base font-medium text-gray-900">
                    Blog
                  </div>
                </Link> */}
              </nav>
            </div>
          </div>
          {/* <div className="py-6 px-5">
            <div className="mt-6">
              <a
                href="tel:0791304768"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondarycolor hover:bg-secondarycolor-light"
              >
                Appelez nous
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Client existant?
                <Link
                  to="/contact"
                  className="text-secondarycolor hover:text-secondarycolor-light"
                >
                  {" "}
                  Contact
                </Link>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
