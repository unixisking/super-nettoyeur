import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
  // const cta = story.content.body.find(blok => blok.component === "cta")
  console.log("story", story)
  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })
  return (
    <Layout location={location}>
      <Seo title="Home" />
      {components}
    </Layout>
  )
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
