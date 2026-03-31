import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const AppointmentBooked = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state || {}

  const { doctorName, date, time } = state

  const handleBackToDoctor = () => {
    navigate(`/appointment/${id}`)
  }

  return (
    <div className='min-h-[70vh] flex items-center justify-center px-4'>
      <div className='max-w-md w-full border border-green-100 bg-green-50 rounded-2xl p-6 sm:p-8 text-center'>
        <h1 className='text-2xl font-semibold text-green-800'>Appointment booked!</h1>
        <p className='text-sm text-green-900 mt-3'>
          Your appointment has been successfully booked
          {doctorName ? ` with ${doctorName}` : ''}.
        </p>

        {(date || time) && (
          <div className='mt-4 text-sm text-green-900'>
            {date && <p>Date: <span className='font-semibold'>{date}</span></p>}
            {time && <p>Time: <span className='font-semibold'>{time}</span></p>}
          </div>
        )}

        <div className='mt-6 flex flex-col gap-3'>
          <button
            onClick={() => navigate('/myappointments')}
            className='w-full bg-primary text-white py-2.5 rounded-xl text-sm font-semibold hover:opacity-95 transition-all'
          >
            Go to My Appointments
          </button>
          <button
            onClick={handleBackToDoctor}
            className='w-full border border-primary text-primary py-2.5 rounded-xl text-sm hover:bg-primary/5 transition-all'
          >
            View doctor details again
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentBooked

