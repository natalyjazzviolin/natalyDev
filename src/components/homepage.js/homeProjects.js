import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Card from "../building blocks/card"


const HomeProjects = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(limit: 2, sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {project: {ne: false}}}) {
              edges {
                node {
                  frontmatter {
                    title
                    featuredImage {
                      childImageSharp {
                        fluid(maxWidth: 590) {
                        ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    Code
                    Demo
                    description
                  }
                  id
                }
              }
              distinct(field: frontmatter___project)
            }
          }
          
        `
      )
    return (
      <div className="grid align-center">
        <h2 className="md:text-3xl text-xl md:mb-10  -mb-10 underline text-center">Latest Projects:</h2>
        <ul>
            {data.allMarkdownRemark.edges.map(edge => {
            return (
            <li className="max-h-80 my-32" key={edge.node.id}>
               <Card
                leftSide={<Img  className=" " fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />}
                title={edge.node.frontmatter.title}
                description={edge.node.frontmatter.description}
                buttonOne={<a target="_blank" href={edge.node.frontmatter.Code}>Code</a>}
                buttonTwo={<a target="_blank" href={edge.node.frontmatter.Demo}>Demo</a>}
                // blog={"/blog"}
                // blogText={"Read more on the blog..."}
                />
         
            </li>
            )
        })}
        </ul>
      </div>
        
            
    )
}

export default HomeProjects;

