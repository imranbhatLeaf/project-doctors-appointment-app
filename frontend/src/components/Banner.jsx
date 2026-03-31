import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-12 bg-primary my-20 rounded-2xl overflow-hidden'>
        {/* left */}
        <div className='flex-1 w-full md:w-1/2 py-8 sm:py-10 md:py-16'>
            <h3 className='text-xl sm:text-2xl text-white font-semibold'>Book your appointment</h3>
            <h2 className='text-3xl sm:text-4xl text-white font-bold mt-2 leading-tight'>
                With 50+ trusted doctors
            </h2>
            <p className='text-sm text-blue-50 mt-3 max-w-md'>
                Choose a specialist, pick a time that works for you, and confirm your visit in just a few clicks.
            </p>
            <div className='flex flex-wrap gap-3 mt-6'>
                <button
                    onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                    className='cursor-pointer bg-white text-primary px-5 py-3 text-sm rounded-2xl font-semibold shadow-sm hover:shadow-md transition-all'
                >
                    Book Appointment
                </button>
                <button
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                    className='cursor-pointer bg-transparent border border-white/70 text-white px-5 py-3 text-sm rounded-2xl hover:bg-white/10 transition-all'
                >
                    Login / Sign Up
                </button>
            </div>
        </div>

        {/* right */}
        <div className='w-full md:w-1/2 relative mt-6 md:mt-0 flex justify-center md:justify-end'>
            <img
                className='w-56 sm:w-64 md:w-72 h-auto md:mr-4'
                src={assets.appointment_img}
                alt="Doctor and patient illustration"
            />
        </div>
    </div>
  )
}

export default Banner