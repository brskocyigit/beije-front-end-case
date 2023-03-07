import React from 'react'
import NavbarIcons from './NavbarIcons'
import NavbarLinks from './NavbarLinks'
import NavbarLogo from './NavbarLogo'

const Navbar: React.FC = () => {
    return (
        <div className="w-full bg-[#F5F5F5] sticky top-0 z-10">
            <div className="flex justify-between mx-36 p-1">
                <NavbarLogo />
                <NavbarLinks />
                <NavbarIcons />
            </div>
        </div>
    )
}

export default Navbar
