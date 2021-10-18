import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const Page = ({ pageContext, location }) => {
  let story = pageContext.story
  story = useStoryblok(story, location)

  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })

  return (
    <Layout>
      <Seo title="Home" />
      <h1>{story.content.title}</h1>
      {components}
    </Layout>
  )
}

export default Page
