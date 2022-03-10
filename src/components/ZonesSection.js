import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function ZonesSection({ blok: { text, title } }) {
  return (
    <div style={{ background: "rgb(240, 248, 237)" }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-primarycolor sm:text-4xl">
              {title}
            </h3>
            <p
              className="mt-3 max-w-3xl text-lg text-gray-600"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="hidden sm:block">
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="tel:0791304768"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondarycolor hover:bg-secondarycolor-light lg:hidden"
                  >
                    Appelez-nous
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 lg:ml-0">
                  <a
                    href="/contact"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-sm border-primarybg bg-primarybg"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex lg:justify-center py-8 lg:px-8">
              <Link
                to="/valais"
                className="zone-area duration-150 flex items-center text-gray-600 hover:text-primarycolor"
              >
                <StaticImage
                  src="../images/villes/Valais.png"
                  className="w-20"
                  alt="Valais"
                />
                <h4 className="text-1xl font-extrabold ml-2">Valais</h4>
              </Link>
            </div>
            <div className="col-span-1 flex lg:justify-center py-8 lg:px-8">
              <Link
                to="/serrurier-geneve"
                className="zone-area duration-150 flex items-center lg:ml-8 text-gray-600 hover:text-primarycolor"
              >
                <StaticImage
                  className="w-20"
                  src="../images/villes/Geneve.png"
                  alt="Genève"
                />
                <h4 className="text-1xl font-extrabold ml-2">Genève</h4>
              </Link>
            </div>
            <div className="col-span-1 flex lg:justify-center py-8 lg:px-8">
              <Link
                to="/neuchatel"
                className="zone-area duration-150 flex items-center lg:ml-8 text-gray-600 hover:text-primarycolor"
              >
                <StaticImage
                  className="w-20"
                  src="../images/villes/neuchatel.png"
                  alt="Neuchatel"
                />
                <h4 className="text-1xl font-extrabold ml-2">Neuchatel</h4>
              </Link>
            </div>
            <div className="col-span-1 flex lg:justify-center py-8 lg:px-8 lg:ml-4 text-gray-600 hover:text-primarycolor">
              <Link
                to="/vaud"
                className="zone-area duration-150 flex items-center"
              >
                <StaticImage
                  className="w-20"
                  src="../images/villes/Vaud.png"
                  alt="Vaud"
                />
                <h4 className="text-1xl font-extrabold ml-2">Vaud</h4>
              </Link>
            </div>
            <div className="col-span-1 flex lg:justify-center py-8 lg:px-14 text-gray-600 hover:text-primarycolor">
              <Link
                to="/fribourg"
                className="zone-area duration-150 flex justify-between items-center"
              >
                <StaticImage
                  className="w-20"
                  src="../images/villes/Fribourg.png"
                  alt="Fribourg"
                />
                <h4 className="text-1xl font-extrabold ml-2">Fribourg</h4>
              </Link>
            </div>
          </div>

          <div className="block sm:hidden">
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="tel:0791304768"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primarybg lg:hidden"
                >
                  Appelez-nous
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 lg:ml-0">
                <a
                  href="/contact"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primarybg shadow-sm bg-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
