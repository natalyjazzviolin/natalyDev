import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Button from "../button"


const BlogSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
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
    <div  >
      <ul  >
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id}>
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
              <div className=" md:text-xl text-sm mb-4 text-blue-700 underline">
                    <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
        <Button><Link to="/blog">View All →</Link></Button>
    </div>
  )
}

export default BlogSection