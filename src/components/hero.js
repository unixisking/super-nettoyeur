import * as React from "react"
import { Link } from "gatsby"

export default function Hero({ blok }) {
  console.log("blok", blok)
  return (
    <div className="relative mb-36">
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div>
                <div className="px-4 lg:text-left flex max-w-3xl">
                  <div className="lg:py-32 z-10">
                    <h1 className="mt-4 text-4xl tracking-tight font-medium text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl text-primarytext text-center lg:text-left">
                      {blok.title}
                    </h1>
                    {blok.description && (
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 text-center lg:text-left sm:text-xl lg:text-lg xl:text-xl">
                        {blok.description}
                      </p>
                    )}
                    {blok.button.length !== 0 && (
                      <div className="sm:flex justify-center lg:justify-start">
                        <div className="sm:mt-0">
                          <Link
                            to={blok.button[0].link}
                            className="block w-full py-3 px-4 rounded-md shadow-lg bg-primarybg text-white font-bold focus:outline-none"
                          >
                            {blok.button[0].text}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:left-0 lg:h-full lg:w-auto lg:mx-auto"
                      src={blok.image.filename}
                      alt={blok.image.alt}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>
      <img
        style={{ height: "80vh" }}
        src={blok.image.filename}
        className="hidden lg:block lg:absolute lg:left-0 lg:top-0 lg:w-full lg:h-screen"
      />
    </div>
  )
}
