import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Card from "../building blocks/card"


const MoreProjects = () => {
    const data = useStaticQuery(graphql`
        query {
        mobileImage: file(
            relativePath: { eq: "chordHolderWide.png" }
        ) {
            childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
            }
        }
        desktopImage: file(relativePath: { eq: "chordHolderSquare.jpeg" }) {
            childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
            }
        }
        }
    `)

    const sources = [
            data.mobileImage.childImageSharp.fluid,
            {
              ...data.desktopImage.childImageSharp.fluid,
              media: `(min-width: 625px)`,
            },
          ]
    return (
        <Card
        
        title={"Hello, I'm Nataly Merezhuk."}
        description={"Web developer and violinist based out of Baltimore, MD."}
        buttonOne={<a>GitHub</a>}
        buttonTwo={<a>Demos</a>}
        
        
        
        />
        
    )
}

export default MoreProjects;
