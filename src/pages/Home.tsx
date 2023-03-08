import React from 'react'
import CreatePackage from '../components/Main/CreatePackage';
import Order from '../components/Main/Order';

const Home: React.FC = () => {
    
    return (
        <div className='flex justify-between h-full py-40 px-24 w-full bg-[#f9f5f2] max-[1100px]:flex-col max-[1100px]:space-y-16'>
            <CreatePackage/>
            <Order/>
        </div>
    )
}

export default Home
