import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Card from "../building blocks/card"


const ChordHolder = () => {
    const data = useStaticQuery(graphql`
        query {
        mobileImage: file(
            relativePath: { eq: "chord-holder.jpg" }
        ) {
            childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
            }
        }
        desktopImage: file(relativePath: { eq: "chord-holder.jpg" }) {
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
            description={"A web app that transforms text input into musical notes, then plays them using Tonal.js."}
            buttonOne={<a href="https://github.com/natalyjazzviolin/ChordHolder">Code</a>}
            buttonTwo={<a href="https://chord-holder.netlify.app/">Demo</a>}
            // blog={"/blog"}
            // blogText={"Read more on the blog..."}
            
            
            />
        
    )
}

export default ChordHolder;

