import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";
import Card from "../components/building blocks/card"
import Button from "../components/button"
import Layout from "../components/layout"
import ChordHolderImg from "../images/chordHolderSquare.jpeg"

const Projects = () => {
    return (
        <Layout>
            <div className="flex flex-wrap md:mt-32">
                <div className="h-screen w-full grid grid-flow-row md:grid-flow-col auto-rows-max">
                    <span className="md:mr-2 mt-10 md:min-h-50 max-h-35 overflow-hidden">
                        <img src={ChordHolderImg} alt="Chord Holder Screenshot" />
                    </span>
                    <span className="md:mt-10 -mt-10">
                        <h2 className="md:text-4xl text-base">Chord Holder</h2>
                        <p className="md:text-base text-xs mb-2">Tonal.js | Tone.js | Parcel | JavaScript | HTML | CSS</p>
                        <p className="xl:mt-20 lg:mt-10 md:text-2xl md:leading-9 text-sm leading-4">Chord Holder is a web application that can play two chords and toggle between them. It's written in 'vanilla' JavaScript and uses Tone.js for chord text input processing and Tonal.js for sound production.</p>
                        <span className="md:mt-8 mt-2 grid grid-cols-2 gap-4 items-center md:gap-20">
                            <a className="md:text-2xl bg-black text-white rounded text-center"><button>Github</button></a>
                            <a className="md:text-2xl border border-black rounded text-center"><button>Demo</button></a>
                        </span>
                    </span>
                </div> 
            </div>
            <div className="flex flex-wrap md:mt-32">
                <div className="h-screen w-full grid grid-flow-row md:grid-flow-col auto-rows-max">
                    <span className="md:mr-2 mt-10 md:min-h-50 max-h-35 overflow-hidden">
                        <img src={ChordHolderImg} alt="Chord Holder Screenshot" />
                    </span>
                    <span className="md:mt-10 -mt-10">
                        <h2 className="md:text-4xl text-base">Chord Holder</h2>
                        <p className="md:text-base text-xs mb-2">Tonal.js | Tone.js | Parcel | JavaScript | HTML | CSS</p>
                        <p className="xl:mt-20 lg:mt-10 md:text-2xl md:leading-9 text-sm leading-4">Chord Holder is a web application that can play two chords and toggle between them. It's written in 'vanilla' JavaScript and uses Tone.js for chord text input processing and Tonal.js for sound production.</p>
                        <span className="md:mt-8 mt-2 grid grid-cols-2 gap-4 items-center md:gap-20">
                            <a className="md:text-2xl bg-black text-white rounded text-center"><button>Github</button></a>
                            <a className="md:text-2xl border border-black rounded text-center"><button>Demo</button></a>
                        </span>
                    </span>
                </div> 
            </div>
            <div className="flex flex-wrap md:mt-32">
                <div className="h-screen w-full grid grid-flow-row md:grid-flow-col auto-rows-max">
                    <span className="md:mr-2 mt-10 md:min-h-50 max-h-35 overflow-hidden">
                        <img src={ChordHolderImg} alt="Chord Holder Screenshot" />
                    </span>
                    <span className="md:mt-10 -mt-10">
                        <h2 className="md:text-4xl text-base">Chord Holder</h2>
                        <p className="md:text-base text-xs mb-2">Tonal.js | Tone.js | Parcel | JavaScript | HTML | CSS</p>
                        <p className="xl:mt-20 lg:mt-10 md:text-2xl md:leading-9 text-sm leading-4">Chord Holder is a web application that can play two chords and toggle between them. It's written in 'vanilla' JavaScript and uses Tone.js for chord text input processing and Tonal.js for sound production.</p>
                        <span className="md:mt-8 mt-2 grid grid-cols-2 gap-4 items-center md:gap-20">
                            <a className="md:text-2xl bg-black text-white rounded text-center"><button>Github</button></a>
                            <a className="md:text-2xl border border-black rounded text-center"><button>Demo</button></a>
                        </span>
                    </span>
                </div> 
            </div>
            <div className="flex flex-wrap md:mt-32">
                <div className="h-screen w-full grid grid-flow-row md:grid-flow-col auto-rows-max">
                    <span className="md:mr-2 mt-10 md:min-h-50 max-h-35 overflow-hidden">
                        <img src={ChordHolderImg} alt="Chord Holder Screenshot" />
                    </span>
                    <span className="md:mt-10 -mt-10">
                        <h2 className="md:text-4xl text-base">Chord Holder</h2>
                        <p className="md:text-base text-xs mb-2">Tonal.js | Tone.js | Parcel | JavaScript | HTML | CSS</p>
                        <p className="xl:mt-20 lg:mt-10 md:text-2xl md:leading-9 text-sm leading-4">Chord Holder is a web application that can play two chords and toggle between them. It's written in 'vanilla' JavaScript and uses Tone.js for chord text input processing and Tonal.js for sound production.</p>
                        <span className="md:mt-8 mt-2 grid grid-cols-2 gap-4 items-center md:gap-20">
                            <a className="md:text-2xl bg-black text-white rounded text-center"><button>Github</button></a>
                            <a className="md:text-2xl border border-black rounded text-center"><button>Demo</button></a>
                        </span>
                    </span>
                </div> 
            </div>
            
        </Layout>
    )
}

export default Projects;