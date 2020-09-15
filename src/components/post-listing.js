import React from "react"
import { Link } from "gatsby"

const PostListing = ({ post }) => (
  <article>
    <Link to={post.slug}>
      <h3>{post.title}</h3>
    </Link>
    <span>{post.createdAt}</span>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </article>
)

export default PostListing