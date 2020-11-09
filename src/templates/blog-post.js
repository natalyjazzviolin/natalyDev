import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
      html
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <div className="md:mt-20 mt-10">
        <h1 className="lg:text-4xl md:text-2xl text-lg underline font-semibold py-4">{props.data.markdownRemark.frontmatter.title}</h1>
        <span className="lg:text-xl md:text-base text-xs">
          Posted on {props.data.markdownRemark.frontmatter.date}{" "}
          <span> / </span> {props.data.markdownRemark.timeToRead} min read
        </span>
        <div
        className="lg:text-2xl md:text-xl text-base mt-6"
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        >
</div>
      </div>
    </Layout>
  )
}

export default BlogPost