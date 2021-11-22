import { Link } from "gatsby"
import * as React from "react"

export default function SecondaryCta({ blok }) {
  return (
    <div className="py-32 bg-darkbg sm:py-12 my-12">
      <div className="relative">
        <div className="text-center sm:px-6 lg:max-w-full lg:px-0">
          <div className="relative px-6 py-3 overflow-hidden sm:px-12">
            <div className="relative">
              <div className="sm:text-center">
                <img
                  className="mx-auto w-16"
                  src={blok.image.filename}
                  alt={blok.image.alt}
                />
                <h1 className="mt-4 mx-auto max-w-2xl text-4xl font-bold text-white">
                  {blok.content}
                </h1>
                <p className="text-base text-white text-center max-w-2xl mx-auto mb-12">
                  {blok.text}
                </p>
                {blok.cta && (
                  <Link
                    to="/contact"
                    className="mx-auto py-3 px-8 rounded-md shadow-lg bg-primarybg text-white font-bold focus:outline-none mt-8"
                  >
                    Contactez-nous
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
