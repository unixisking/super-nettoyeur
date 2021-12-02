import React from "react"
import clsx from "clsx"

export default function Feature({ blok }) {
  return (
    <div
      className={clsx(
        "max-w-sm bg-white border-2 border-gray-300 rounded-md tracking-wide shadow-lg p-6 mx-auto",
        { "lg:col-span-3": blok.center }
      )}
    >
      <div id="header" className="flex items-center">
        <img
          className="h-12 border-2 border-gray-300 mx-auto"
          src={blok.image.filename}
        />
      </div>
      <div>
        <p className="text-primarytext font-medium">{blok.paragraph}</p>
      </div>
    </div>
  )
}
