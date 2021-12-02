import React from "react"
import clsx from "clsx"

import DynamicComponent from "./dynamicComponent"

export default function Grid({ blok }) {
  return (
    <div className="relative mx-auto max-w-5xl my-24">
      <div
        className={clsx([
          "space-y-28 md:space-y-0 md:grid md:gap-x-8 md:gap-y-24 pb-16 mx-8",
          "md:grid-cols-" + blok.number_of_cols,
        ])}
      >
        {blok.columns.map(blok => (
          <DynamicComponent key={blok._uid} blok={blok} />
        ))}
      </div>
    </div>
  )
}
