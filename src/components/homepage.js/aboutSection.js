import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BioCard from "../building blocks/card"
import Button from "../button"

const AboutSection = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        file(relativePath: {eq: "nataly-avatar.jpg"}) {
          childImageSharp {
            fluid(maxHeight: 500, quality: 100) {
              base64
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    `)
    return (
      <BioCard
      leftSide={<Img class="" 
      imgStyle={{ objectFit: 'cover' }}
      fluid={data.file.childImageSharp.fluid} alt="Nataly Merezhuk" 
      />}
      title={"Hello, I'm Nataly Merezhuk."}
      description={"Web developer and violinist based out of Baltimore, MD."}
      buttonOne={<a>Resume</a>}
      buttonTwo={<Link to={"/projects"}>Portfolio</Link>}
      
      
      
      
      />

    )
}

export default AboutSection;



