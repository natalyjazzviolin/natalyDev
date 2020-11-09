import React from "react"
import { Link } from 'gatsby'
import Button from "../../components/button"

const WiderCard = ({
    leftSide,
    title,
    description,
    button,
}) => {
    return (
        <div className="lg:mt-20 flex flex-wrap max-h-75 divide-gray-400 rounded-lg -mt-6 min-w-25 md:min-w-40 mb-6 border  overflow-hidden">
            <div className="md:min-w-40 rounded-t-lg md:rounded-r-none md:rounded-l-lg min-h-40 max-h-35 md:max-h-full w-full md:w-1/2 grid grid-flow-row auto-rows-max bg-gray-800 overflow-hidden">
                {leftSide}
            </div>
            <div className="md:pl-10 md:pr-32 bg-gray-200 max-h-75 w-full md:w-1/2  grid grid-flow-row auto-rows-max gap-2 place-items-center md:place-items-start">
               <h2 className="lg:min-w-30 lg:text-3xl md:mt-32 md:min-w-40 p-2 leading-tight text-base md:text-lg font-semibold  mt-4">{title}</h2>
               <p className="lg:text-2xl md:-mt-10 md:mr-10 lg:mr-16 text-sm md:text-base p-2 text-center md:text-left">{description}</p>
               <div className="md:-mt-16 grid grid-cols-1 py-4 place-items-center">
                    <Button>{button}</Button>  
                </div> 
               
            </div>
        </div>
    )
}

export default WiderCard;