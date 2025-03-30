import React, { use, useContext, useEffect, useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams()
  const [ filterdoc, setfilterdoc ] = useState([])
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()
  const applyfilter = ()=>{
    if (speciality) {
      setfilterdoc(doctors.filter(doc => doc.speciality===speciality))
    }else{
      setfilterdoc(doctors) 
    }
  }

  useEffect(()=>{
    applyfilter()
  },[ doctors, speciality])
  return (
    <div className='px-19'>
      <p className='text-gray-600 xl:text-[20px] 2xl:text-[30px]'>Browse through the doctors specialist.</p>
      <div className='flex flex-col md:flex-row items-start gap-5 mt-5 xl:mt-7 2xl:mt-10'>
        <div className='flex-col gap-4 text-sm text-gray-600'>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer`}>General Physician</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer`}>Neurologist</p>
          <p className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-grey-300 rounded transition-all cursor-pointer`}>Gastroentrologist</p>
        </div>
        <div className=' w-full grid xl:grid-cols-4 2xl:grid-cols-5 xl:gap-2 2xl:gap-4 2xl:pt-5 xl:pt-0 gap-y-6 xl:px-2 2xl:px-6 xl:ml-6 2xl:ml-20 xl:mr-6 2xl:mr-20  sm-px-0  grid-cols-auto gap-4 '>
          {
            filterdoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className="border border-blue-200 md:ml-6  rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-15px] transition-all duration-300" key={index}>
                <img className="bg-blue-50 w-full  " src={item.image} alt="imhg" />
                <div className='p-7'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500' >
                    <p className='w-2 h-2 rounded-full bg-green-500' ></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality} </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Doctors