import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Myprofile = () => {
  const [userdata, setuserdata] = useState({
    name: "Jalaj Sinha",
    image: assets.profile_pic,
    email: "jalajsinha140903@gmail.com",
    phone: "9336318558",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2003-09-14',
  })

  const [isEdit, setisEdit] = useState(false)

  return (
    <div className = 'max-w-lg flex flex-col gap-2 text-sm 2xl:mx-20 xl:mx-10 xl:pl-30 2xl:pl-20'>
      <img className = 'w-36 2xl:w-50  rounded-2xl' src={userdata.image} alt="" />
      {
        isEdit
          ? <input className = 'bg-gray-50 text-3xl 2xl:text-3xl font-medium max-w-60 mt-4 ' type="text" value={userdata.name} onChange={e => setuserdata(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl 2xl:text-3xl  text-neutral-800 mt-4'>{userdata.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 2xl:text-2xl underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium 2xl:text-xl'>Email id:</p>
          <p className='text-blue-500 2xl:text-xl'>{userdata.email}</p>
          <p className='font-medium 2xl:text-xl'>Phone:</p>
          {
            isEdit
              ? <input className = 'bg-gray-100 max-w-52' type="text" value={userdata.phone} onChange={e => setuserdata(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-500 2xl:text-xl'>{userdata.phone}</p>
          }
          <p className='font-medium 2xl:text-xl'>Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50 2xl:text-xl ' onChange={(e) => setuserdata(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userdata.address.line1} type="text" />
                <br />
                <input className='bg-gray-50 2xl:text-xl' onChange={(e) => setuserdata(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userdata.address.line2} type="text" />
              </p>
              : <p className='text-gray-500 2xl:text-xl'>
                {userdata.address.line1}
                <br />
                {userdata.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 2xl:text-2xl underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 2xl:text-xl'> 
          <p className='font-medium 2xl:text-xl'>Gender:</p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setuserdata(prev => ({ ...prev, gender: e.target.value }))} value={userdata.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-400'>{userdata.gender}</p>
          }
          <p className='font-medium'>Birthday :</p>
          {
            isEdit ? <input className='max-w-28 bg-gray-100' onChange={(e) => setuserdata(prev => ({ ...prev, dob: e.target.value }))} value={userdata.dob} type="date" />
              : <p className='text-gray-400'>{userdata.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
            ? <button className='border border-indigo-900 px-8 py-2 2xl:text-xl rounded-full hover:bg-indigo-500 hover:text-white transition-all' onClick={() => setisEdit(false)}>Save Information</button>
            : <button className='border border-indigo-900 px-8 py-2 2xl:text-xl rounded-full hover:bg-indigo-500 hover:text-white transition-all' onClick={() => setisEdit(true)}> Edit </button>
        }
      </div>
    </div>
  )
}

export default Myprofile