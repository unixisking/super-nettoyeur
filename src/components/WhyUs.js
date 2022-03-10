import React from "react"
import { CheckIcon } from "@heroicons/react/outline"

export default function WhyUs({ blok }) {
  return (
    <div style={{ background: "rgb(240, 248, 237)" }} className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          {blok.title && (
            <h2 className="mt-2 text-3xl font-medium text-gray-900">
              {blok.title}
            </h2>
          )}
          {blok.description && (
            <p className="mt-4 text-lg text-gray-500">{blok.description}</p>
          )}
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {blok.points.map(point => (
              <div key={point.title} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {point.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {point.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
