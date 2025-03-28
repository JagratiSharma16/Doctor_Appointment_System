import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate= useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='md:text-4xl 2xl:text-6xl font-bold' >Top Doctors to Book</h1>
        <p className='sm:w-1/3 lg:text-2xl text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid md:grid-cols-4 lg:grid-cols-5 md:gap-2 lg:gap-4 pt-5 gap-y-6 px-7 md:ml-6 lg:ml-20 md:mr-6 lg:mr-20  sm-px-0 ' >
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className="border border-blue-200 md:ml-6  rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-15px] transition-all duration-300" key={index}>
                    <img className="bg-blue-50 w-full  " src={item.image} alt="imhg" />
                    <div className='p-7'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500' >
                            <p className='w-2 h-2 rounded-full bg-green-500' ></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality} </p>
                    </div>
                </div>
            ))}
        </div>
        <button className='bg-blue-200 text-gray-600 text-2xl px-12 py-5 rounded-full mt-10'>More</button>
    </div>
  )
}

export default TopDoctors