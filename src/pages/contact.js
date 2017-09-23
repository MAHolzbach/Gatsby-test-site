/*jshint esversion: 6 */

import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Say hi!</h1>
        <p>We hope you've liked what you've seen here. If so, let us know!</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
