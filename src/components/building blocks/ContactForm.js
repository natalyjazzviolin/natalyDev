import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Card from "../building blocks/card"
import Button from "../button"

const ContactForm = () => {

    return (
       <div >
        <form className="grid grid-flow-row auto-rows-max" method="POST" netlify-honeypot="bot-field" action="#" name="contact" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <label className="md:my-4">
            Name  
            <input className=" md:min-w-50 w-full inline-block box-border border rounded-lg" type="text" name="name" id="name" />
        </label>
        <label className="md:my-4">
            Email
            <input className="md:min-w-50 w-full inline-block border rounded-lg" type="email" name="email" id="email" />
        </label>
        <label className="md:my-4">
            Subject
            <input className="md:min-w-50 w-full inline-block border rounded-lg" type="text" name="subject" id="subject" />
        </label>
        <label className="md:my-4">
            Message
            <textarea className="md:min-w-50 w-full inline-block align-top border rounded-lg" name="message" id="message" rows="5" />
        </label>
        <button className="my-4 text-white bg-green-600 rounded-lg mx-10 py-1" type="submit">Send</button>
        <input className="rounded-lg mx-10 py-1"type="reset" value="Clear" />
        </form>
    </div> 
    )
    
}

export default ContactForm;