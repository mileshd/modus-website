import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import onepageLogo from '../../content/assets/onepage-logo.png'
import ryanPicture from '../../content/assets/ryan-picture.jpeg'
import milesPicture from '../../content/assets/miles-portrait-1-small.jpg'
import brianPicture from '../../content/assets/brian-picture-new-2.jpg'
import './about.css'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div className="about">
        <div className="company">
          <div className="container">
            <div className="company-container clearfix">
              <img src={onepageLogo} alt="OnePage" className="onepage-logo pull-left" />
              <div className="company-name">OnePage Software</div>
              <div className="company-slogan">Capabilities that Transcend</div>
            </div>
          </div>
        </div>
        <div className="philosophy">
          <div className="container">
            <h1>Philosophy</h1>
            <h4>
              Our mission is to provide the tools consumer packaged goods (CPG) companies need to masterfully plan and execute their business.
            </h4>
            <h4>
              OnePage Software's applications are created by CPG people for CPG people. We strive to develop products that are massively impactful, while being easy to afford, and even easier to learn.
            </h4>
            <h4>
              This philosophy guides our approach to every client relationship. We desire to create long-lasting, robust partnerships where community feedback allows us to optimize and refine our products to drive the most value possible.
            </h4>
          </div>
        </div>
        <div className="team">
          <div className="container">
            <h1>The Team</h1>
            <div className="row team-member">
              <div className="col-xs-12 col-sm-3 img-container">
                <img src={ryanPicture} alt="Ryan Moore" className="team-picture" />
                <h3>
                  Ryan Moore
                </h3>
                <h4>
                  CEO, Co-Founder
                </h4>
              </div>
              <div className="col-xs-12 col-sm-9">
                <p>
                  With majors in Supply Chain and Information Systems from the University of Maryland, Ryan pursued supply chain and joined the select Unilever's Future Leader Program.
                </p>
                <p>
                  There, Ryan led the S&OP/Demand Planning process for Popsicle and Ben & Jerry's before taking the leap and going to the then four-person startup, Icelandic Provisions. Through Ryan's tenure, Icelandic Provisions has been consistently recognized as one of the fastest growing brands in the dairy yogurt category nationwide.
                </p>
                <p>
                  Ryan quickly realized that the dire need for a cloud-based bottom-up planning system extended throughout the CPG world. Seeing this, Ryan and Miles have spent the past five years working closely with rapidly growing brands to create Modus Planning into the best-in-class system it is today.
                </p>
                <p>
                  Ryan leads the onboarding, training, and implementation efforts along with high-level business strategy. 
                </p>
              </div>
            </div>
            <div className="row team-member">
              <div className="col-xs-12 col-sm-3 img-container">
                <img src={milesPicture} alt="Miles Dickinson" className="team-picture" />
                <h3>
                  Miles Dickinson
                </h3>
                <h4>
                CTO, Co-Founder
                </h4>
              </div>
              <div className="col-xs-12 col-sm-9">
                <p>
                  Miles graduated from the University of Maryland with degrees in Information Systems and Supply Chain Management, and opted to pursue application development at General Electric. There, Miles completed GE's Information Technology Leadership program and gained experience in cybersecurity, full-stack development, and agile project management. Miles joined OnePage Software full-time in 2016 to build Modus Planning.
                </p>
                <p>
                  Web application development is Miles' passion. He has been programming since 2007 and is constantly learning and refining his craft. Miles is excited to see the results achieved and the value driven from Modus Planning after building the platform from the ground up.
                </p>
                <p>
                  Miles heads Product Development and Operations at OnePage Software.
                </p>
              </div>
            </div>
            <div className="row team-member">
              <div className="col-xs-12 col-sm-3 img-container">
                <img src={brianPicture} alt="Brian Doyle" className="team-picture" />
                <h3>
                  Brian Doyle
                </h3>
                <h4>
                  CFO
                </h4>
              </div>
              <div className="col-xs-12 col-sm-9">
                <p>
                  Graduating with degrees in Finance and Marketing from the University of Maryland, Brian has diverse financial experience and is a CFA charterholder. Brian began his career in Fannie Mae’s Finance Rotation Program before moving to Goldman Sachs where he was charged with complex investment valuation within GSAM.
                </p>
                <p>
                  Brian has worked with OnePage Software since spring 2017 as the Director of Outreach before becoming the CFO in the summer of 2020.
                </p>
                <p>
                  Brian oversees Sales, Marketing, and Finance for OnePage Software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: file(absolutePath: {
      regex: "/skew.png/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ryanPicture: file(absolutePath: {
      regex: "/ryan-picture.jpeg/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    milesPicture: file(absolutePath: {
      regex: "/miles-picture.jpeg/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    brianPicture: file(absolutePath: {
      regex: "/brian-picture.jpeg/"
    }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
