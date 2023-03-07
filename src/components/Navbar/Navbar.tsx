import React from 'react'
import NavbarIcons from './NavbarIcons'
import NavbarLinks from './NavbarLinks'
import NavbarLogo from './NavbarLogo'


const Navbar: React.FC = () => {
    return (
        <div>
            <div className="w-full bg-[#F5F5F5]">
                <div className="flex justify-between mx-36 p-1">
                    <NavbarLogo/>
                    <NavbarLinks/>
                    <NavbarIcons/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
