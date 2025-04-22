import React from 'react'
import {assets} from "../assets/assets_frontend/assets"

const Header = () => {
    return (
        <div className='flex flex-col 2xl:flex-row md:flex-row flex-wrap bg-indigo-500 rounded-lg mx-3 2xl:mx-30 xl:mx-20 xl:pl-10 2xl:pl-10'>
            {/* --------Left side-------- */}
            <div className='xl:w-1/2 md:pl-5  flex flex-col items-start justify-center gap-4 py-10 m-auto 2xl:py-[10vw] 2xl:mb-[-30px]'>
                <p className='text-lg xl:text-4xl 2xl:text-6xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br />With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28 xl:20 2xl:w-40' src={assets.group_profiles} alt="" />
                    <p className='xl:text-[16px] 2xl:text-[26px]'>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block' />schedule your appointment hassle-free.</p>
                </div>
                <a href="#speciality" className='flex items-center xl:text-xl 2xl:text-2xl gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 2xl:m-0 xl:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3 xl:w-4 2xl:w-6' src={assets.arrow_icon} alt="" />
                </a>
            </div>
            {/* -----------Right side--------- */}
            <div className='xl:w-2/4 2xl:w-1/2 md:w-3/6 sm:w-3/8 relative'>
                <img className='2xl:w-full xl:w-full  md:w-89 2xl:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt=""/>
            </div>
        </div>
    )
}

export default Header;