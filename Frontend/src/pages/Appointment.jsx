import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors,currency} = useContext(AppContext)
  const days=['SUN', 'MON', 'TUE','WED','THU','FRI','SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])   // initailize as the empty array
  const [slotIndex, setSlotIndex] = useState(0)  // initialize as an integer
  const [slotTime, setSlotTime] = useState('')   // initialize as string
  
  const fetchDocInfo = async ()=>{
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  const getAvailableSlots = async ()=>{
    setDocSlots([])
    // getting current dates
    let today = new Date()

    for (let i=0 ; i<7 ;i++){
      //getting dates with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)
      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      //setting hours
      if (today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)

      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeslots=[]
      while (currentDate<endTime) {
        let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})
        timeslots.push({
            datetime: new Date(currentDate),
            time :formattedTime
        })
        //Increment current time by 30 minutes 
        currentDate.setMinutes(currentDate.getMinutes()+30)

      }
        setDocSlots(prev=> ([...prev, timeslots]))
    }
  }
  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  useEffect(()=>{
    console.log(docSlots);
    
  },[docSlots])

  return docInfo && (
    <div className='items-center gap-4 my-10 text-gray-900 mx-30'>
      {/* ----------------- Doctor's Details--------------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className="bg-indigo-500 w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[80px] sm:mt-0'>
          {/* ----------------docinfo: name, degree , experience-------------- */}
          <p className='flex items-center gap-2 text-4xl text-gray-900 font-medium '>
            {docInfo.name} <img src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center text-gray-600 gap-2 text:sm mt-1 xl:text-[17px] 2xl:text-[20px]'  >
          <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-3 border text:xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/* -------------doctor's about-------------- */}
          <div>
            <p className='flex items-center text-gray-900 font-medium gap-2 2xl:text-[19px] text:sm mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text:sm text-gray-500 xl:max-w-[700px] 2xl:max-w-full mt-1 2xl:text-[20px]'> {docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4 text-[20px] 2xl:text-[25px]'>
            Appointment Fee: <span className='text-gray-600'>{currency}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* ----------Booking Slots--------------- */}
    </div>
  )
}

export default Appointment