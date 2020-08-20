import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './schedule-a-demo.css'

const ScheduleADemo = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Schedule a Demo" />
      <div className="schedule-a-demo">
        <iframe
          title="schedule-a-demo"
          src="https://forms.monday.com/forms/embed/dac70f537c7f0a25c0cf79dd8a3b4031"
          width="100%"
          height="800px"
        >
        </iframe>
      </div>
    </Layout>
  )
}

export default ScheduleADemo

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
