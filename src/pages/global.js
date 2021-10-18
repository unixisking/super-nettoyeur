import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const GlobalPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Global" />
    </Layout>
  )
}

export default GlobalPage
