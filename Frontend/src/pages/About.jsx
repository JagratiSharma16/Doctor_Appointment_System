import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div >
      <div className = 'text-center xl:text-2xl 2xl:text-4xl pt-10 text-gray-500'>
         <p>ABOUT <span className = 'text-gray-700 font-medium'>US</span></p>
      </div>

      <div className = 'my-10 flex flex-col justify-center md:flex-row gap-12 2xl:mx-20 mx-9  xl:mx-10 xl:pl-30 2xl:pl-20'>
         <img className = 'w-full  md:max-w-[360px] 2xl:max-w-[400px] 2xl:max-h-[400px]' src={assets.about_image} alt="" />
         <div className = 'flex flex-col justify-center gap-6 md:w-2/4 2xl:text-xl xl:text-sm  text-gray-600'>
          <p>Welcome to Prescripto. Your Trusted Partner In Managing Your Healthcare Needs Conveniently and Efficiently. At Prescripto, we understand the Challenges Individuals face when it comes to Scheduling Doctor Appointments and Managing the Health Records.</p>
          <p>Prescripto is commited to Excellence In Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Care, Prescripto Is Here to support You Every Step Of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our Vision At Prescripto is to create a seamless Healthcare Experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
         </div>
      </div>

      <div className='xl:text-xl 2xl:text-3xl my-4 2xl:mx-20 xl:mx-5 pl-20 xl:pr-20 '>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row  mx-9 mb-20 2xl:mx-20 xl:mx-5 2xl:pl-20 xl:pl-20 xl:pr-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 2xl:text-[20px] xl:text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined Appointment Scheduling That Fits into Your Busy Lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 2xl:text-[20px] text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 2xl:text-[20px] text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-600 cursor cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About