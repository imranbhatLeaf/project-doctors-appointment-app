import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className='flex px-2 bg-primary my-20 rounded-2xl'>
        {/* left */}
        <div className=' flex-1 w-1/2 py-8 sm:py-10 md:py-16 pl-10'>
            <h3 className='text-2xl text-white font-bold'>Book appointment</h3>
            <h2 className='text-4xl text-white font-semibold'>With 50+ trusted Doctors</h2>
            <button onClick={()=>{navigate('/login'),scrollTo(0,0)}} className='cursor-pointer bg-white px-4 py-4 text-sm rounded-2xl mt-5'>Create Account</button>
        </div>

        {/* right */}
        <div className='w-1/2 relative '>
            {
                <img className='w-60 absolute bottom-0 right-1 h-auto ' src={assets.appointment_img} alt="" />
            }
        </div>
    </div>
  )
}

export default Banner