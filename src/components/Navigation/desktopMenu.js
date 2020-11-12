import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"




const DesktopMenu = ({ siteTitle, menuLinks}) => {
    
    return (
        <div className="z-50 w-screen bg-gray-200 border fixed bottom-0 md:fixed md:top-0 md:h-16 md:overflow-hidden px-2 md:mx-0">
           <nav className="uppercase ">
                <div className="col-span-1 grid grid-cols-2 " >
                    
                </div>
                <ul className=" grid grid-cols-3 gap-1 md:gap-6 text-center md:text-lg text-xs">
                    {menuLinks.map(link => (
                        <li className="p-4 md:p-6"
                            key={link.name}
                        >
                            <Link class="block  hover:underline"
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