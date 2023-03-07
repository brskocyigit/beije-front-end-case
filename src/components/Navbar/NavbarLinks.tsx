import React from 'react'

const NavbarLinks: React.FC = () => {
    return (
        <div className="flex items-center justify-center max-[1150px]:hidden max-[1150px]:justify-between">
            <ul className="flex justify-evenly">
                <div className="flex flex-col mr-5 group cursor-pointer">
                    <li className="navbar-li-style">Ürünler</li>
                    <div className="navbar-links" />
                </div>
                <div className="flex flex-col mr-5 group cursor-pointer">
                    <li className="navbar-li-style">Biz Kimiz</li>
                    <div className="navbar-links" />
                </div>
                <div className="flex flex-col mr-5 group cursor-pointer">
                    <li className="navbar-li-style">Bağış Kültürü</li>
                    <div className="navbar-links" />
                </div>
                <div className="flex flex-col mr-5 group cursor-pointer">
                    <li className="navbar-li-style">Blog</li>
                    <div className="navbar-links" />
                </div>
                <div className="flex flex-col group cursor-pointer">
                    <li className="navbar-li-style">Kendi Paketini Oluştur</li>
                    <div className="navbar-links" />
                </div>
            </ul>
        </div>
    )
}

export default NavbarLinks
