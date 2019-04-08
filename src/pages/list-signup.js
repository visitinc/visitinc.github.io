import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="List Signup Success" keywords={[`studio`, `visit`, `app`]} />
    <div>
      <span
        role="img"
        aria-label="pigeon"
        style={{ fontSize: '3rem', paddingBottom: '2rem' }}
      >
        🕊️
      </span>
      <p></p>
      <h2>Thanks for your interest!</h2>
      <p>We'll let you know when we launch.</p>
      <h3><a href="/">Go home</a></h3>
      <p></p>
    </div>
  </Layout>
)

