import React, { useState } from "react"
import { Link } from "gatsby"

const features = [
  "Des prix très justes et une qualité de service exceptionnelle.",
  "Devis gratuit et sur place par WhatsApp pour les particuliers ou sur rendez-vous pour les professionnels.",
  "Service d'entretien et conciergerie sur-mesure pour tout type d'espace : entretien des locaux, ménage pour entreprise et bien d'autres encore.",
  "Une disponibilité 24h/24 et 7j/7, et ce durant toute l'année.",
  "Efficacité et rapidité des interventions dans l'ensemble de la Suisse romande.",
]

export default function MainHero({ blok }) {
  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="px-4 lg:col-span-6 sm:text-center md:max-w-2xl lg:text-left lg:flex lg:items-center">
        <main className="mt-10 max-w-7xl px-4 sm:mt-12 md:mt-24">
          <div className="text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-primarybg xl:inline">
                {blok.title}
              </span>
            </h1>
            <a
              id="call-button"
              href="tel:0791304768"
              class="mt-4 inline-flex items-center text-secondarycolor bg-darkbg rounded-full p-2 sm:mt-5 sm:text-base lg:mt-6 lg:text-sm xl:text-base hover:text-secondarycolor-light"
            >
              <span class="px-3 py-2 text-white text-lg  lg:text-xl xl:text-2xl  leading-5  tracking-wide bg-primarybg rounded-full">
                Appelez-nous
              </span>
              <span class="  ml-3 text-lg  lg:text-xl xl:text-2xl font-semibold leading-5 text-white">
                079 130 47 68
              </span>
              <svg
                class="ml-2 w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="mt-6 max-w-xl mx-auto hero:mx-0">
              {features.map(feature => (
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-8 w-8 text-green-700">
                      <svg
                        class=" h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 text-left">
                    <h3 class="text-base leading-6 font-medium text-gray-600">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            {blok.button[0]?.link && (
              <div className="sm:flex sm:justify-center hero:justify-start text-center">
                <div className="rounded-md shadow">
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
        </main>
      </div>
      <img
        className="hidden lg:block w-full object-cover object-right lg:h-2/3 xl:h-full rounded-md mx-auto lg:col-span-6 lg:mx-auto"
        src={blok.image.filename}
        alt=""
      />
    </div>
  )
}
