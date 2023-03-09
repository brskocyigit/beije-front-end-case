import React from 'react'
import { Link } from 'react-router-dom'
import SignUpImg from '../images/login/sign-up.webp'

const Register = () => {
    return (
        <div className="h-full flex justify-between mx-auto max-[1150px]:flex-col">
            <div className="w-6/12 max-[1150px]:w-full bg-contain bg-center">
                <img src="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsign-up.41526b0e.webp&w=1920&q=75" alt="Login" className='h-full bg-contain bg-center' />
            </div>
            <div className="w-6/12 h-full space-y-16 max-[1150px]:w-full p-5">
                <div className="flex flex-col items-center justify-center pt-10 space-y-5">
                    <h1 className="text-5xl font-[500] ">Merhaba</h1>
                    <span>beije&apos;e hoş geldin!</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to={'/auth/login'} className="cursor-pointer space-y-3 flex flex-col items-center justify-center">
                        <span className="text-sm font-[500] text-gray-400">Giriş Yap</span>
                        <div className="h-0 bg-black w-36" />
                    </Link>
                    <Link to={'auth/sign-up'} className="cursor-pointer space-y-3 flex flex-col items-center justify-center">
                        <span className="text-sm font-[500]">Üye Ol</span>
                        <div className="h-[2px] bg-black w-36" />
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center space-y-2 w-full">
                    <input
                        className="py-4 px-3 w-7/12 bg-[#ffffffb2] placeholder:bg-[#ffffffb2] focus-within:outline-none rounded-md border border-gray-400"
                        type="text"
                        placeholder="İsmin"
                    />
                    <input
                        className="py-4 px-3 w-7/12 bg-[#ffffffb2] placeholder:bg-[#ffffffb2] focus-within:outline-none rounded-md border border-gray-400"
                        type="text"
                        placeholder="Soyismin"
                    />
                    <input
                        className="py-4 px-3 w-7/12 bg-[#ffffffb2] placeholder:bg-[#ffffffb2] focus-within:outline-none rounded-md border border-gray-400"
                        type="email"
                        placeholder="e-mail adresin"
                    />
                    <input
                        className="py-4 px-3 w-7/12 bg-[#ffffffb2] placeholder:bg-[#ffffffb2] focus-within:outline-none rounded-md border border-gray-400"
                        type="password"
                        placeholder="şifren"
                    />
                    <span className="flex items-center justify-center w-6/12 text-xs text-gray-500">
                        Şifren en az bir harf, rakam veya özel karakter içermeli ve en az 6 karakterden oluşmalı.
                    </span>
                    <input
                        className="py-4 px-3 w-7/12 bg-[#ffffffb2] placeholder:bg-[#ffffffb2] focus-within:outline-none rounded-md border border-gray-400"
                        type="phone"
                        placeholder="(+90)(5-- --- -- --)"
                    />
                    <input
                        className="py-4 px-3 w-7/12 bg-[#ffffffb2] placeholder:bg-[#ffffffb2] focus-within:outline-none rounded-md border border-gray-400"
                        type="date"
                        placeholder="şifren"
                    />
                    <div className="flex w-7/12 space-x-5 checked:bg-black">
                        <input type="checkbox" />
                        <span className="text-sm">Üyelik Sözleşmesi’ni ve Gizlilik Sözleşmesi’ni okudum, anladım ve koşullarını kabul ediyorum.</span>
                    </div>
                    <div className="flex w-7/12 space-x-5 checked:bg-black">
                        <input type="checkbox" />
                        <span className="text-sm">Açık Rıza Metni’ni okudum, anladım ve koşullarını kabul ediyorum.</span>
                    </div>
                    <div className="flex w-7/12 space-x-5 checked:bg-black">
                        <input type="checkbox" />
                        <span className="text-sm">KVKK Aydınlatma Metni’ni okudum, anladım ve kabul ediyorum.</span>
                    </div>
                    <div className="bg-zinc-800 w-6/12 p-3 text-center rounded-md cursor-pointer hover:bg-black transform transition-colors duration-300 text-white">
                        Üye ol
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
