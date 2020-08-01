import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './value-proposition.css'

const ValuePropositionPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Value Proposition" />
      <div className="maturity-model">
        <div className="container">
          <h1>Value Proposition</h1>
          <p>
          </p>

        </div>
      </div>
    </Layout>
  )
}

export default ValuePropositionPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
