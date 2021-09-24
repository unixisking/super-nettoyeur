import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)
  const cta = story.content.body.find(blok => blok.component === "cta")
  // const components = story.content.body.map(blok => {
  //   return <DynamicComponent blok={blok} key={blok._uid} />
  // })
  return (
    <Layout>
      <Seo title="Home" />
      <h1>{story.content.title}</h1>
      <p>this is cool and static and not coming from storyblok</p>
      <DynamicComponent blok={cta} key={cta._uid} />
      {/* {components} */}
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
    }
  }
`
