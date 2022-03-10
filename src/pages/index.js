import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })
  const SEO = story.content.body.filter(blok => blok.component === "SEO")[0]
  console.log("index seo", SEO)

  return <Layout location={location}>{components}</Layout>
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(name: { eq: "Home" }) {
      name
      uuid
      content
    }
  }
`
