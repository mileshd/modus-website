import React from "react"
import { graphql } from "gatsby"

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
          <div className="maturity-model__header clearfix">
            <div className="pull-left">
              <h1>Growth Brand Planning & Execution Maturity Model</h1>
            </div>
            <div className="pull-right">
              <a className="btn btn-default" href="/resources">
                Back
              </a>
            </div>
          </div>
          <p>
            This maturity model represents the stages that growing brands have been observed to undergo as they build out and expand their planning and executional processes. 
          </p>

          <h2>Level 1: Launch</h2>
          <h3>Systems:</h3>
          <ul>
            <li>Spreadsheets.</li>
            <li>Trade spend, promotions, and operational volume are all planned separately.</li>
          </ul>

          <h3>Demand Planning:</h3>
          <ul>
            <li>
              Planning horizon is roughly six months.
            </li>
            <li>
              New distribution is marginally planned for.
            </li>
            <li>
              Customer orders are not analyzed vs. forecast.
            </li>
            <li>
              Customer behaviors and distribution timing are not considered in the forecast.
            </li>
          </ul>
 
          <h3>Supply Planning:</h3>
          <ul>
            <li>
              Production orders are planned from a separate spreadsheet.
            </li>
            <li>
              Non-finished goods vendors are informed of the latest demand plan.
            </li>
            <li>
              No long-term capacity planning.
            </li>
          </ul>

          <h3>Promotion Calendar:</h3>
          <ul>
            <li>
              Promotion planning is not systematic and is planned on a one-off basis.
            </li>
            <li>
              No volume projections by promotion and limited follow through to ensure promotion is executed.
            </li>
            <li>
              Trade spend by promotion is not tracked.
            </li>
            <li>
              No post promotional analysis.
            </li>
          </ul>

          <h3>Trade Management:</h3>
          <ul>
            <li>
              Trade rates by retailer are not persistently tracked or budgeted for. 
            </li>
            <li>
              Retailer margins are largely ignored.
            </li>
          </ul>

          <h3>Trade Deductions:</h3>
          <ul>
            <li>
              Retailer or distributor deductions are not validated vs. forecasted spend.
            </li>
          </ul>

          <h3>Baseline Management:</h3>
          <ul>
            <li>
              Volumes are not regularly reviewed or maintained at the SKU level.
            </li>
          </ul>

          <h3>Cross-Functional Process:</h3>
          <ul>
            <li>
              No regularly scheduled S&OP review pulling together the cross functional team.
            </li>
          </ul>

          <h3>Management:</h3>
          <ul>
            <li>
              Management team has many unknown unknowns regarding the planning process.
            </li>
          </ul>

          <h2>Level 2: Early Stage Growth</h2>

          <h3>Systems:</h3>
          <ul>
            <li>
              Collaborative spreadsheets or spreadsheet-like tools either live in the cloud or in a shared location.
            </li>
          </ul>

          <h3>Demand Planning:</h3>
          <ul>
            <li>
              Planning horizon of a year to 18 months.
            </li>
            <li>
              New distribution is planned for at the product group level, but SKU mix and other details are not. 
            </li>
            <li>
              Customer orders are analyzed vs. the forecast in aggregate. 
            </li>
            <li>
              Consumption to delivery forecast is slowly developed as promotion volume offsets are implemented.
            </li>
          </ul>
 
          <h3>Supply Planning:</h3>
          <ul>
            <li>
              Long term capacity plans are created from the longer planning horizon, which are provided to non-finished goods suppliers and production teams. 
            </li>
            <li>
              Production plans are maintained on a collaborative spreadsheet.
            </li>
          </ul>

          <h3>Promotion Calendar:</h3>
          <ul>
            <li>
              Promotion planning is centralized across departments. 
            </li>
            <li>
              Volume projections by promotion are instituted.
            </li>
            <li>
              Customer service identifies if orders conform to expected volume.
            </li>
            <li>
              Trade spend by promotion is typically tracked, but retailer margin is still largely ignored.
            </li>
            <li>
              Top-line post promotional analysis is tracked comparing quantities scanned vs. expected consumption.
            </li>
          </ul>

          <h3>Trade Management:</h3>
          <ul>
            <li>
              Trade rates by retailer are persistently tracked vs. a budget.
            </li>
            <li>
              All types of promotions, including advertisements, temporary price reductions and coupons are tracked. 
            </li>
            <li>
              Retailer margins are projected.
            </li>
          </ul>

          <h3>Trade Deductions:</h3>
          <ul>
            <li>
              Typically, deductions are validated.
            </li>
            <li>
              Actual vs. forecasted spend is still often overlooked.
            </li>
          </ul>

          <h3>Baseline Management:</h3>
          <ul>
            <li>
              Baseline volumes are reviewed at regular intervals and maintained at the SKU level.
            </li>
            <li>
              Realized baselines inform the forecast going forward.
            </li>
          </ul>

          <h3>Cross-Functional Process:</h3>
          <ul>
            <li>
              Regularly scheduled S&OP review in which general variables are covered. 
            </li>
          </ul>

          <h3>Management:</h3>
          <ul>
            <li>
              Management team is beginning to track variables that they previously ignored.
            </li>
          </ul>

          <h2>Level 3: Late Stage Growth - Current Modus State</h2>

          <h3>Systems:</h3>
          <ul>
            <li>
              Centralized, integrated, structured, and collaborative platform purpose built for bottoms-up planning employed. (Modus Planning) 
            </li>
          </ul>

          <h3>Demand Planning:</h3>
          <ul>
            <li>
              Planning horizon is theoretically unlimited, however typically analyzed a year to two years in advance. 
            </li>
            <li>
              New distribution is planned for by SKU, store count, and distribution timing. 
            </li>
            <li>
              Customer orders are analyzed vs. forecast by line item. 
            </li>
            <li>
              Consumption to delivery forecast is refined as promotion volume offsets are implemented at the distribution center level.
            </li>
          </ul>
 
          <h3>Supply Planning:</h3>
          <ul>
            <li>
              Long term capacity planning is accomplished with production planning.
            </li>
            <li>
              Production planning is reviewed weekly, which lowers inventory holding costs.
            </li>
          </ul>

          <h3>Promotion Calendar:</h3>
          <ul>
            <li>
              Real-time, centralized promotion planning.
            </li>
            <li>
              Volume projections by promotion by retailer are reviewed. 
            </li>
            <li>
              Customer service identifies if orders conform to expected volume on the SKU level by reviewing expected customer days on hand. 
            </li>
            <li>
              Trade spend and retailer margin by promotion is tracked. 
            </li>
            <li>
              Top-line post promotional analysis is completed by comparing quantities scanned vs. expected consumption.
            </li>
          </ul>

          <h3>Trade Management:</h3>
          <ul>
            <li>
              Trade rates by retailer are persistently tracked vs. a budget. 
            </li>
            <li>
              All types of promotions including advertisements, temporary price reductions and coupons are tracked.
            </li>
          </ul>

          <h3>Trade Deductions:</h3>
          <ul>
            <li>
              Deductions are validated from actual scan data.
            </li>
          </ul>

          <h3>Baseline Management:</h3>
          <ul>
            <li>
              Baseline volumes are reviewed regularly and maintained at the SKU/DC level. 
            </li>
            <li>
              Baseline development is persistently tracked and actualized.
            </li>
          </ul>

          <h3>Cross-Functional Process:</h3>
          <ul>
            <li>
              All cross-functional members contribute to the forecast continuously to ensure accuracy. 
            </li>
            <li>
              Regularly scheduled S&OP reviews cover exceptions and trends.
            </li>
          </ul>

          <h3>Management:</h3>
          <ul>
            <li>
              Management team is better equipped to identify and address variables regarding go-to-market execution activity.  
            </li>
          </ul>
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
