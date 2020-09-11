import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"

const Post = ({ data, location }) => {
  return (
    <Layout location={location}>
      <span>{data.markdownRemark.frontmatter.date}</span>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>  
  )
}

export default Post

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
