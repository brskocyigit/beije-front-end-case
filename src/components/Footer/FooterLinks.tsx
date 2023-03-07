import React from 'react'

const FooterLinks: React.FC = () => {
    return (
        <div className="w-5/12 mb-5 flex max-[1024px]:w-full">
            <ul>
                <a href="/#">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Paketler</li>
                </a>
                <a href="/#">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Deneme Paketi</li>
                </a>
                <a href="/#">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Ekibimize Katıl</li>
                </a>
            </ul>
            <ul>
                <a href="/#">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Blog</li>
                </a>
                <a href="/#">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Sıkça Sorulan Sorular</li>
                </a>
                <a href="/#">
                    <li className="text-xl tracking-[-0.01em] text-white py-2 px-4">Biz Kimiz?</li>
                </a>
            </ul>
        </div>
    )
}

export default FooterLinks
