import React from "react"
import Popup from "./src/components/Popup"

import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import "@fontsource/open-sans/500.css" // Defaults to weight 400 with all styles included.
import "@fontsource/open-sans/800.css" // Defaults to weight 400 with all styles included.
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <React.Fragment>
    {element}
    <Popup />
  </React.Fragment>
)
