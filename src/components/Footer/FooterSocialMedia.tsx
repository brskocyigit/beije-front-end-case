import React from 'react'
import Facebook from '../../images/social-media-icons/facebook.png'
import Instagram from '../../images/social-media-icons/instagram.png'
import Linkedin from '../../images/social-media-icons/linkedin.png'
import Spotify from '../../images/social-media-icons/spotify.png'
import Twitter from '../../images/social-media-icons/twitter.png'

const FooterSocialMedia: React.FC = () => {
    return (
        <div className="w-1/12 mb-5 max-[1024px]:w-full">
            <ul className="max-[1024px]:flex">
                <a href="https://www.facebook.com/beijewomen/" className="flex p-2">
                    <img src={Facebook} alt="Facebook" className="w-7 h-7 mr-2" />
                    <li className="text-lg text-white max-[1024px]:hidden">Facebook</li>
                </a>
                <a href="https://www.instagram.com/beijewomen/" className="flex p-2">
                    <img src={Instagram} alt="Instagram" className="w-7 h-7 mr-2" />
                    <li className="text-lg text-white max-[1024px]:hidden">Instagram</li>
                </a>
                <a href="https://twitter.com/beijewomen" className="flex p-2">
                    <img src={Twitter} alt="Twitter" className="w-7 h-7 mr-2" />
                    <li className="text-lg text-white max-[1024px]:hidden">Twitter</li>
                </a>
                <a href="https://tr.linkedin.com/company/beije-tr" className="flex p-2">
                    <img src={Linkedin} alt="Linkedin" className="w-7 h-7 mr-2" />
                    <li className="text-lg text-white max-[1024px]:hidden">Linkedin</li>
                </a>
                <a href="https://open.spotify.com/user/ma20bga4ewhwt96kx1p92f2uv" className="flex p-2">
                    <img src={Spotify} alt="Spotify" className="w-7 h-7 mr-2" />
                    <li className="text-lg text-white max-[1024px]:hidden">Spotify</li>
                </a>
            </ul>
        </div>
    )
}

export default FooterSocialMedia
