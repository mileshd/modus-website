import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import logo from '../../content/assets/logo.png'

import Layout from "../components/layout"
import SEO from "../components/seo"
import './resources.css'

const ResourcesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Resources" />
      <div className="resources">
        <div className="container">
          <div className="row resources-videos">
            <div className="col-xs-12 col-sm-6">
              <h2>
                Introduction to Modus Planning
              </h2>
              <iframe
                src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1596033587&f=RLYna3VEYcPtkrDUMj22Qg&d=0&m=p&r=360p+480p+720p&volume=100&start_res=480p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options="
                width="100%"
                height="324"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <h2>
                Why Bottom-Up is Better
              </h2>
              <iframe
                src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1596033736&f=AqUcvyX0WigTyROwe1MMWA&d=0&m=p&r=360p+480p+720p&volume=100&start_res=480p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options="
                width="100%"
                height="324"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              />
            </div>
          </div>
          <div className="row resources-articles">
            <div className="col-xs-12 col-sm-4">
              <a href="/white-paper" className="resources__article">
                <h3>Modus Planning White Paper</h3>
                <img src={logo} />
                <p>
                  An overview of why Modus Planning is a CPG revolution.
                </p>
              </a>
            </div>
            <div className="col-xs-12 col-sm-4">
              <a href="/maturity-model" className="resources__article">
                <h3>Growth Brand Planning & Maturity Model</h3>
                <i className="fa fa-line-chart" />
                <p>
                  How brands grow to be unmitigated success stories. 
                </p>
              </a>
            </div>
            <div className="col-xs-12 col-sm-4">
              <a href="/value-proposition" className="resources__article">
                <h3>Modus Planning Value Proposition</h3>
                <i className="fa fa-usd" />
                <p>
                  10 reasons Modus will turbo-charge your brand.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResourcesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
