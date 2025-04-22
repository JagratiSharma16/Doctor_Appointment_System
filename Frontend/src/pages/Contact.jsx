import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl 2xl:text-4xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col items-center justify-center md:flex-row gap-10 mb-28 text-sm 2xl:text-xl'>
        <img className='w-full px-7 md:max-w-[360px] 2xl:max-w-[400px]' src = {assets .contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-4'> 
          <p className='font-semibold text-lg 2xl:text-3xl text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>54709 Willms Station <br />Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br/>Email: greatstackdev@gmail.com</p>
          <p className='text-gray-600 font-semibold text-lg 2xl:text-2xl'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm 2xl:text-lg hover:bg-black  hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact