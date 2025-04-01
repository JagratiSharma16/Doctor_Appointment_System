import React from 'react'
import { assets } from "../assets/assets_frontend/assets"


const Footer = () => {
  return (
    <div clasName = 'md:mx-7 xl:mx-7 2xl:mx-7  '>
        <div className = 'flex flex-col px-15 sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm 2xl:text-[15px] ml-14' >
            {/*-----------Left section----------*/}
            <div>
                <img className = 'mb-5 w-40'src ={assets.logo} alt="" />
                <p className = 'w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod voluptatibus nihil vel quia, vero rerum nulla, sapiente, beatae ullam repellat exercitationem quisquam sunt dolores laboriosam pariatur impedit veniam maxime voluptates.</p>
            </div>
            <div>
            {/*-----------Middle section----------*/}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li >
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy and Policy</li>
                    </ul>
                </div>
            </div>
            {/*-----------Right section----------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-9456729474</li>
                    <li>jakeus09@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/*-------Copyright Text----------*/}
            <div>
                <hr className = 'text-gray-200'/>
                <p className='py-5 text-sm text-center 2xl:text-[20px] text-gray-700'>Copyright 2024@ Prescripto - All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer