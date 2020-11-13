import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";
import Card from "../components/building blocks/card"
import Button from "../components/button"
import Layout from "../components/layout"
import ChordHolderImg from "../images/chordHolderSquare.jpeg"
import PortfolioImg from "../images/portfolio-site.png"

const Resume = () => {
    return (
        <Layout>
            <iframe src="https://drive.google.com/file/d/1zEVG1WtGteHJc2_R67k2kVfnu3PuMYjS/preview" width="640" height="480"></iframe>
        </Layout>
    )
}

export default Resume;