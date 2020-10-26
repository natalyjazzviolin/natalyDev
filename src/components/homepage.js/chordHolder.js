import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Card from "../building blocks/card"


const ChordHolder = () => {
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
            leftSide={<Img fluid={sources} alt="Chord Holder" />}
            title={"Chord Holder"}
            description={"A vanilla javascript web app that plays & switches between two chords."}
            buttonOne={<a>GitHub</a>}
            buttonTwo={<a>Demo</a>}
            blog={"/blog"}
            
            
            />
        
    )
}

export default ChordHolder;

