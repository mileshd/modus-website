import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import demandScreenshot from '../../content/assets/demand-planning-screenshot.png'
import tradeScreenshot from '../../content/assets/trade-performance-screenshot.png'
import orderManagementScreenshot from '../../content/assets/customer-order-mgmt-screenshot.png'
import './modules.css'

const ModulesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus" />
      <div className="modules">
        <div className="intro">
          <div className="container">
            <h1>Modus Planning Works for Brands of Any Size</h1>
            <h2>
              Whether your brand is just starting out or well-established nationally, 
            </h2>
            <h2>
              Modus Planning's three unique tiers cater to your needs.
            </h2>
          </div>
        </div>
        <div className="demand">
          <div className="container">
            <h1>Demand Planning</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Employ seamless, granular, bottom-up planning.
                </h2>
                <p>
                  The prerequisite tier comprising everything your brand needs to forge a solid foundation for volume and promotional planning. Data can be viewed at a variety of levels throughout the supply chain, including inbound and outbound distribution centers, retailers and distributors. Modus provides data transformation and visualizations that simply would not be possible in a spreadsheet.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img src={demandScreenshot} alt="Demand Planning" />
              </div>
            </div>
          </div>
        </div>
        <div className="trade">
          <div className="container">
            <h1>Trade Promotion Management</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <img src={tradeScreenshot} alt="Trade Promotion Management" />
              </div>
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Maximizing and controlling trade spend is the key to outperforming the competition.
                </h2>
                <p>
                  The Trade Promotion Management module allows brands to have a firm grasp of their promotion plans and to maximize trade spend. Modus trade variables help protect retailer margins so both the brand and retailer benefit. Included is a scenario planner and optimizer which maximizes lift percentages across user-defined constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inventory">
          <div className="container">
            <h1>Customer Order Validation</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2>
                  Ensure success on shelf by proactively managing customer orders.
                </h2>
                <p>
                  Customer Order Validation gives your brand the tools to determine if customers are ordering appropriately. This ensures your brand is on-shelf with the right quantity. Optimize your shelf presence among the competition by mastering new item launches while avoiding costly stockouts and spoils.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <img src={orderManagementScreenshot} alt="Customer Order Validation" />
              </div>
            </div>
          </div>
        </div>
        <div className="outro">
          <div className="container">
            <h1>We Guide You Through Onboarding,</h1>
            <h1>Every Step of the Way</h1>
            <div className="outro__body">
              <h3>
                We understand that a growing brand has minimal time to work through onboarding new applications.
              </h3>
              <h3>
                We have lived it. We get it.
              </h3>
              <h3>
                Our industry experts provide the support and training you need to operate your brand with Modus Planning. Our goal is your success.
              </h3>
            </div>
            <a href="/schedule-a-demo" className="btn btn-primary get-in-touch-button">
              Schedule a Demo
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
