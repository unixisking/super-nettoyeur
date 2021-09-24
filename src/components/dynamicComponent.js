import SbEditable from "storyblok-react"
import Teaser from "./Teaser"
import React from "react"
import Cta from "./Cta"

const Components = {
  teaser: Teaser,
  cta: Cta,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    )
  }
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
