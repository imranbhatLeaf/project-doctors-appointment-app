import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
const Appointments = () => {
  const { id } = useParams()
  const {doctors} = useContext(AppContext)
  const [Docinfo,setDocInfo] = useState({})
  console.log(id);
  
  
  const fetchDocInfo = async ()=>{
    const info = doctors.find(doc => doc._id === id)
    setDocInfo(info)
    console.log(info);
    
  }
  useEffect(()=>{
    fetchDocInfo()
    console.log(Docinfo);
    
  },[doctors,id])
  return (
    <div>
      {/* doc details */}
      <div className='flex flex-col sm:flex-row md:flex-row gap-4'>
        <div>
        <img className='w-full bg-primary sm:max-w-55 rounded-lg' src={Docinfo.image} alt="" />
        </div>
      <div className=' flex flex-col text-sm'>
          <p className='flex gap-1'>{Docinfo.name} <img className='w-4' src={assets.verified_icon} alt="" /></p>
          <div className=' flex gap-3'>
            
          <p>{Docinfo.degree}</p>
          <p>{Docinfo.speciality}</p>
          <button className='border px-3 rounded-lg cursor-pointer'>{Docinfo.experience}</button>
          </div>
        </div>
        <div className='flex-1 border border-gray-100 px-8 py-7 bg-white  sm:mx-1 mt-20 sm:mt-0'>
          <p className='flex gap-3'>About <img src={assets.info_icon} alt="" /></p>
          <p>{Docinfo.about}</p>

      </div>
      </div>
    </div>
  )
}

export default Appointments