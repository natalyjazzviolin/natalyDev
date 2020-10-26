import React from "react"
import Layout from "../components/layout"

import AboutSection from "../components/homepage.js/aboutSection"
import NYTClone from "../components/homepage.js/NYTClone"
import ChordHolder from "../components/homepage.js/chordHolder"
import MoreProjects from "../components/homepage.js/moreProjects"
import ContactForm from "../components/homepage.js/contact"

const Index = () => {
  return (
    <Layout>
      <div id="home" class="h-screen overflow-hidden grid place-items-center">
        <AboutSection />
      </div>
      <div id="portfolio" class="h-screen overflow-hidden grid pt-16 place-items-center">
        <NYTClone />
      </div>
      <div id="portfolio" class="h-screen overflow-hidden grid pt-16 place-items-center">
        <ChordHolder />
      </div>
      <div id="portfolio" class="h-screen overflow-hidden grid pt-16 place-items-center">
        <MoreProjects />
      </div>
      <div id="blog" class="h-screen">
        
      </div>
      <div id="contact" class="h-screen">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Index