import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ryanPicture from '../../content/assets/ryan-picture.jpeg'
import milesPicture from '../../content/assets/miles-portrait-1-small.jpg'
import brianPicture from '../../content/assets/brian-picture.jpeg'
import './about.css'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Us" />
      <div className="about">
        <div className="philosophy">
          <div className="container">
            <h1>Philosophy</h1>
            <h4>
              Our mission is to provide the tools they need to masterfully plan and execute their business.
            </h4>
            <h4>
              Our applications are created by CPG people for CPG people. We strive to develop products that are massively impactful, while being easy to afford, and even easier to learn.
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
                <img src={ryanPicture} className="team-picture" />
                <h3>
                  Ryan Moore, CEO
                </h3>
              </div>
              <div className="col-xs-12 col-sm-9">
                <p>
                  With majors in Supply Chain and Information Systems, at the University of Maryland (just like Miles), Ryan went the supply chain route and joined the select Unilever's Future Leader Program.
                </p>
                <p>
                  There, Ryan led the S&OP/Demand Planning process for Popsicle and Ben & Jerry's, before taking the leap and going to the then four-person startup, Icelandic Provisions. Through Ryan's tenure, Icelandic Provisions has been consistently recognized as one of the fastest growing brands in the dairy yogurt category nation-wide.
                </p>
                <p>
                  Ryan quickly realized that the dire need for a cloud-based bottoms-up planning system like Modus Planning extended throughout the CPG world. Seeing this, Ryan and Miles have spent the past five years working closely with rapidly growing brands to refine Modus Planning into the best-in-class system it is today.
                </p>
                <p>
                  Today, Modus Planning is the central planning operating system of high-performing, high-growth brands across the supermarket. Ryan leads the onboarding, training, and implementation efforts along with high-level business strategy. 
                </p>
              </div>
            </div>
            <div className="row team-member">
              <div className="col-xs-12 col-sm-3 img-container">
                <img src={milesPicture} className="team-picture" />
                <h3>
                  Miles Dickinson, CTO
                </h3>
              </div>
              <div className="col-xs-12 col-sm-9">
                <p>
                  Miles graduated from the University of Maryland with degress in Information Systems and Supply Chain Management (just like Ryan), and opted to pursue application development at General Electric. There, Miles completed GE's Information Technology Leadership program and gained experience in Cybersecurity, Full-Stack Development, and Agile Project Management. Miles took the leap to join OnePage Software full-time in 2016 and build Modus Planning.
                </p>
                <p>
                  Web application development is Miles' passion. He has been developing for the web since 2007 and is constantly in a state learning and refining his craft. After four years of work, Miles is excited to see the power brands achieve and the value driven when using Modus Planning.
                </p>
                <p>
                  Miles heads the product development and operations side of OnePage software as well as high-level business strategy and execution.
                </p>
              </div>
            </div>
            <div className="row team-member">
              <div className="col-xs-12 col-sm-3 img-container">
                <img src={brianPicture} className="team-picture" />
                <h3>
                  Brian Doyle, CFO
                </h3>
              </div>
              <div className="col-xs-12 col-sm-9">
                <p>
                  Graduating with degrees in Finance and Marketing from the University of Maryland, Brian has diverse financial experience and is a CFA charterholder. Brian began his career in Fannie Mae’s finance rotational program before moving to Goldman Sachs where he was charged with complex investment valuation within GSAM.
                </p>
                <p>
                  Brian has worked with OnePage Software since spring 2017 as the Director of Outreach before making the leap full-time and becoming the CFO in the summer of 2020.
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

        //<div className="team">
          //<div className="container">
            //<h1>The Team</h1>
            //<div className="row">
              //<div className="col-xs-12 col-sm-4">
                //<img src={ryanPicture} className="team-picture" />
                //<h3>
                  //Ryan Moore, CEO
                //</h3>
                //<p>
                  //Ryan led the S&OP/Demand Planning process for Ben & Jerry's at Unilever, before creating the continuous S&OP collaborative way-of-working at Icelandic Provisions.
                //</p>
                //<p>
                  //This experience led to realizing the dire need for a bottoms-up planning system like Modus, and Ryan has spent the past 4 years working closely with customers to refine Modus to be the best-in-class system it is today.
                //</p>
              //</div>
              //<div className="col-xs-12 col-sm-4">
                //<img src={milesPicture} className="team-picture" />
                //<h3>
                  //Miles Dickinson, CTO
                //</h3>
                //<p>
                  //Miles has been developing applications for over 12 years.
                //</p>
                //<p>
                  //He completed GE's Information Technology Leadership program before starting work on Modus Planning full-time in 2016.
                //</p>
                //<p>
                  //After 4 years of work, Miles is excited to see the power brands achieve when using Modus Planning.
                //</p>
              //</div>
              //<div className="col-xs-12 col-sm-4">
                //<img src={brianPicture} className="team-picture" />
                //<h3>
                  //Brian Doyle, CFO
                //</h3>
                //<p>
                  //Brian has eight years of financial services experience and is a CFA charterholder.
                //</p>
                //<p>
                  //He began his career with Fannie Mae in their financial rotational program before moving to Goldman Sachs where he valued complex fixed income investments within GSAM.
                //</p>
                //<p>
                  //Brian joined OnePage Software in the spring of 2017 as the Director of Outreach before being promoted to CFO in the summer of 2020.
                //</p>
              //</div>
            //</div>
          //</div>
        //</div>
