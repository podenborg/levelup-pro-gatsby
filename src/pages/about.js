import React, { Component } from 'react'

import Layout from '../components/layout'

export default class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <h1>
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia impedit aliquam, neque nulla provident labore perferendis harum necessitatibus. Odit tempore saepe omnis facilis eum placeat ab vitae quibusdam beatae assumenda.
          </p>
        </div>
      </Layout>      
    )
  }
}
