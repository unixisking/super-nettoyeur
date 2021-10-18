import React from "react"
import { ChevronRightIcon } from "@heroicons/react/outline"

export default function Service({ blok }) {
  return (
    <div className="w-80 mx-auto">
      <div>
        <img
          className="rounded-lg"
          src={blok.image.filename}
          alt={blok.image.alt}
        />
        <div className="relative text-left w-full flex justify-between text-primarytext">
          <h2 className="text-2xl">{blok.title}</h2>
          <span className="h-7" style={{ marginTop: "6px" }}>
            <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
        <div className="">
          <p className="text-base text-primarytext-500">{blok.content}</p>
        </div>
      </div>
    </div>
  )
}
