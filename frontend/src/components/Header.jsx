import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex rounded-2xl flex-col flex-wrap sm:flex-row pt-6 md:pt-20 px-6 md:px-10 lg:px-20 bg-primary'>
        {/* Left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10'>
            <p className='text-3xl md:text-4xl leading-tight font-semibold text-white'>Book Appointments<br />With Trusted Doctors</p>
            <div className='flex text-sm text-white items-center gap-3 font-light '>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Get consultancy from the best in Srinagar</p>
            </div>
            {/* appointment button */}
            <a className='flex items-center bg-white px-3 py-3 rounded-lg gap-2 font-semibold text-sm hover:scale-103 transition-all duration-75 ease-in' href="#top-doctors">Set appointment <img src={assets.arrow_icon} alt="" /></a>
        </div>

        {/* Right side */}
        <div className='md:w-1/2 relative '>
            <img src={assets.header_img} className='w-full absolute bottom-0 h-auto rounded-lg' alt="" />

        </div>
    </div>
  )
}

export default Header