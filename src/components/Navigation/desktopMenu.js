import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"




const DesktopMenu = ({ siteTitle, menuLinks}) => {
    
    return (
        <div class="z-50 w-screen bg-gray-200 border fixed bottom-0 md:fixed md:top-0 md:h-16 md:overflow-hidden px-2 md:mx-0">
           <nav class="uppercase ">
                <div class="col-span-1 grid grid-cols-2 " >
                    
                </div>
                <ul class=" grid grid-cols-4 gap-1 md:gap-6 text-center md:text-lg text-xs">
                    {menuLinks.map(link => (
                        <li
                            key={link.name}
                        >
                            <Link class="block p-4 md:p-6 hover:underline"
                             to={link.link}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav> 
        </div>
    )
}

DesktopMenu.propTypes = {
    siteTitle: PropTypes.string,
}

DesktopMenu.defaultProps = {
    siteTitle: ``,
}

export default DesktopMenu;