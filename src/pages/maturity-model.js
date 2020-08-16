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

          <h2>Level 1: Launch</h2>
          <h3>Systems:</h3>
          <p>Spreadsheets.</p>
          <p>Trade spend, promotions, and operational volume are all planned separately.</p>

          <h3>Demand Planning:</h3>
          <p>
            Planning horizon is roughly six months.
          </p>
          <p>
            New distribution is marginally planned for.
          </p>
          <p>
            Customer orders are not analyzed vs. forecast.
          </p>
          <p>
            Customer behaviors and distribution timing are not considered in the forecast.
          </p>
 
          <h3>Supply Planning:</h3>
          <p>
            Production orders are planned from a separate spreadsheet.
          </p>
          <p>
            Non-finished goods vendors are informed of the latest demand plan.
          </p>
          <p>
            No long-term capacity planning.
          </p>

          <h3>Promotion Calendar:</h3>
          <p>
            Promotion planning is not systematic and is planned on a one-off basis.
          </p>
          <p>
            No volume projections by promotion and limited follow through to ensure promotion is executed.
          </p>
          <p>
            Trade spend by promotion is not tracked.
          </p>
          <p>
            No post promotional analysis.
          </p>

          <h3>Trade Management:</h3>
          <p>
            Trade rates by retailer are not persistently tracked or budgeted for. 
          </p>
          <p>
            Retailer margins are largely ignored.
          </p>

          <h3>Trade Deductions:</h3>
          <p>
            Retailer or distributor deductions are not validated vs. forecasted spend.
          </p>

          <h3>Baseline Management:</h3>
          <p>
            Volumes are not regularly reviewed or maintained at the SKU level.
          </p>

          <h3>Cross-Functional Process:</h3>
          <p>
            No regularly scheduled S&OP review pulling together the cross functional team.
          </p>

          <h3>Management:</h3>
          <p>
            Management team has many unknown unknowns regarding the planning process.
          </p>

          <h2>Level 2: Early Stage Growth</h2>
          <h3>Systems:</h3>
          <p>
            Collaborative spreadsheets or spreadsheet-like tools either live in the cloud or in a shared location.
          </p>

          <h3>Demand Planning:</h3>
          <p>
            Planning horizon of a year to 18 months.
          </p>
          <p>
            New distribution is planned for at the product group level, but SKU mix and other details are not. 
          </p>
          <p>
            Customer orders are analyzed vs. the forecast in aggregate. 
          </p>
          <p>
            Consumption to delivery forecast is slowly developed as promotion volume offsets are implemented.
          </p>
 
          <h3>Supply Planning:</h3>
          <p>
            Long term capacity plans are created from the longer planning horizon, which are provided to non-finished goods suppliers and production teams. 
          </p>
          <p>
            Production plans are maintained on a collaborative spreadsheet.
          </p>

          <h3>Promotion Calendar:</h3>
          <p>
            Promotion planning is centralized across departments. 
          </p>
          <p>
            Volume projections by promotion are instituted.
          </p>
          <p>
            Customer service identifies if orders conform to expected volume.
          </p>
          <p>
            Trade spend by promotion is typically tracked, but retailer margin is still largely ignored.
          </p>
          <p>
            Top-line post promotional analysis is tracked comparing quantities scanned vs. expected consumption.
          </p>

          <h3>Trade Management:</h3>
          <p>
            Trade rates by retailer are persistently tracked vs. a budget.
          </p>
          <p>
            All types of promotions, including advertisements, temporary price reductions and coupons are tracked. 
          </p>
          <p>
            Retailer margins are projected.
          </p>

          <h3>Trade Deductions:</h3>
          <p>
            Typically, deductions are validated.
          </p>
          <p>
            Actual vs. forecasted spend is still often overlooked.
          </p>

          <h3>Baseline Management:</h3>
          <p>
            Baseline volumes are reviewed at regular intervals and maintained at the SKU level.
          </p>
          <p>
            Realized baselines inform the forecast going forward.
          </p>

          <h3>Cross-Functional Process:</h3>
          <p>
            Regularly scheduled S&OP review in which general variables are covered. 
          </p>

          <h3>Management:</h3>
          <p>
            Management team is beginning to track variables that they previously ignored.
          </p>

          <h2>Level 3: Late Stage Growth - Current Modus State</h2>
          <h3>Systems:</h3>
          <p>
            Centralized, integrated, structured, and collaborative platform purpose built for bottoms-up planning employed. (Modus Planning) 
          </p>

          <h3>Demand Planning:</h3>
          <p>
            Planning horizon is theoretically unlimited, however typically analyzed a year to two years in advance. 
          </p>
          <p>
            New distribution is planned for by SKU, store count, and distribution timing. 
          </p>
          <p>
            Customer orders are analyzed vs. forecast by line item. 
          </p>
          <p>
            Consumption to delivery forecast is refined as promotion volume offsets are implemented at the distribution center level.
          </p>
 
          <h3>Supply Planning:</h3>
          <p>
            Long term capacity planning is accomplished with production planning.
          </p>
          <p>
            Production planning is reviewed weekly, which lowers inventory holding costs.
          </p>

          <h3>Promotion Calendar:</h3>
          <p>
            Real-time, centralized promotion planning.
          </p>
          <p>
            Volume projections by promotion by retailer are reviewed. 
          </p>
          <p>
            Customer service identifies if orders conform to expected volume on the SKU level by reviewing expected customer days on hand. 
          </p>
          <p>
            Trade spend and retailer margin by promotion is tracked. 
          </p>
          <p>
            Top-line post promotional analysis is completed by comparing quantities scanned vs. expected consumption.
          </p>

          <h3>Trade Management:</h3>
          <p>
            Trade rates by retailer are persistently tracked vs. a budget. 
          </p>
          <p>
            All types of promotions including advertisements, temporary price reductions and coupons are tracked.
          </p>

          <h3>Trade Deductions:</h3>
          <p>
            Deductions are validated from actual scan data.
          </p>

          <h3>Baseline Management:</h3>
          <p>
            Baseline volumes are reviewed regularly and maintained at the SKU/DC level. 
          </p>
          <p>
            Baseline development is persistently tracked and actualized.
          </p>

          <h3>Cross-Functional Process:</h3>
          <p>
            All cross-functional members contribute to the forecast continuously to ensure accuracy. 
          </p>
          <p>
            Regularly scheduled S&OP reviews cover exceptions and trends.
          </p>

          <h3>Management:</h3>
          <p>
            Management team is better equipped to identify and address variables regarding go-to-market execution activity.  
          </p>
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
