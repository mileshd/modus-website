import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './maturity-model.css'

const MaturityModelPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Maturity Model" />
      <div className="maturity-model">
        <div className="container">
          <h1>Growth Brand Planning & Execution Maturity Model</h1>
          <p>
            This maturity model represents the stages that growing brands have been observed to undergo as they build out and expand their planning and executional processes. 
          </p>

          <h2>Level 1: Just Starting Out</h2>
          <h2>Level 2: Building the Business</h2>
          <h2>Level 3: Modus Current State</h2>
        </div>
      </div>
    </Layout>
  )
}

export default MaturityModelPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
