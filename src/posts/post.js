import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"

const Post = ({ data, location }) => {
  return (
    <Layout location={location}>
      <span>{data.contentfulBlogPost.date}</span>
      <h1>{data.contentfulBlogPost.title}</h1>
      <div 
        dangerouslySetInnerHTML={{ 
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html 
        }} 
      />
    </Layout>  
  )
}

export default Post

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
    }
  }
`
