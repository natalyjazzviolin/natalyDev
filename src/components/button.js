import React from "react"

const Button = ({children}) => {
    return (
    <button className="align-middle text-white text-base lg:text-2xl md:text-lg bg-blue-800  px-6 py-1 md:w-54 overflow-hidden rounded hover:bg-blue-600">{children}</button>
    )
}

export default Button;