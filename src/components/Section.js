import React from "react"
import { CheckIcon } from "@heroicons/react/outline"
import DynamicComponent from "./dynamicComponent"
import clsx from "clsx"

export default function Section({ blok }) {
  return (
    <div
      id={blok.slug}
      style={{ background: "rgb(240, 248, 237)", zIndex: 100 }}
      className="overflow-hidden my-12"
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid-flow-row-dense mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mx-auto">
          <div
            className={clsx([
              "relative",
              blok.image_position === "left" ? "col-start-2" : "col-start-1",
            ])}
          >
            <h3 className="text-2xl font-medium text-darkbg tracking-tight sm:text-3xl">
              {blok.title}
            </h3>
            {blok.paragraph && (
              <p
                className="mt-3 text-lg text-darkbg"
                dangerouslySetInnerHTML={{ __html: blok.paragraph }}
              />
            )}

            {blok.perks.length !== 0 && (
              <dl className="space-y-2">
                {blok.perks.map(component => (
                  <DynamicComponent key={component._uid} blok={component} />
                ))}
              </dl>
            )}
          </div>

          <div
            className={clsx([
              "mt-10 mx-auto relative lg:mt-0",
              blok.image_position === "left" ? "col-start-1" : "col-start-2",
            ])}
            aria-hidden="true"
          >
            <img
              className="relative mx-auto lg:m-0"
              width="500"
              height="500"
              src={blok.image.filename}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const Perk = ({ blok }) => (
  <div key={blok.id} className="relative flex items-center">
    <CheckIcon className="absolute h-6 w-6 text-green-500 -mt-6" />
    <p className="ml-8 text-md leading-6 font-medium text-darkbg">
      {blok.text}
    </p>
  </div>
)

export const Perks = ({ blok }) => (
  <dl>
    {blok.title && <h2 className="text-xl text-darkbg">{blok.title}</h2>}
    {blok.perks.map(component => (
      <DynamicComponent key={component._uid} blok={component} />
    ))}
  </dl>
)
