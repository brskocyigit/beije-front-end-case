import React from 'react';
import Logo from '../../images/logo/beije-logo.png';

const NavbarLogo: React.FC = () => {
    return (
        <div className="flex items-center justify-center cursor-pointer">
            <img src={Logo} alt="Logo" width="72" height="72" />
        </div>
    )
}

export default NavbarLogo
