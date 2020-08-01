import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './white-paper.css'

const WhitePaperPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning White Paper" />
      <div className="white-paper">
        <div className="container">
          <h1>Modus Planning White Paper</h1>
          <h2>The Current State of Planning in a Growing Brand:</h2>
          <p>
            "Fragmented", "sporadic", "inconsistent", and "fragile" are the adjectives that principally describe the state of planning a growing brand in retail before Modus Planning. In the past, rapidly growing brands, expanding in distribution and sales velocity, that must rely on bottoms-up models in lieu of top-down statistical trends, were not given the tools they need to properly scale this methodology. This white paper will examine the downstream cross-functional impacts that poor planning can levy throughout the business and how the Continuous S&OP way-of-working, enabled by Modus Planning can significantly elevate both a brand’s planning and executional efficiency. 
          </p>

          <h3>Fragmented</h3>
          <p>
            "Spreadsheets, spreadsheets everywhere!" This is an actual gripe heard from a trade manager who lost track of the myriad of function-specific business-planning spreadsheets that her organization developed. Of course, these spreadsheets all accomplish virtually the same thing – bottoms-up planning, but they are purpose built to tackle only one aspect of the business. For example, a supply chain analyst would build out a demand plan, incorporating promotion planning from another spreadsheet, but at the end of it, the output was a plan of expected case volume to produce. Details such as promotion spend, customer-specific plans, shopper marketing events would not be incorporated at all. 
          </p>
          <p>
            A trade manager would have the same bottoms-up methodology built out, but on his team, the focus is ensuring that trade spend is captured and that the promotional activity falls in a certain allocated budget as a proportion of sales. 
          </p>
          <p>
            The sales team builds a promotion plan for their customers based off a retailer’s margin requirements as well as a desired frequency. In most growing companies, this promotion plan undergoes a sort of "telephone game" in which trade is notified and/or operations is notified. The details of the plan often resolve to a "finger in the wind" estimate and, due to the constraints of the team and workload, post-promotional analysis is rarely done.
          </p>
          <p>
            These separate spreadsheets or trackers are often not integrated and do not speak to each other. This often leads to promotions being missed meaning that either no supply was produced, or the customer did not order for the promotion. In either instance, your brand will go out of stock.
          </p>

          <h3>Sporadic</h3>
          <p>
            Conventional top-down planning methodologies at large multi-national organizations rely on monthly forecast reviews. Given the scale of their business, one promotion may or may not even be a blip in the supply plan. Smaller companies and growing brands cannot afford to update their plans and reassess on a monthly cadence for fear of acting too late. Planning sporadically also leads to missed details like new items, promotions, or increases in distribution as the organization is not in a habit of continuously updating the plan. 
          </p>

          <h3>Inconsistent</h3>
          <p>
            Variable formatting, nomenclature, and methodologies can obfuscate a clear bottoms-up plan as the spreadsheets used by trade do not align with those from supply chain. In this situation, Finance likely needs work-arounds to translate and properly accrue for COGS and trade expenditures. This inconsistency easily leads to a deduction for a major promotion not being accrued for, which can wreak havoc on the books and financial projections of a brand.
          </p>

          <h3>Fragile</h3>
          <p>
            A single typo in a formula bar in which the incorrect unit to case conversion is entered can cause tens if not potentially hundreds of thousands of dollars in lost sales. Spreadsheets are at their core fragile as they operate at the whims of human error. Spreadsheets are fantastic for rapid iteration on new concepts, however; they have no business being used as the central planning system for a growing brand.   
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default WhitePaperPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
