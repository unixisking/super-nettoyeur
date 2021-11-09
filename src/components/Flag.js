import React from "react"

export default function Flag({ blok }) {
  console.log("flag", blok)
  return (
    <div className="max-w-sm p-6 tracking-wide  m-4 h-48 flex-col justify-center">
      <h3 className="font-medium text-center text-2xl text-primarytext">
        {blok.title}
      </h3>
      <img
        loading="lazy"
        className="h-48 border-2 border-gray-300 mx-auto mt-8"
        src={blok.image.filename}
      />
    </div>
  )
}
