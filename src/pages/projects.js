import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image";
import Card from "../components/building blocks/card"
import Button from "../components/button"
import Layout from "../components/layout"
import ChordHolderImg from "../images/chordHolderSquare.jpeg"
import PortfolioImg from "../images/portfolio-site.png"



const Projects = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {project: {ne: false}}}) {
              edges {
                node {
                  frontmatter {
                    title
                    tags
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
        <Layout>
            <div className="md:mt-32 ">
                <h2 className="text-center md:text-5xl text-2xl mt-10">Latest Projects</h2>
            </div>
            <ul className="lg:flex-none flex flex-wrap min-h-50">
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <li className="md:my-20 md:min-h-50 max-h-65 md:max-h-80 grid grid-flow-row md:grid-flow-col auto-rows-max" key={edge.node.id}>
                            <div className="h-full flex flex-wrap md:mt-32">
                                <div className="lg:flex-none flex-1 flex-grow h-screen w-full grid grid-flow-row md:grid-flow-col auto-rows-max">
                                    <span className="lg:flex-none flex-1 flex-grow min-w-50  md:mr-2 mt-10 md:max-h-50 max-h-35 overflow-hidden">
                                        <Img  className=" " fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                                    </span>
                                    <span className="lg:flex-none flex-1 flex-grow max-h-1/2  md:mt-8 -mt-32">
                                        <h2 className="underline md:mt-0 -mt-20 md:mb-4 md:text-4xl text-base">{edge.node.frontmatter.title}</h2>
                                        <p className="text-red-700 md:text-base text-xs  mb-2">{edge.node.frontmatter.tags}</p>
                                        <p className="xl:mt-20 lg:mt-10 md:text-xl md:leading-9 text-sm leading-4">{edge.node.frontmatter.description}</p>
                                        <span className="lg:mt-8 mt-2 grid grid-cols-2 gap-4 items-center md:gap-20">
                                            <a href={edge.node.frontmatter.Code} className="md:text-2xl bg-black text-white rounded text-center"><button>Github</button></a>
                                            <a href={edge.node.frontmatter.Demo} className="md:text-2xl border border-black rounded text-center"><button>Demo</button></a>
                                        </span>
                                    </span>
                                </div> 
                            </div>
                        </li>
                        
                    )
                })}
            </ul>
        </Layout>
    )
}

export default Projects;

{/* <div className="flex flex-wrap md:mt-32">
                <div className="h-screen w-full grid grid-flow-row md:grid-flow-col auto-rows-max">
                    <span className="md:mr-2 mt-10 md:min-h-50 max-h-35 overflow-hidden">
                        <img src={PortfolioImg} alt="Chord Holder Screenshot" />
                    </span>
                    <span className="md:mt-10 -mt-10">
                        <h2 className="md:text-4xl text-base">Portfolio Website</h2>
                        <p className="md:text-base text-xs mb-2">Gatsby.js | TailwindCSS | JavaScript | HTML | CSS</p>
                        <p className="xl:mt-20 lg:mt-10 md:text-2xl md:leading-9 text-sm leading-4">You are here! This is the latest project I've developed. It uses the Gatsby static site generator and TailwindCSS for styling. Hosting and contact form are handled through Netlify.</p>
                        <span className="md:mt-8 mt-2 grid grid-cols-2 gap-4 items-center md:gap-20">
                            <a href="https://github.com/natalyjazzviolin/natalyDev" className="md:text-2xl bg-black text-white rounded text-center"><button>Github</button></a>
                            <Link to ={"/"} className="md:text-2xl border border-black rounded text-center"><button>Demo</button></Link>
                        </span>
                    </span>
                </div> 
            </div> */}

