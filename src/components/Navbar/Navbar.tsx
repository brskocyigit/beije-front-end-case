import React from 'react'
import { useSelector } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import NavbarLinks from './NavbarLinks'
import NavbarLogo from './NavbarLogo'
import {State} from '../../redux/index'

const Navbar: React.FC = () => {

    const {modal} = useSelector((state:State)=>state.modal);

    return (
        <div className="w-full bg-[#F5F5F5] sticky top-0 z-10">
            <div className="flex justify-between mx-36 p-1">
                <NavbarLogo />
                <NavbarLinks />
                <NavbarIcons modal={modal} />
            </div>
            {modal && (
                <div
                    id="hambuger-menu"
                    className={`animate-slideOpen bg-[#f7f6f5] h-50 drop-shadow-xl absolute w-full`}
                >
                    <ul className="flex flex-col">
                        <a href="/#" className="p-4 mx-7">
                            <li>Ürünler</li>
                        </a>
                        <a href="/#" className="p-4 mx-7">
                            <li>Biz Kimiz</li>
                        </a>
                        <a href="/#" className="p-4 mx-7">
                            <li>Bağış Kültürü</li>
                        </a>
                        <a href="/#" className="p-4 mx-7">
                            <li>Blog</li>
                        </a>
                        <a href="/#" className="p-4 mx-7">
                            <li>Kendi Paketini Oluştur</li>
                        </a>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
