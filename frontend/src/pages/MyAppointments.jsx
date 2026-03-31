import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const MyAppointments = () => {
  const navigate = useNavigate()
  const { auth, myAppointments } = useContext(AppContext)

  if (!auth.isLoggedIn || auth.role !== 'user') {
    return (
      <div className='min-h-[60vh] flex items-center justify-center'>
        <div className='border border-gray-200 rounded-2xl p-6 text-center max-w-lg'>
          <h1 className='text-xl font-semibold text-gray-900'>Please login first</h1>
          <p className='text-sm text-gray-600 mt-2'>
            Login as a patient to view and manage your booked appointments.
          </p>
          <button
            onClick={() => navigate('/login', { state: { from: '/myappointments' } })}
            className='mt-4 bg-primary text-white px-5 py-2.5 rounded-xl text-sm'
          >
            Go to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className='py-6'>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.3 }}
        className='text-2xl sm:text-3xl font-semibold text-gray-800 mb-5'
      >
        My Appointments
      </motion.h1>

      {myAppointments.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='border border-gray-200 rounded-2xl p-6 bg-gray-50'>
          <p className='text-sm text-gray-600'>You have not booked any appointments yet.</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/doctors')}
            className='mt-4 bg-primary text-white px-5 py-2.5 rounded-xl text-sm'
          >
            Book an Appointment
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
          }}
          className='space-y-3'
        >
          {myAppointments.map((item) => (
            <motion.div
              key={item.id}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -3, boxShadow: '0 8px 18px rgba(0,0,0,0.08)' }}
              className='border border-gray-200 rounded-2xl p-5 bg-white'
            >
              <h2 className='text-lg font-semibold text-gray-800'>{item.doctorName}</h2>
              <p className='text-sm text-gray-600 mt-1'>{item.speciality}</p>
              <div className='mt-3 text-sm text-gray-700 flex flex-wrap gap-4'>
                <p>
                  Date: <span className='font-semibold'>{item.date}</span>
                </p>
                <p>
                  Time: <span className='font-semibold'>{item.time}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export default MyAppointments