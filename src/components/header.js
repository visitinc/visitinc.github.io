import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../fonts/fonts.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 0.3rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0, fontFamily: "Nokia Cellphone FC" }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2>is a protocol for practice.</h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
