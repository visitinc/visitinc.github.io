import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`studio`, `visit`, `app`]} />
    <div
      dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
    />
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: { eq: "index.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
