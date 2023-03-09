import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RepeatIcon } from '../../icons/Icon'
import BeijePackage from '../../images/home-page/beije-package-img.webp'
import { State } from '../../redux/index'
import { Normal, Daily, Tampon } from '../../types/type'

const Order = () => {
    const normal: Normal = useSelector((state: State) => state.normalPackage)
    const daily: Daily = useSelector((state: State) => state.dailyPackage)
    const tampon: Tampon = useSelector((state: State) => state.tamponPackage)
    const total = normal.standard + normal.super + normal.superplus + daily.daily + daily.superDaily + tampon.mini + tampon.standardTampon

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
            {(normal.amountStandard !== 0 || normal.amountSuper !== 0 || normal.amountSuperPlus !== 0) && (
                <div className="p-5 border drop-shadow-md bg-white">
                    <h1>Ped Paketleri</h1>
                    <div className="flex space-x-3">
                        {normal.amountStandard !== 0 && <span className="text-sm text-gray-500">{normal.amountStandard} Standard Ped</span>}
                        {normal.amountSuper !== 0 && <span className="text-sm text-gray-500"> {normal.amountSuper} Süper Ped</span>}
                        {normal.amountSuperPlus !== 0 && <span className="text-sm text-gray-500"> {normal.amountSuperPlus} Super+ Ped</span>}
                    </div>
                </div>
            )}
            {(daily.amountDaily !== 0 || daily.amountSuperDaily !== 0) && (
                <div className="p-5 border drop-shadow-md bg-white">
                    <h1>Günlük Ped Paketleri</h1>
                    <div className="flex space-x-3">
                        {daily.amountDaily !== 0 && <span className="text-sm text-gray-500">{daily.amountDaily} Günlük Ped</span>}
                        {daily.amountSuperDaily !== 0 && <span className="text-sm text-gray-500"> {daily.amountSuperDaily} Süper Günlük Ped</span>}
                    </div>
                </div>
            )}
            {(tampon.amountMini !== 0 || tampon.amountStandard !== 0) && (
                <div className="p-5 border drop-shadow-md bg-white">
                    <h1>Tampon Paketleri</h1>
                    <div className="flex space-x-3">
                        {tampon.amountMini !== 0 && <span className="text-sm text-gray-500">{tampon.amountMini} Mini Tampon</span>}
                        {tampon.amountStandard !== 0 && <span className="text-sm text-gray-500"> {tampon.amountStandard} Standard Tampon</span>}
                    </div>
                </div>
            )}
            <div>
                <Link
                    to={'/cart'}
                    className={`p-5 ${
                        total
                            ? 'bg-zinc-800 hover:bg-zinc-900 transform transition-colors duration-300 text-white cursor-pointer '
                            : 'bg-gray-300 text-slate-500'
                    } rounded-full flex items-center justify-center text-xl font-[500] `}
                >
                    Sepete Ekle ₺ {parseFloat(total.toString().substring(0, 5))}
                </Link>
            </div>
        </div>
    )
}

export default Order
