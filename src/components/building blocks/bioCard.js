import React from "react"
import { Link } from 'gatsby'
import Button from "../../components/button"

const BioCard = ({
    leftSide,
    title,
    description,
    buttonOne,
    buttonTwo,
    blog,
    blogText
}) => {
    return (
        <div className="lg:mt-20 flex flex-wrap max-h-75 divide-gray-400 rounded-lg -mt-6 min-w-25 mb-6 border  overflow-hidden">
            <div className="md:min-w-30 min-h-full md:max-h-full w-full md:w-1/2 grid grid-flow-row auto-rows-max bg-gray-800 overflow-hidden">
                {leftSide}
            </div>
            <div className="md:min-w-30 md:px-10 px-8 bg-gray-200 max-h-75 w-full md:w-1/2 px-2  grid grid-flow-row auto-rows-max gap-2 place-items-center md:place-items-start">
               <h2 className="lg:text-2xl md:text-xl leading-tight text-base font-semibold p-2 md:mt-10">{title}</h2>
                <p className="lg:text-xl md:text-base md:mt-4 lg:mr-16 text-xs sm:p-2 text-center md:text-left">{description}<br></br><Link className="underline" to={blog}>{blogText}</Link></p>
               <div className="md:mt-2 grid grid-cols-2 gap-12 p-2 place-items-center">
                    <Button>{buttonOne}</Button>  
                    <Button>{buttonTwo}</Button> 
                </div> 
               
            </div>
        </div>
    )
}

export default BioCard;