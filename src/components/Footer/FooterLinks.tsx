import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinks: React.FC = () => {
    return (
        <div className="w-5/12 mb-5 flex max-[1024px]:w-full">
            <ul>
                <Link to="/packets">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Paketler</li>
                </Link>
                <Link to="/product/trial">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Deneme Paketi</li>
                </Link>
                <Link to="https://www.linkedin.com/company/beije-tr/">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Ekibimize Katıl</li>
                </Link>
            </ul>
            <ul>
                <Link to="https://www.dongu.beije.co">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Blog</li>
                </Link>
                <Link to="/know-us/faqs">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Sıkça Sorulan Sorular</li>
                </Link>
                <Link to="/know-us/why-beije">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Biz Kimiz?</li>
                </Link>
            </ul>
        </div>
    )
}

export default FooterLinks
