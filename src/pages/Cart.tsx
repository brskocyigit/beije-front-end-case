import React from 'react'
import EmptyCart from '../images/cart/empty-cart.webp'

const Cart = () => {
    return (
        <div className="flex max-w-7xl mx-auto justify-center h-full py-28 px-24 bg-[#f9f5f2] max-[1100px]:flex-col max-[1100px]:space-y-16 max-[1100px]:px-5 space-x-24 max-[1100px]:space-x-0">
            <div className="w-8/12 flex flex-col space-y-10 max-[1100px]:w-full">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-3xl font-[500]">Sepetim</h1>
                    <span className="text-xs text-gray-500">
                        beije&apos;den aldığın ürünler 2 iş günü içerisinde kapında olur. Açmadığın ürünleri kolayca iade edebilirsin ve beije siparişlerin için
                        kargo ücreti ödemezsin.
                    </span>
                </div>
                <div className="w-full bg-white flex flex-col items-center justify-center h-full p-16 space-y-5 rounded-lg">
                    <img src={EmptyCart} alt="Empty Cart" className="w-36 h-36" />
                    <span className="text-lg font-[500]">Sepetin boş</span>
                    <span>Bu durumu hemen değiştirmeye ne dersin? :)</span>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="w-4/12 text-center text-sm bg-zinc-800 hover:bg-black transform transition-colors duration-300 text-white py-3 rounded-full cursor-pointer">
                        Tüm Paketleri Gör
                    </div>
                </div>
            </div>
            <div className="w-4/12 h-full flex flex-col space-y-5 bg-white rounded-lg p-8 max-[1100px]:w-full ">
                <h1 className='text-xl font-[500]'>Özet</h1>
                <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-500'>Ürünlerin Fiyatı(0)</span>
                    <span className='text-sm'>0,00</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-sm text-green-700'>İndirim</span>
                    <span className='text-sm text-green-700'>-0,00</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-500'>Kargo Ücreti</span>
                    <span className='text-sm'>0,00</span>
                </div>
                <div className='h-[0.5px] w-full bg-gray-300'/>
                <div className='flex flex-col justify-between items-center'>
                   <span className='p-3 flex font-[500]'>Promosyon Kodu Gir</span>
                   <div className='flex justify-between items-center space-x-5'>
                      <input className="p-3 focus-within:outline-none border border-gray-300 rounded-lg" placeholder='Kodunuz'/>
                      <div className='w-24 h-12 bg-zinc-700 text-white flex items-center justify-center cursor-pointer rounded-full hover:bg-black transform transition-colors duration-300'>Uygula</div>
                   </div>
                </div>
                <div className='h-[0.5px] w-full bg-gray-300'/>
                <div className='flex justify-between'>
                  <h1 className='text-md text-gray-500'>Toplam</h1>
                  <span>0,00</span>
                </div>
                <div className='flex items-center justify-center'>
                  <div className='w-full bg-black text-white flex items-center justify-center py-3 rounded-full cursor-pointer'>Ödemeye Geç</div>
                </div>
            </div>
        </div>
    )
}

export default Cart
