import React from "react"
// import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

export default function Contact({ blok }) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div
          style={{ background: "#F0F8ED" }}
          className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
        >
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-darkbg sm:text-3xl">
              {blok.title}
            </h2>
            {blok.paragraph && (
              <p className="mt-3 text-lg leading-6 text-darkbg">
                {blok.paragraph}
              </p>
            )}
            <div className="text-gray-300 text-base flex flex-col">
              <div className="flex">
                <FaMapMarkerAlt className="text-2xl text-primarybg" />
                <p className="text-darkbg text-md ml-4">{blok.address}</p>
              </div>
              <div className="flex">
                <FaPhoneAlt className="text-2xl text-primarybg" />
                <p className="text-darkbg text-md ml-4">{blok.phone}</p>
              </div>
              <div className="flex">
                <GrMail className="text-2xl text-primarybg" />
                <p className="text-darkbg text-md ml-4">{blok.email}</p>
              </div>
              <div className="flex">
                <FaClock className="text-2xl text-primarybg" />
                <p className="text-darkbg text-md ml-4">{blok.timeline}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primarybg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primarybg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
