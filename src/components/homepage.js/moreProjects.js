import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Card from "../building blocks/card"
import Button from "../button"


const MoreProjects = () => {
    return (
        <div className="grid grid-flow-row auto-rows-max  gap-4 place-items-center">
            <h2 className="lg:text-6xl md:text-4xl text-2xl semi-bold">
                More Projects..
            </h2>
            <p className="lg:text-4xl md:text-2xl text-center">to view more projects that I've worked on please visit the</p>
            <Button><Link to={"/portfolio"}>Project Gallery</Link></Button>
            <p className="lg:text-4xl md:text-2xl">or</p>
            <Button>GitHub Page</Button>
        </div>
    )
}

export default MoreProjects;
