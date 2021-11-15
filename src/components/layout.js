import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

import DynamicComponent from "./dynamicComponent"

import "./layout.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      storyblokEntry(path: { eq: "global" }) {
        uuid
        content
      }
    }
  `)
  let story = JSON.parse(data.storyblokEntry.content)
  // story = useStoryblok(story, location)
  const footer = story.body.find(blok => blok.component === "footer")
  return (
    <div style={{ background: "#F0F8ED" }}>
      <main>{children}</main>
      <DynamicComponent blok={footer} key={footer._uid} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
