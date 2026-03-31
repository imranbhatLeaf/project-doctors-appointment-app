import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div id='top-doctors' className='flex flex-col items-center gap-4 my-10 text-gray-600 md:mx-10'>
        <h2 className='text-3xl font-medium'>Top doctors ready to see you</h2>
        <p className='sm:w-1/3 text-center text-sm'>
          Browse trusted specialists and <span className='font-semibold text-primary'>book an appointment in seconds.</span>
        </p>
        <div className='w-full grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2'>
            {
                doctors.slice(0,10).map((item,index)=>(
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer'>
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='flex items-center gap-2 text-sm justify-center text-green-600'>
                            <p className='bg-green-600 rounded-full w-2 h-2'></p><p>Available</p>
                        </div>
                            <p className='flex items-center justify-center text-gray-600 font-medium text-lg'>{item.name}</p>
                            <p className='text-gray-500 text-sm flex justify-center items-center'>{item.speciality}</p>
                    </div>
                ))
            }
        </div>
            <div className='flex gap-3 mt-4'>
              <button
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                className='bg-primary rounded-xl text-white px-4 py-2 h-10 text-sm'
              >
                Book Appointment
              </button>
              <button
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                className='border border-primary rounded-xl text-primary px-4 py-2 h-10 text-sm'
              >
                View More Doctors
              </button>
            </div>
    </div>
  )
}

export default TopDoctors