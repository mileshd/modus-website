import React from "react"
import './header.css'
import logo from '../../content/assets/onepage-logo.png'

export default class Header extends React.Component {
  render() {
    return (
      <nav className="header navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="brand-container active">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="OnePage Software" />
                OnePage Software 
              </a>
            </span>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="/modules">Modus Planning</a></li>
              <li><a href="/resources">Resources</a></li>
              <li className="hidden-sm"><a href="/about">About</a></li>
              <li className="hidden-xs hidden-md hidden-lg"><a href="/about">About</a></li>
            </ul> 
            <ul className="nav navbar-nav navbar-right">
              <li><a href="https://app.modusplanning.com" target="_blank" rel="noopener noreferrer">Sign In</a></li>
              <li>
                <a
                  href="/contact"
                  className="btn btn-primary header-demo-button"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
