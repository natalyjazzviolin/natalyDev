import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              timeToRead
              excerpt
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout >
      <ul className="lg:mt-32 lg:mx-20 md:mt-20 my-10" >
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className="lg:mt-10" key={edge.node.id}>
                <h2 className="lg:text-2xl md:text-xl text-base underline">
                    <Link to={`/blog/${edge.node.fields.slug}/`}>
                        {edge.node.frontmatter.title}
                    </Link>
                </h2>
              <div className="lg:text-xl md:text-base text-xs">
                <span>
                  Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                  {edge.node.timeToRead} min read
                </span>
              </div>
              <p className="lg:text-xl md:text-base text-xs">{edge.node.excerpt}</p>
              <div className="lg:text-2xl md:text-xl text-sm mb-4 text-blue-700 underline">
                    <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog