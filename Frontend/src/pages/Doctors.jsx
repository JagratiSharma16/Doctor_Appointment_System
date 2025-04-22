import React, { use, useContext, useEffect, useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams()
  const [ filterdoc, setfilterdoc ] = useState([])
  const [showFilter,setShowFilter]=useState(false)
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
    <div className='px-4 2xl:px-19'>
      <p className='text-gray-600 xl:text-[20px] 2xl:text-[30px] 2xl:ml-10'>Browse through the doctors specialist.</p>
      <div className='flex flex-col md:flex-row items-start gap-5 mt-5 xl:mt-7 2xl:ml-10  '>
        <button className={`px-3 py-1 border rounded text-sm transition-all sm:hidden ${showFilter? "bg-indigo-500 text-white ": " "}`} onClick={()=> setShowFilter(prev=> !prev)}>Filters</button>
        <div className={` flex-col xl:gap-4 2xl:gap-6 text-sm text-gray-600 ${showFilter ? "flex" :"hidden sm:flex"}`}>
          <p onClick={()=> speciality === "General Physician" ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[90vw] sm:w-auto pl-3 py-1.5 xl:pr-16 2xl:pr-8 gap-20 2xl:py-3 border 2xl:text-[25px] border-grey-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ?"bg-indigo-200 text-black " : ""}`}>General Physician</p>
          <p onClick={()=> speciality === "Gynecologist" ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[90vw]  sm:w-auto pl-3 py-1.5  xl:pr-16 2xl:pr-10 gap-20 2xl:py-3 border 2xl:text-[25px] border-grey-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ?"bg-indigo-200 text-black " : ""}`}>Gynecologist</p>
          <p onClick={()=> speciality === "Dermatologist" ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[90vw]  sm:w-auto pl-3 py-1.5 xl:pr-16 2xl:pr-10 gap-20 2xl:py-3 border 2xl:text-[25px] border-grey-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ?"bg-indigo-200 text-black " : ""}`}>Dermatologist</p>
          <p onClick={()=> speciality === "Pediatricians" ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[90vw]  sm:w-auto pl-3 py-1.5 xl:pr-16 2xl:pr-10 gap-20 2xl:py-3 border 2xl:text-[25px] border-grey-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ?"bg-indigo-200 text-black " : ""}`}>Pediatricians</p>
          <p onClick={()=> speciality === "Neurologist" ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[90vw]  sm:w-auto pl-3 py-1.5 xl:pr-16 2xl:pr-10 gap-20 2xl:py-3 border 2xl:text-[25px] border-grey-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ?"bg-indigo-200 text-black " : ""}`}>Neurologist</p>
          <p onClick={()=> speciality === "Gastroenterologist" ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[90vw]  sm:w-auto pl-3 py-1.5 xl:pr-16 2xl:pr-10 gap-20 2xl:py-3 border 2xl:text-[25px] border-grey-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ?"bg-indigo-200 text-black " : ""}`}>Gastroenterologist</p>
        </div>
        <div className='2xl:w-full grid xl:grid-cols-4 2xl:grid-cols-5 xl:gap-2 2xl:pt-0 xl:pt-0 gap-y-6 xl:px-2 2xl:px-6 xl:ml-6 xl:mr-6 2xl:mr-20  sm-px-0  grid-cols-auto gap-4 '>
          {
            filterdoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className="border border-blue-200 md:ml-6  rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-15px] transition-all duration-300" key={index}>
                <img className="bg-blue-50 2xl:w-full    " src={item.image} alt="imhg" />
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