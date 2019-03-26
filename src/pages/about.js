import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO title="About Us" keywords={[`studio`, `visit`, `app`]} />
    <div
      dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
    />
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: { eq: "about.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
