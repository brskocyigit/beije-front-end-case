import React from 'react'
import FooterBottom from './FooterBottom';
import FooterForm from './FooterForm'
import FooterLinks from './FooterLinks'
import FooterSocialMedia from './FooterSocialMedia';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#262626] w-full mx-auto h-full overflow-hidden">
            <div className='flex flex-col items-center py-24 px-44 max-[1024px]:px-10'>
                <div className="flex items-center justify-between  max-[1024px]:flex-col max-[1024px]:w-full">
                    <FooterForm/>
                    <FooterLinks/>
                    <FooterSocialMedia/>
                </div>
                <div className="h-[1px] bg-white w-full mt-5" />
                <FooterBottom/>
            </div>
        </footer>
    )
}

export default Footer
