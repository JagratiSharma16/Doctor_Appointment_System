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
    <div className='flex-row m-10 py-5 '>
      <p className='px-4'>Browse through the doctors specialist.</p>
      <div className='flex relative '>
        <div className=''>
          <p>General Physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroentrologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
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