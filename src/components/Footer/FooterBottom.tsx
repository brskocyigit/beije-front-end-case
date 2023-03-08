import React from 'react'
import MasterCard from '../../images/footer-icons/master-card.png';
import Visa from '../../images/footer-icons/payment.png';

const FooterBottom: React.FC = () => {
    return (
        <>
            <div className="flex mt-5 max-[1024px]:flex-col">
                <span className="mr-3 mb-2 text-center text-[#ffffffb2]">2023 beije.Tüm hakları saklıdır</span>
                <span className="mr-3 mb-2 text-center text-[#ffffffb2] cursor-pointer">KVKK Aydınlatma Metni</span>
                <span className="mr-3 mb-2 text-center text-[#ffffffb2] cursor-pointer">Üyelik Sözleşmesi</span>
                <span className="mr-3 mb-2 text-center text-[#ffffffb2] cursor-pointer">Gizlilik Politikası</span>
                <span className="mr-3 mb-2 text-center text-[#ffffffb2] cursor-pointer">Çerez Politikası</span>
                <span className="mr-3 mb-2 text-center text-[#ffffffb2] cursor-pointer">Test Sonuçları</span>
                <span className="mr-3 mb-2 text-center text-[#ffffffb2] cursor-pointer">
                    <span>EN </span> | <span className="text-white"> TR </span>
                </span>
            </div>
            <div className="flex">
                <img src={MasterCard} width="36" height="36" alt="Master Card" className="mr-2" />
                <img src={Visa} width="36" height="36" alt="Master Card" />
            </div>
        </>
    )
}

export default FooterBottom
