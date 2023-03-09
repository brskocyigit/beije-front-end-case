import React from 'react'
import CreatePackage from '../components/Main/CreatePackage';
import Order from '../components/Main/Order';

const Home: React.FC = () => {
    
    return (
        <div className='flex max-w-7xl mx-auto justify-between h-full py-40 px-24 bg-[#f9f5f2] max-[1100px]:flex-col max-[1100px]:space-y-16 overflow-hidden max-[1100px]:px-5'>
            <CreatePackage/>
            <Order/>
        </div>
    )
}

export default Home
