import React from "react"
import { graphql } from "gatsby"

import PostListing from "../components/post-listing"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h2>Posts</h2>
    
    {data.allContentfulBlogPost.edges.map(({ node }) => {
      return <PostListing key={node.id} post={node} />;
    })}   
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }     
    allContentfulBlogPost {
      edges {
        node {
          title 
          createdAt(formatString: "MMMM DD, YYYY")
          body {
            childMarkdownRemark {               
              excerpt
            }
          }
          slug
          id
        }
      }
    }
  }
`
