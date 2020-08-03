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
          <h1>Modus Planning Top 10 Value Propositions</h1>

          <p>
            Modus Planning has been proven to widen your margins by enabling its users to master go-to-market execution.
          </p>

          <h2>1. Align Your Company</h2>
          <p>
            Modus Planning enables interdepartmental collaboration. Operations, supply chain, marketing, and finance operating from the same source of truth.
          </p>
          <p>
             No repeat work, no miscommunication, no wasted time. Modus enables its users to maximize their most valuable resource: time.
          </p>

          <h2>2. Organize your data.</h2>
          <p>
            Demand forecasts, trade promotion planning, customer orders, and consumption data used to be housed in different places. Modus puts all your relevant information in a centralized platform, so no metrics are overlooked. 
          </p>

          <h2>3. Upgrade from your outdated processes.</h2>
          <p>
            Most growing brands rely heavily on spreadsheets. Unfortunately, spreadsheets are prone to errors, do not scale, and limit collaboration – all of which could be costly for growing brands. Modus allows brands to retire their spreadsheets, once and for all.
          </p>

          <h2>
            4. Deeply understand how your business’ performance is evolving.
          </h2>
          <p>
            Modus Planning compares your shipments and scan data vs. the forecast by consignee, so you can consistently track over or under performing customers or products. 
          </p>
          <p>
            Track gross and net sales to understand margins and slotting investment ROIs.
          </p>

          <h2>5. Never Stop Evolving.</h2>
          <p>
            Much of the business planning within CPG is educated guesswork. With Modus Planning, all relevant data is tracked to enable repeat success and knowledge-gaining from mistakes, meaning forecasts, lift percentages, and customer orders all improve the longer a brand uses Modus. 
          </p>
          <p>
            As you evolve Modus Planning is too, always incorporating best practices and new helpful features along the way.
          </p>

          <h2>6. Forecast Accurately.</h2>
          <p>
            Accurate demand forecasts inform the production plan, can help project future growth, and assist with company-wide strategic decision making. Modus Planning has been proven to significantly improve forecast accuracy for its users.
          </p>

          <h2>7. Eliminate Waste.</h2>
          <p>
            Brands are billed by retailers for spoilage or “reclaim.” Accurate forecasts eliminate this costly expense, which means more money in to drive sales, and importantly, less wasted food.
          </p>

          <h2>8. Avoid Missed Upside.</h2>
          <p>
            Accurate forecasts ensure there is enough product on shelf to prevents stock-outs. Without Modus, the opportunity cost of a poor forecast, leading to poor orders could be devastating during a major promotion.
          </p>

          <h2>9. Promote Wisely.</h2>
          <p>
            Modus allows its user to map trade spend and track associated gross sales numbers, all in the same place. Track the effectiveness and make sure you never overshoot your promotion budget.
          </p>
          <p>
            Calculate the optimal outcomes based on user-defined promotion constraints. Maximize every dollar spent on trade based upon your brand’s unique circumstances.
          </p>

          <h2>
            10. Manage your supply chain so you do not get taken advantage of.
          </h2>
          <p>
            No one knows your demand better than you. Modus allows its users to compare distributor customer orders to internally generated forecasts to ensure your distributors are ordering correctly, and not over-indexing during an OI period.
          </p>
          <p>
            Modus syncs with DC inventory data to help its users track their product down the supply chain. Oversee customer DC inventory days-on-hand and implement strategies to eliminate spoilage or stockouts downstream based on projected forecasts.
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