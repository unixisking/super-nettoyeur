import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"
import { Helmet } from "react-helmet"

const Page = ({ pageContext, location }) => {
  let story = pageContext.story
  story = useStoryblok(story, location)

  const components = story.content.body.map(blok => {
    return <DynamicComponent blok={blok} key={blok._uid} />
  })
  const SEO = story.content.body.filter(blok => blok.component === "SEO")[0]
  return (
    <Layout>
      <Seo title={SEO.title} description={SEO.description} />
      {components}
    </Layout>
  )
}

export default Page
