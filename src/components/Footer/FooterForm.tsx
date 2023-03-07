import React from 'react'

const FooterForm: React.FC = () => {
    return (
        <div className="w-6/12 mb-5 flex flex-col max-[1024px]:w-full">
            <div className="text-white cursor-pointer text-[26px] mb-5 max-[1024px]:text-center">beije.</div>
            <div className="flex flex-col mb-5">
                <span className="font-semibold text-[#ffffffb2] text-lg max-[1024px]:text-center">Arayı açmayalım!</span>
                <span className="text-[#ffffffb2] text-[1rem] max-[1024px]:text-center">Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.</span>
            </div>
            <div className="flex mb-5 max-[1024px]:flex-col">
                <div className="w-3/6 max-[1024px]:w-full">
                    <input
                        className="w-full h-12 bg-[#262626] text-[#ffffffb2] border border:bg-white placeholder:bg-[#262626] rounded-md focus-within:outline-none"
                        type="email"
                        placeholder=" e-mail adresin"
                    />
                </div>
                <div className="flex items-center justify-center ml-5 ">
                    <button className="bg-white max-[1024px]:w-full max-[1024px]:mt-3 px-5 py-3 rounded-full text-xl font-medium hover:bg-zinc-900 transform transition-colors duration-300">
                        Gönder
                    </button>
                </div>
            </div>
            <div>
                <p className="text-[#ffffffb2] max-[1024px]:text-center">
                    Abone olarak, beije KVKK ve Gizlilik Politikası&apos;nı kabul ediyor ve beije&apos;den haber almayı onaylıyorum.
                </p>
            </div>
        </div>
    )
}

export default FooterForm
