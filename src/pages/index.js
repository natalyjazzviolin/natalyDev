import React from "react"
import Layout from "../components/layout"




import AboutSection from "../components/homepage.js/aboutSection"
import NYTClone from "../components/homepage.js/NYTClone"
import HomeProjects from "../components/homepage.js/homeProjects"
import MoreProjects from "../components/homepage.js/moreProjects"
import ContactForm from "../components/building blocks/ContactForm"
import BlogSection from "../components/homepage.js/blogSection"

const Index = () => {
  return (
    <Layout>
      <div id="home" className="h-screen -mb-20 overflow-hidden grid place-items-center">
        <AboutSection />
      </div>
      <div id="portfolio" className="-mb-40 grid pt-16 place-items-center">
        <HomeProjects />
      </div>
      {/* <div id="portfolio" className="h-screen overflow-hidden grid pt-16 place-items-center">
      <NYTClone />
      </div> */}
      <div id="portfolio" className="mt-32 mb-20 h-full grid  place-items-center">
        <MoreProjects />
      </div>
      {/* <div id="blog" className="h-screen overflow-hidden grid -mt-4 place-items-center">
        <BlogSection />
      </div> */}
      <div id="contact" className="h-screen overflow-hidden grid -mt-10 md:mt-4 place-items-center">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Index