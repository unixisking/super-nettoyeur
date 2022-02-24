import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children, location }) => {
  return (
    <div style={{ background: "#F0F8ED" }}>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
