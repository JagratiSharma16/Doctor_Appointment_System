import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className = 'flex bg-indigo-500 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 xl:px-20 2xl:px-30 my-20 2xl:mx-30 xl:mx-20'>
        {/* ------------Left side----------*/}
        <div className = 'flex-1 py-8 sm:py-16 lg:py-24 lg:pl-5 2xl:py-28 2xl:pl-7'>
            <div className = 'text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white'>
                <p>Book Appointment</p>
                <p className = 'mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className = 'bg-white border-4 xl:text-3xl 2xl:text-4xlx text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
        </div>

        {/*------------Right side---------*/}
        <div className = 'hidden md:block md:w-1/2 lg:w-[370px] 2xl:w-[500px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md'src={assets.appointment_img} alt=""/>
        </div>
    </div>
  )
}

export default Banner