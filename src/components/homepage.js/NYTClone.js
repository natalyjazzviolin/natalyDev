import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Card from "../building blocks/card"


const NYTClone = () => {
    const data = useStaticQuery(graphql`
        query {
        mobileImage: file(
            relativePath: { eq: "nyt-scroll.jpg" }
        ) {
            childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
            }
        }
        desktopImage: file(relativePath: { eq: "nyt-scroll.jpg" }) {
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
            title={"NYT Scroll Clone"}
            description={"A vanilla JavaScript clone of the scroll-y articles on New York Times. "}
            buttonOne={<a href="https://github.com/natalyjazzviolin/scroll-site">Code</a>}
            buttonTwo={<a href="https://nyt-scroll.netlify.app/">Demo</a>}
            // blog={"/blog"}
            // blogText={"Read more on the blog..."}
            
            
            />
        
    )
}

export default NYTClone;