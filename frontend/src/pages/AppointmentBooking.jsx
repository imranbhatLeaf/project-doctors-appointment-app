import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const AppointmentBooking = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { doctors, auth, addAppointment } = useContext(AppContext)
  const [doctor, setDoctor] = useState(null)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const found = doctors.find((doc) => doc._id === id)
    setDoctor(found || null)
  }, [doctors, id])

  useEffect(() => {
    if (!auth.isLoggedIn || auth.role !== 'user') {
      navigate('/login', { state: { from: `/appointment/${id}/book` } })
    }
  }, [auth, navigate, id])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!date || !time) return

    const result = addAppointment({
      doctorId: doctor?._id,
      doctorName: doctor?.name || '',
      speciality: doctor?.speciality || '',
      date,
      time
    })

    if (!result.ok) {
      setError(result.message || 'Unable to book appointment.')
      return
    }

    navigate(`/appointment/${id}/booked`, {
      state: {
        date,
        time,
        doctorName: doctor?.name || ''
      }
    })
  }

  if (!doctor) {
    return (
      <div className='min-h-[60vh] flex items-center justify-center'>
        <p className='text-gray-600 text-sm'>Loading doctor details...</p>
      </div>
    )
  }

  return (
    <div className='py-8 px-4 sm:px-6'>
      <div className='max-w-xl mx-auto border border-gray-200 rounded-2xl bg-white p-6 sm:p-8'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-2'>Book appointment</h1>
        <p className='text-sm text-gray-600 mb-5'>
          You are booking an appointment with <span className='font-semibold'>{doctor.name}</span>.
        </p>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm text-gray-700 mb-1'>Select date</label>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary'
              required
            />
          </div>

          <div>
            <label className='block text-sm text-gray-700 mb-1'>Select time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary'
              required
            >
              <option value=''>Choose a time slot</option>
              <option value='10:00 AM'>10:00 AM</option>
              <option value='11:30 AM'>11:30 AM</option>
              <option value='1:00 PM'>1:00 PM</option>
              <option value='3:30 PM'>3:30 PM</option>
              <option value='5:00 PM'>5:00 PM</option>
            </select>
          </div>

          <button
            type='submit'
            className='w-full bg-primary text-white py-3 rounded-xl text-sm font-semibold hover:opacity-95 transition-all mt-2'
          >
            Confirm Booking
          </button>
          {error && <p className='text-sm text-red-600'>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default AppointmentBooking

