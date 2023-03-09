import React, { useState } from 'react'
import DailyPackage from './DailyPackage'
import NormalPackage from './NormalPackage'
import TamponPackage from './TamponPackage'

const CreatePackage = () => {
    const [open, setOpen] = useState({
        normal: true,
        daily: false,
        tampon: false
    })
    return (
        <div className="flex flex-col w-6/12 max-[1100px]:w-full">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl font-[500]">Kendi Paketini Oluştur</h1>
                <span className="cursor-pointer">Nasıl çalışır?</span>
            </div>
            <div className="mb-20">
                <p className="text-[#292828b2]">Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.</p>
            </div>
            <div className="flex space-x-24 mb-10 max-[1150px]:space-x-5 justify-center items-center">
                <div
                    onClick={() => setOpen({ normal: true, daily: false, tampon: false })}
                    className={`${open.normal && 'underline underline-offset-8'} cursor-pointer `}
                >
                    beije Ped
                </div>
                <div
                    onClick={() => setOpen({ normal: false, daily: true, tampon: false })}
                    className={`${open.daily && 'underline underline-offset-8'} cursor-pointer`}
                >
                    beije Günlük Ped
                </div>
                <div
                    onClick={() => setOpen({ normal: false, daily: false, tampon: true })}
                    className={`${open.tampon && 'underline underline-offset-8'} cursor-pointer`}
                >
                    beije Tampon
                </div>
            </div>
            <div className='flex w-full items-center justify-center'>
                {open.normal && <NormalPackage />}
                {open.daily && <DailyPackage />}
                {open.tampon && <TamponPackage />}
            </div>
        </div>
    )
}

export default CreatePackage
