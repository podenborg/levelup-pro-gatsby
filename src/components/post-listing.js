import React from "react"
import { Link } from "gatsby"

const PostListing = ({ post }) => (
  <article>
    <Link to={post.fields.slug}>
      <h3>{post.frontmatter.title}</h3>
    </Link>    
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
  </article>
)

export default PostListing