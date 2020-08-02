import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import demandScreenshot from '../../content/assets/demand-planning-screenshot.png'
import tradeScreenshot from '../../content/assets/trade-performance-screenshot.png'
import orderMgmtScreenshot from '../../content/assets/customer-order-mgmt-screenshot.png'
import './modules.css'

const ModulesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Modules" />
      <div className="modules">
        <div className="intro">
          <div className="container">
            <h1>Modus Planning Works for Brands of Any Size</h1>
          </div>
        </div>
        <div className="demand">
          <div className="container">
            <h1>Demand Planning</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Modus is seamless, granular, bottom-up planning.
                </h2>
                <p>
                  The prerequisite tier comprising everything your brand needs to forge a solid foundation for volume and promotional planning. Data can be viewed at a variety of levels throughout the supply chain, including inbound and outbound distribution centers, retailers and distributors. Modus provides data transformation and visualizations that simply would not be possible in a spreadsheet.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="demand-screenshot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="trade">
          <div className="container">
            <h1>Trade Promotion Management</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="trade-screenshot"></div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Maximizing and controlling trade spend is the key to outperforming the competition.
                </h2>
                <p>
                  The Modus Planning Trade Promotion Management module allows brands to have a firm grasp of their promotion plans and to maximize trade spend. Modus trade variables help protect retailer margins so both the brand and retailer benefit. Included is a scenario planner and optimizer which maximizes lift percentages across user-defined constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inventory">
          <div className="container">
            <h1>Order Validation</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Ensure success on shelf by proactively managing customer orders.
                </h2>
                <p>
                  Modus Order Validation gives your brand the tools to determine if customers are ordering appropriately. This ensures your brand is on-shelf with the right quantity. Optimize your shelf presence among the competition by avoiding costly stockouts and spoils and hit shelf resets with excellence.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="inventory-screenshot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="outro">
          <div className="container">
            <h1>We Guide You Through Onboarding, Every Step of the Way</h1>
            <div className="outro__body">
              <h3>
                We understand that a growing brand has minimal time to work through onboarding new applications.
              </h3>
              <h3>
                We have lived it. We get it.
              </h3>
              <h3>
                Our industry experts provide the support and training you need to operate your brand with Modus Planning.
              </h3>
              <h3>
                Our goal is your success.
              </h3>
            </div>
            <a href="/contact" className="btn btn-primary get-in-touch-button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ModulesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tradeModuleScreenshot: file(absolutePath: {
      regex: "/trade-module-screenshot.png/"
    }) {
      childImageSharp {
        fixed(width: 400, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
//We understand that a growing brand has minimal time to work through a software implementation. We have lived it, we get it.

            //<div className="outro__body">
              //<h3>
                //Software implementations can be intense, but our team will make it as painless as possible.
              //</h3>
              //<h3>
                //Our industry experts provide the ongoing support and training you need to begin operating with Modus Planning.
              //</h3>
              //<h3>
                //We then provide regular check-ins to inform you of system enhancements to ensure you are using the platform to its full potential.
              //</h3>
            //</div>
