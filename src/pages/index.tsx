// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import enlightenedLogo from '../../content/assets/enlightened-logo.png'
import huLogo from '../../content/assets/hu-logo.jpg'
import deepLogo from '../../content/assets/deep-logo.svg'
import problemPicture from '../../content/assets/home-problem.jpg'
import './index.css'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="home-page">
        <div className="new-pitch">
          <div className="pitch-overlay"></div>
          <div className="container">
            <div className="pitch-content">
              <div className="new-pitch__text">
                <h1>
                  Plan Your Business And Grow Your Brand With Confidence
                </h1>
                <h2>
                  With 
                  <span className="pitch-demand-planning">
                    Demand Planning 
                  </span>,
                  <div>
                    <span className="pitch-trade-promotion-management">
                      Trade Promotion Management 
                    </span>,
                  </div>
                  and
                  <span className="pitch-order-management">
                    Order Validation
                  </span>
                </h2>
                <h1>
                  Modus Planning Is Your Retail Operating System
                </h1>
                <div className="button-container">
                  <a href="/contact" className="btn btn-primary get-in-touch-button">
                    Get In Touch 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clients">
          <div className="container">
            <h1>Some of the Brands Growing with Us</h1>
            <div className="row clients__logos">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <img className="logo-picture" src={enlightenedLogo}/>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <img className="logo-picture" src={huLogo}/>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <img className="logo-picture" src={deepLogo}/>
              </div>
            </div>
          </div>
        </div>
        <div className="client__quote">
          <div className="container">
            <div className="quote-text">
              "As one of the fastest growing brands in our category, Modus Planning's unique approach, bridging Sales, Marketing, and Operations, fits our needs perfectly so we can plan our business and focus more on growth than tracking."
            </div>
            <div className="quote-attribution">
              Elliot Shifrin, VP Marketing - Hu Kitchen
            </div>
          </div>
        </div>
        <div className="problem">
          <div className="problem-text">
            <div className="picture-overlay"></div>
            <h1>Problem</h1>
            <h2>
              For most rapidly growing companies, who cannot use statistical models, the plans are kept in a number of uncollaborative, disorganized, and error-prone spreadsheets.
            </h2>
            <h2>
              At best, this is controlled chaos. At worst, this could compromise your business' future.
            </h2>
          </div>
          <div className="problem-picture">
          </div>
        </div>
        <div className="solution">
          <div className="solution-picture"></div>
          <div className="solution-text">
            <h1>Solution</h1>
            <h2>
              Modus Planning offers growing brands what they need most: A scalable platform with capabilities far transcending the spreadsheet.
            </h2>
            <h2>
              Never miss a new item launch, promotion, or opportunity with the cross-functional collaboration facilitated by Modus Planning.
            </h2>
          </div>
        </div>
        <div className="client__quote">
          <div className="container">
            <div className="quote-text">
              "Modus Planning is well suited for growth-oriented brands of all sizes.  
            </div>
            <div className="quote-text">
              Modus Planning has revolutionized our planning processes by incorporating the interests of all departments. No other system I have seen can coherently build a forecast which truly aligns the functional teams. Modus Planning provides a fact driven, stable, and single truth forecast.
            </div>
            <div className="quote-text">
              OnePage Software is a fantastic collaborative team driven to find application solutions to cumbersome and inefficient processes."
            </div>
            <div className="quote-attribution">
              Matt Kasten, VP Operations - Beyond Better Foods
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="container-fluid">
            <h1>Modus Planning Means Cross-Functional Harmony</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <h2>Supply Chain</h2>
                <ul>
                  <li>
                    Build your bottom-up product-level plan in the cloud, by retailer, consignee DC, and even inbound DC.
                  </li>
                  <li>
                    Instantly see volume implications as distribution gains or promotions are planned.
                  </li>
                  <li>
                    Mitigate out-of-stocks and spoilage. Take control of your demand plan and ensure orders are correct.
                  </li>
                  <li>
                    Refine the forecast using integrated actual data to ensure that demand planning considers all the nuances of the supply chain.
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <h2>Sales & Marketing</h2>
                <ul>
                  <li>
                    Plan your sales and trade plans with high granularity. 
                  </li>
                  <li>
                    Keep your promotion calendar up-to-date across all sales reps with permissions and approvals.
                  </li>
                  <li>
                    Understand trade spend and gross sales implications with each promotion.
                  </li>
                  <li>
                    Plan new item launches and manage reset volume expectations.
                  </li>
                  <li>
                    Optimize retailer promotion plans and track year-to-date/year-to-go trade performance with the click of a button.
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4">
                <h2>Finance & S&OP</h2>
                <ul>
                  <li>
                    Always have the latest gross sales and trade forecast at hand. 
                  </li>
                  <li>
                    Accrue trade spend based on the aligned promotion plan.
                  </li>
                  <li>
                    Easily confirm deduction rates and dollar values.
                  </li>
                  <li>
                    Lock a budget forecast and compare the latest forecast vs. the budget.
                  </li>
                  <li>
                    Quickly review how the forecast has changed over a time period with full audit logs – perfect for S&OP reviews.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row call-to-action">
              <div className="col-xs-12">
                <h1>
                  A Better Way is Here
                </h1>
                <h1>
                  Join the New Standard for Growing Brands
                </h1>
                <a href="/contact" className="btn btn-primary get-in-touch-button">
                  Get In Touch 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

        /*<div className="call-to-action">*/
          /*<div className="container">*/
            /*<div className="row">*/
              /*<div className="col-xs-12">*/
                /*<h1>*/
                  /*A Better Way is Here*/
                /*</h1>*/
                /*<h1>*/
                  /*Join the New Standard for Growing Brands*/
                /*</h1>*/
                /*<a href="/contact" className="btn btn-primary call-to-action-button">*/
                  /*Schedule a Demo*/
                /*</a>*/
              /*</div>*/
            /*</div>*/
          /*</div>*/
        /*</div>*/

                /*<h2 className="pitch-list">*/
                  /*<ul>*/
                    /*<li className="pitch-demand-planning">*/
                      /*Demand Planning */
                    /*</li>*/
                    /*<li className="trade-promotion-management">*/
                      /*Trade Promotion Management*/
                    /*</li>*/
                    /*<li className="pitch-order-management">*/
                      /*Order Management*/
                    /*</li>*/
                  /*</ul>*/
                /*</h2>*/


export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
