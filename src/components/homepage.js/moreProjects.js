import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import WiderCard from "../building blocks/widerCard"


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
        <WiderCard
        leftSide={<p>hello</p>}
        title={"More projects"}
        description={"More projects built with JavaScript, React and Gatsby"}
        button={<a>This way →</a>}
        />
        
    )
}

export default MoreProjects;
