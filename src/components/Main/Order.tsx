import React from 'react'
import { RepeatIcon } from '../../icons/Icon'
import BeijePackage from '../../images/home-page/beije-package-img.webp'

const Order = () => {
    return (
        <div className="w-5/12 p-10 bg-white rounded-xl space-y-5 max-[1100px]:w-full">
            <div className="text-3xl font-[500]">Özel Paketin</div>
            <div className="w-full p-3 border border-gray-200 bg-white rounded-xl drop-shadow-md flex space-x-3">
                <RepeatIcon className="w-6 h-6 flex justify-center items-center" />
                <span>2 ayda 1 gönderim</span>
            </div>
            <div className="flex">
                <img src={BeijePackage} alt="Paket" className="w-full" />
            </div>
            <div>
                <div className="p-5 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer text-xl font-[500] text-slate-500">
                    Sepete Ekle(₺0,00)
                </div>
            </div>
        </div>
    )
}

export default Order
