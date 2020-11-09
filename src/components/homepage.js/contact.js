import React from "react"


const ContactFormOld = () => {
    return (
        <div>
           <form class="gform" method="POST" action="https://script.google.com/macros/s/AKfycbwBT_mHk9fBqpJOwfukOMgA40-Cs-dvWk9t3JGcz-bB0E1j-sdI/exec">
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Message:
                    <input type="text" name="message" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <input type="submit" value="Submit" /> 
            </form> 
            <script data-cfasync="false" type="text/javascript" src="./building blocks/formSubmissionHandler.js"></script>
        </div>
        
    )
}

export default ContactFormOld;