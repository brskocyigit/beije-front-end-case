import React from 'react'
import { useSelector } from 'react-redux'
import NavbarIcons from './NavbarIcons'
import NavbarLinks from './NavbarLinks'
import NavbarLogo from './NavbarLogo'
import { State } from '../../redux/index'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    //Ekran küçüldüğünde çıkan hamburger menüye tıklanıp tıklanmadığını kontrol etmek için kullandım.
    const { modal } = useSelector((state: State) => state.modal)

    return (
        <div className="w-full bg-[#F5F5F5] sticky top-0 z-10">
            <div className="flex justify-between max-w-5xl mx-auto p-1 max-[1150px]:mx-2 ">
                <NavbarLogo />
                <NavbarLinks />
                <NavbarIcons modal={modal} />
            </div>
            {modal && (
                <div id="hambuger-menu" className={`animate-slideOpen bg-[#f7f6f5] h-50 drop-shadow-xl absolute w-full`}>
                    <ul className="flex flex-col">
                        <Link to={'/urunler'} className="p-4 mx-7">
                            Ürünler
                        </Link>
                        <Link to={'/know-us'} className="p-4 mx-7">
                            Biz Kimiz
                        </Link>
                        <Link to={'/donation-culture'} className="p-4 mx-7">
                            Bağış Kültürü
                        </Link>
                        <Link to={'https://www.dongu.beije.co'} className="p-4 mx-7">
                            Blog
                        </Link>
                        <Link to={'/custom-packet'} className="p-4 mx-7">
                            Kendi Paketini Oluştur
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
