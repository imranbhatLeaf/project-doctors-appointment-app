import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
const Appointments = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {doctors} = useContext(AppContext)
  const [Docinfo,setDocInfo] = useState({})

  const fetchDocInfo = async ()=>{
    const info = doctors.find(doc => doc._id === id)
    setDocInfo(info)
  }
  useEffect(()=>{
    fetchDocInfo()
  },[doctors,id])
  return (
    <div className='py-6'>
      {/* doc details */}
      <div className='flex flex-col sm:flex-row md:flex-row gap-6'>
        <div>
        <img className='w-full bg-primary sm:max-w-56 rounded-xl' src={Docinfo.image} alt={Docinfo.name || 'Doctor'} />
        </div>
      <div className='flex-1 flex flex-col text-sm gap-4'>
          <div className='border border-gray-200 rounded-2xl p-6 bg-white'>
            <p className='flex items-center gap-2 text-2xl font-semibold text-gray-800'>
              {Docinfo.name} <img className='w-4' src={assets.verified_icon} alt="Verified" />
            </p>
            <div className='flex flex-wrap gap-3 mt-3 items-center text-gray-600'>
              <p>{Docinfo.degree}</p>
              <p>{Docinfo.speciality}</p>
              <button className='border border-gray-300 px-3 py-1 rounded-lg cursor-default'>
                {Docinfo.experience}
              </button>
            </div>
            
            <div className='mt-5'>
              <p className='flex items-center gap-2 font-semibold text-gray-800'>
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className='text-gray-600 mt-2 leading-6'>{Docinfo.about}</p>
            </div>
          </div>

          <div className='border border-gray-200 rounded-2xl p-6 bg-gray-50'>
            <h2 className='text-lg font-semibold text-gray-800'>Book Appointment</h2>
            <p className='text-sm text-gray-600 mt-2'>
              Choose a suitable date and time to confirm your visit with this doctor.
            </p>
            <button
              onClick={() => { navigate(`/appointment/${id}/book`); scrollTo(0, 0) }}
              className='mt-4 bg-primary text-white px-5 py-3 rounded-xl text-sm font-semibold hover:opacity-95 transition-all'
            >
              Book Appointment
            </button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Appointments