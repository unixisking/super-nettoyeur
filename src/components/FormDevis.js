import React, { useState } from "react"
import clsx from "clsx"

import { FaWhatsapp } from "react-icons/fa"
import { SERVICES, ZONES } from "../helpers"

export default function FormDevis() {
  const [isCompany, setIsCompany] = useState(false)
  return (
    <div className="relative mt-6 rounded-lg flex flex-col max-w-7xl sm:mt-8 bg-secondarybg">
      <a
        href=""
        className="text-base font-medium px-5 py-2 rounded-md shadow-lg text-white bg-primarybg mx-auto flex items-center"
      >
        <FaWhatsapp className="text-2xl text-white mr-2" />
        Devis Whatsapp
      </a>
      <span className="border-b-1 bg-primarytext border-primarytext w-12" />
      {/* <i
        id="round-dvidier"
        className="bg-gray-900 h-2 w-2 rounded-full mx-auto mt-12"
      /> */}
      <span className="border-b-1 border-primarytext w-12" />
      <div className="py-10 px-6 sm:px-10 xl:py-12 xl:px-48">
        <form
          action="#"
          method="POST"
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primarybg focus:border-primarybg border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900"
              >
                Téléphone
              </label>
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 border-gray-300 focus:ring-primarybg focus:border-primarybg rounded-md"
                aria-describedby="phone-optional"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Type de service
            </label>
            <select
              id="location"
              name="location"
              className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primarybg focus:border-primarybg sm:text-sm rounded-md"
              defaultValue="-"
            >
              <option
                value="-"
                placeholder="Choisir une prestation"
                selected
                disabled
                hidden
              >
                -
              </option>
              {SERVICES.map(service => (
                <option>{service}</option>
              ))}
            </select>
          </div>
          <div className="">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                Message
              </label>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm text-gray-900 border-gray-300 focus:ring-primarybg focus:border-primarybg border rounded-md"
                aria-describedby="message-max"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-primarybg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primarybg sm:w-auto"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
