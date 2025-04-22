import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Myappointments = () => {

  const { doctors } = useContext(AppContext)
  return (
    <div className='2xl:mx-20 xl:mx-5 xl:pl-15 xl:pr-15 2xl:pl-20'>
      <p className='pb-3 mt-12 2xl:text-3xl font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {doctors.slice(0,3).map((item,index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
                <img className='w-32 2xl:w-70 bg-indigo-50 ' src = {item.image} alt="" />
              </div>
              <div className='flex-1 text-sm 2xl:text-2xl text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs 2xl:text-md'>{item.address.line1}</p>
                <p className='text-xs 2xl:text-md'>{item.address.line2}</p>
                <p lassName='text-sm 2xl:text-md mt1'><span className='text-sm 2xl:text-md text-neutral-700 font-medium'>Date & Time:</span> 25, July, 2024 | 8:30 PM</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm 2xl:text-xl text-stone-500 text-center sm:min-w-48 py-4 border rounded hover:bg-indigo-500 hover:text-white transition-all duration-300'>Pay Online</button>
                <button className='text-sm 2xl:text-xl text-stone-500 text-center sm:min-w-48 py-4 border rounded hover:bg-red-500 hover:text-white transition-all duration-300'>Cancel Appointment</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Myappointments