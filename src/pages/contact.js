import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './contact.css'

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Modus Planning" />
      <div className="contact">
        <iframe
          title="get-in-touch"
          src="https://forms.monday.com/forms/embed/0bec93b8c27f233301aa8aa04c1f9b1a"
          width="100%"
          height="800px"
        >
        </iframe>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
