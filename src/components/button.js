import React from "react"

const Button = ({children}) => {
    return (
    <button class="text-white text-xl md:text-2xl lg:text-4xl bg-blue-800 py-2 px-6 md:w-54 overflow-hidden rounded hover:bg-blue-600 active:bg-blue-600">{children}</button>
    )
}

export default Button;