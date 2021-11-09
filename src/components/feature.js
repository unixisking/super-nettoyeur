import React from "react"

export default function Feature({ blok }) {
  return (
    <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg m-4 h-48">
      <div id="header" className="flex items-center">
        <img
          height="100"
          width="75"
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
