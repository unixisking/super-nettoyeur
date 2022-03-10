import React from "react"

export default function Prestations({
  blok: { title, description, prestation },
}) {
  return (
    <div style={{ background: "rgb(240, 248, 237)" }} id="prestations">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primarycolor">{title}</h2>
          <p className="my-4 text-lg text-gray-600">{description}</p>
        </div>
        <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {prestation.map(x => (
            <Prestation title={x.title} description={x.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const Prestation = ({ title, description }) => (
  <div className="flex">
    <svg
      className="flex-shrink-0 h-6 w-6 text-green-500"
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
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
    <div className="ml-3">
      <h4 className="text-lg leading-6 font-medium text-gray-900">{title}</h4>
      <p className="mt-2 text-base text-gray-600">{description}</p>
    </div>
  </div>
)
