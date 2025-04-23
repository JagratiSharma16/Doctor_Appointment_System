import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId, speciality}) => {
    const {doctors} = useContext(AppContext)
    const [reldoc,setRelDoc]= useState([])
    const navigate = useNavigate()

useEffect(()=>{
    if (doctors.length > 0 && speciality)
        {
        const doctordata=  doctors.filter((doc)=> doc.speciality === speciality && doc._id != docId)
        setRelDoc(doctordata)
    }

},[doctors,docId,speciality])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 2xl:mx-30 xl:mx-20'>
        <h1 className='md:text-4xl 2xl:text-5xl font-bold' >Related Doctors</h1>
        <p className='sm:w-1/3 lg:text-2xl text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid xl:grid-cols-4 2xl:grid-cols-5 xl:gap-2 2xl:gap-4 pt-5 gap-y-6 px-7 xl:ml-6 2xl:ml-20 xl:mr-6 2xl:mr-20  sm-px-0 ' >
            {reldoc.slice(0,10).map((item,index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="border border-blue-200 md:ml-6  rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-15px] transition-all duration-300" key={index}>
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
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-200 text-gray-600 text-2xl px-12 py-5 rounded-full mt-10'>More</button>
    </div>
  )
}

export default RelatedDoctors