import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinks: React.FC = () => {
    return (
        <div className="flex items-center justify-center max-[1150px]:hidden max-[1150px]:justify-between">
            <ul className="flex justify-evenly">
                <Link to={'/urunler'} className="flex flex-col mr-5 group cursor-pointer">
                    <li className="navbar-li-style">Ürünler</li>
                    <div className="navbar-links" />
                </Link>
                <Link to={'/know-us'} className="flex flex-col mr-5 group cursor-pointer">
                    <li className="navbar-li-style">Biz Kimiz</li>
                    <div className="navbar-links" />
                </Link>
                <Link to={'/donation-culture'} className="flex flex-col mr-5 group cursor-pointer">
                    <li className="navbar-li-style">Bağış Kültürü</li>
                    <div className="navbar-links" />
                </Link>
                <Link to={'https://www.dongu.beije.co'} className="flex flex-col mr-5 group cursor-pointer">
                    <li className="navbar-li-style">Blog</li>
                    <div className="navbar-links" />
                </Link>
                <Link to={'/custom-packet'} className="flex flex-col group cursor-pointer">
                    <li className="navbar-li-style">Kendi Paketini Oluştur</li>
                    <div className="navbar-links" />
                </Link>
            </ul>
        </div>
    )
}

export default NavbarLinks
