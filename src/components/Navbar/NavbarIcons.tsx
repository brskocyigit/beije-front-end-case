import React from 'react'
import { AuthIcon, GroceryIcon} from '../../icons/Icon'

const NavbarIcons: React.FC = () => {
    return (
        <div className="flex justify-between p-5">
            <div className="navbar-logo-style">
                <GroceryIcon className="w-7 h-7" />
            </div>
            <div className="navbar-logo-style">
                <AuthIcon className="w-7 h-7" />
            </div>
        </div>
    )
}

export default NavbarIcons
