import React from "react"
import { Link } from 'gatsby'
import Button from "../../components/button"

const Card = ({
    leftSide,
    title,
    description,
    buttonOne,
    buttonTwo,
    blog
}) => {
    return (
        <div class="flex flex-wrap max-h-75 divide-gray-400 rounded-lg -mt-6 min-w-25 mb-6 border  overflow-hidden">
            <div class="min-h-40 md:max-h-full w-full md:w-1/2 grid grid-flow-row auto-rows-max bg-gray-800 overflow-hidden">
                {leftSide}
            </div>
            <div class="px-8 bg-gray-200 max-h-75 w-full md:w-1/2 px-2  grid grid-flow-row auto-rows-max gap-2 place-items-center md:place-items-start">
               <h2 class="leading-tight md:text-4xl lg:text-5xl text-2xl font-semibold p-2 md:mt-10">{title}</h2>
               <p class="lg:mr-16 md:text-2xl text-lg lg:text-3xl sm:p-2 text-center md:text-left">{description}<br></br><Link className="underline" to={blog}>Read more on the blog.</Link></p>
               <div className="grid grid-cols-2 gap-12 p-2 place-items-center">
                    <Button>{buttonOne}</Button>  
                    <Button>{buttonTwo}</Button> 
                </div> 
               
            </div>
        </div>
    )
}

export default Card;
