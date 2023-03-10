import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className="h-full flex justify-between mx-auto max-[1150px]:flex-col">
            <div className="w-6/12 h-full max-[1150px]:w-full">
                <img src="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.8b653761.webp&w=1920&q=75" alt="Login" />
            </div>
            <div className="w-6/12 h-full space-y-16 max-[1150px]:w-full p-2">
                <div className="flex flex-col items-center justify-center pt-10 space-y-5">
                    <h1 className="text-5xl font-[500] ">Merhaba</h1>
                    <span>beije&apos;e hoş geldin!</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to={'/auth/login'} className="cursor-pointer space-y-3 flex flex-col items-center justify-center">
                        <span className="text-sm font-[500]">Giriş Yap</span>
                        <div className="h-[2px] bg-black w-36" />
                    </Link>
                    <Link to={'/auth/sign-up'} className="cursor-pointer space-y-3 flex flex-col items-center justify-center">
                        <span className="text-sm font-[500] text-gray-400">Üye Ol</span>
                        <div className="h-0 bg-black w-36" />
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center space-y-5 w-full">
                    <input className='py-4 px-3 w-6/12 bg-[#ffffffb2] placeholder:bg-[#ffffffb2] focus-within:outline-none rounded-md border border-gray-400' placeholder='e-mail adresin' type="email"/>
                    <input className='py-4 px-3 w-6/12 bg-[#ffffffb2] placeholder:bg-[#ffffffb2] focus-within:outline-none rounded-md border border-gray-400' placeholder='şifren' type="password"/>
                    <span className='text-sm cursor-pointer w-6/12 flex justify-end'>Şifremi unuttum</span>
                    <div className='bg-zinc-800 w-6/12 p-5 text-center rounded-full cursor-pointer hover:bg-black transform transition-colors duration-300 text-white'>Giriş Yap</div>
                </div>
            </div>
        </div>
    )
}

export default Login
