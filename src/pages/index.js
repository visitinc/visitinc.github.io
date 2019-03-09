import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ fontFamily: 'sans-serif' }}>
    <p>We see online participation as a mode of cultural activity.  We think social media can be something other than the consumption of leisure time, or the manipulation of of ones friends and networks. In other words: we abhor dating apps.</p>
    <p>We treat software development methodologies as ethical methodologies. We're working to create platforms that motivate content sharing as a form of conflict spatialization, witness sharing, and research into the political.</p>
  </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Link>who we are</Link><br />
    <Link>what we're doing</Link><br />
    <Link>why it matters</Link>
    </div>
  </Layout>
)

export default IndexPage
