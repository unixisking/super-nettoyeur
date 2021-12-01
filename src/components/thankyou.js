import { Link } from "gatsby"
import React from "react"

export default function ThankYou({ blok }) {
  return (
    <div class="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-darkbg sm:text-4xl">
        <span class="block">{blok.title}</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-darkbg">{blok.description}</p>
      <div className="px-5 py-3 text-center font-medium">
        <Link
          to="/a-propos"
          className="mx-auto py-3 px-4 rounded-md shadow-lg bg-primarybg text-white font-bold focus:outline-none"
        >
          En savoir plus sur Super Nettoyeur
        </Link>
      </div>
    </div>
  )
}
