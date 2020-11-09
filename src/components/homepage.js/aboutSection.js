import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Card from "../building blocks/card"
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
      <Card
      leftSide={<Img class="" 
      imgStyle={{ objectFit: 'cover' }}
      fluid={data.file.childImageSharp.fluid} alt="Nataly Merezhuk" 
      />}
      title={"Hello, I'm Nataly Merezhuk."}
      description={"Web developer and violinist based out of Baltimore, MD."}
      buttonOne={<a>Resume</a>}
      buttonTwo={<a>Portfolio</a>}
      blogText={"View my violin website →"}
      blog={"www.natalyjazzviolin.com"}
      
      
      />

    )
}

export default AboutSection;



