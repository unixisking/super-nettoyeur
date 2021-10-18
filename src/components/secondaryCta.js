import * as React from "react"

export default function SecondaryCta({ blok }) {
  return (
    <div className="py-16 bg-darkbg sm:py-12 my-12">
      <div className="relative">
        <div className="text-center sm:px-6 lg:max-w-full lg:px-0">
          <div className="relative px-6 py-10 overflow-hidden sm:px-12">
            <div className="relative">
              <div className="sm:text-center">
                <img
                  className="mx-auto w-16"
                  src={blok.image.filename}
                  alt={blok.image.alt}
                />
                <p className="mt-8 mx-auto max-w-2xl text-4xl font-bold text-white">
                  {blok.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
