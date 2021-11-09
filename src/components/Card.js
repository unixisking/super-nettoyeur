import React from "react"

export default function Card({ blok }) {
  return (
    <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg h-56">
      <div id="header" className="flex items-center">
        <img
          height="100"
          width="100"
          className="h-12 border-2 border-gray-300 mx-auto"
          src={blok.image.filename}
        />
      </div>
      <div>
        <h3 className="text-center text-3xl text-darkbg font-bold">
          {blok.stat}
        </h3>
        <p className="text-darkbg text-center font-medium">
          {blok.description}
        </p>
      </div>
    </div>
  )
}
