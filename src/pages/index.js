import React from "react"
import Layout from "../components/layout"

import AboutSection from "../components/homepage.js/aboutSection"
import NYTClone from "../components/homepage.js/NYTClone"
import ChordHolder from "../components/homepage.js/chordHolder"
import MoreProjects from "../components/homepage.js/moreProjects"
import ContactForm from "../components/building blocks/ContactForm"
import BlogSection from "../components/homepage.js/blogSection"

const Index = () => {
  return (
    <Layout>
      <div id="home" className="h-screen overflow-hidden grid place-items-center">
        <AboutSection />
      </div>
      <div id="portfolio" className="h-screen overflow-hidden grid pt-16 place-items-center">
        <NYTClone />
      </div>
      <div id="portfolio" className="h-screen overflow-hidden grid pt-16 place-items-center">
        <ChordHolder />
      </div>
      <div id="portfolio" className="h-screen overflow-hidden grid pt-16 place-items-center">
        <MoreProjects />
      </div>
      <div id="blog" className="h-screen overflow-hidden grid -mt-4 place-items-center">
        <BlogSection />
      </div>
      <div id="contact" className="h-screen overflow-hidden grid -mt-4 place-items-center">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Index