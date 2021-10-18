import clsx from "clsx"
import React from "react"

import { fontWeights, sizes } from "../helpers"

export default function Heading({ blok }) {
  return (
    <h2
      className={clsx([
        "text-primarytext text-center m-12",
        blok.size ? sizes[blok.size] : "text-4xl",
        blok.font_weight ? fontWeights[blok.font_weight] : "font-bold",
      ])}
      dangerouslySetInnerHTML={{ __html: blok.text }}
    />
  )
}
