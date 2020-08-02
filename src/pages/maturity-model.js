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
          <h3>Systems:</h3>
          <p>Separate spreadsheets, trade spend, promotions, and operational volume all planned separately.</p>

          <h3>Demand Planning:</h3>
          <p>
            Planning horizon does not exceed 6 months. New distribution is marginally planned for. Customer orders are not analyzed vs. forecast. Customer behaviors and timings are not considered in the forecast.
          </p>
 
          <h3>Supply Planning:</h3>
          <p>
            Production orders are planned from a separate spreadsheet. Non-finished goods vendors get a version of the latest demand planning spreadsheet. No long-term capacity planning is done.  
          </p>

          <h3>Promotion Calendar:</h3>
          <p>
            Promotion planning is ad hoc. No volume projections by promotion, no follow through to ensure promotion is executed. Trade spend by promotion is not tracked. No post promotional analysis is done.
          </p>

          <h3>Trade Management:</h3>
          <p>
            Trade rates by retailer are not persistently tracked or budgeted. Retailer margins are not projected. 
          </p>

          <h3>Trade Deductions:</h3>
          <p>
            Deductions are not validated vs. Forecasted spend
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

          <h2>Level 2: Building the Business</h2>
          <h3>Systems:</h3>
          <p>
            Collaborative spreadsheets or spreadsheet-like tools either live in the cloud or in a shared location.
          </p>

          <h3>Demand Planning:</h3>
          <p>
            Planning horizon of a year to 18mos. New distribution is planned for at the product group level, but SKU mix and other details are not. Customer orders are analyzed vs. Forecast in aggregate. Consumption to delivery Forecast takes shape as promotion volume offsets are implemented.
          </p>
 
          <h3>Supply Planning:</h3>
          <p>
            Long term capacity plans are created from the longer planning horizon, which are fed to non-finished goods suppliers and production. Production plans are maintained on a collaborative spreadsheet.
          </p>

          <h3>Promotion Calendar:</h3>
          <p>
            Promotion planning is centralized. Volume projections by promotion exist. Customer service identifies if orders placed conform to expected volume. Trade spend by promotion is tracked, but not retailer margin. Top-line post promotional analysis is done comparing quantities scanned vs. Expected consumption. 
          </p>

          <h3>Trade Management:</h3>
          <p>
            Trade rates by retailer are persistently tracked vs. a budget. All types of promotions including ads, TPRs, and coupons are tracked. Retailer margins are projected. 
          </p>

          <h3>Trade Deductions:</h3>
          <p>
            Deductions are validated as expected or not, but not detailed vs. Forecasted spend.
          </p>

          <h3>Baseline Management:</h3>
          <p>
            Baseline volumes are reviewed at regular intervals and maintained at the SKU level. Baseline development is overwritten when actualized. 
          </p>

          <h3>Cross-Functional Process:</h3>
          <p>
            Regularly scheduled S&OP review in which general variables are covered. 
          </p>

          <h3>Management:</h3>
          <p>
            Management team knows the unknowns they have regarding planning
          </p>

          <h2>Level 3: Modus Current State</h2>
          <h3>Systems:</h3>
          <p>
            Centralized, integrated, structured, and collaborative platform purpose built for bottoms-up planning employed. (Modus Planning) 
          </p>

          <h3>Demand Planning:</h3>
          <p>
            Planning horizon unlimited in potential scope. New distribution is planned for by SKU, store count, and timing. Customer orders are analyzed vs. forecast by line item. Consumption to delivery forecast is refined as promotion volume offsets are implemented at the DC level.
          </p>
 
          <h3>Supply Planning:</h3>
          <p>
            Long term capacity planning is accomplished with production planning done on the weekly level is enabled, lowering inventory holding costs. 
          </p>

          <h3>Promotion Calendar:</h3>
          <p>
            Promotion planning is centralized and real-time on one system. Volume projections by promotion by retailer. Customer service identifies if orders placed conform to expected volume on the SKU level - looking at expected customer days on hand. Trade spend and retailer margin by promotion is tracked. Top-line post promotional analysis is done comparing quantities scanned vs. expected consumption. 
          </p>

          <h3>Trade Management:</h3>
          <p>
            Trade rates by retailer are persistently tracked vs. a budget. All types of promotions including ads, TPRs, and coupons are tracked. 
          </p>

          <h3>Trade Deductions:</h3>
          <p>
            Deductions are validated at the dollar amount vs. spend calculated from actual scan data.
          </p>

          <h3>Baseline Management:</h3>
          <p>
            Baseline volumes are reviewed at regular intervals and maintained at the SKU/DC level. Baseline development is persistently tracked and actualized.
          </p>

          <h3>Cross-Functional Process:</h3>
          <p>
            All cross-functional members are refining their part in the forecast continuously as learned. Regularly scheduled S&OP reviews cover exceptions and trends. 
          </p>

          <h3>Management:</h3>
          <p>
            Management team has an action plan to address gaps knows the unknowns they have regarding planning.
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
