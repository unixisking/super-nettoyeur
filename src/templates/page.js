import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"
import Popup from "../components/Popup"

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
      {/* <FaWhatsappSquare
        id="helloworld"
        className="text-white fixed bottom-8 text-green-500 w-12 h-12 z-200 right-12"
      /> */}
    </Layout>
  )
}

export default Page
