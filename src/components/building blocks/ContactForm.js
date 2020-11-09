import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Card from "../building blocks/card"
import Button from "../button"

const ContactForm = () => {

    return (
       <div>
        <form method="POST" netlify-honeypot="bot-field" action="#" name="contact" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <label>
            Name
            <input type="text" name="name" id="name" />
        </label>
        <label>
            Email
            <input type="email" name="email" id="email" />
        </label>
        <label>
            Subject
            <input type="text" name="subject" id="subject" />
        </label>
        <label>
            Message
            <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
        </form>
    </div> 
    )
    
}

export default ContactForm;