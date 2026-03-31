import React, { useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}

const MyProfile = () => {
  const navigate = useNavigate()
  const { auth, myAppointments, updateUserProfile } = useContext(AppContext)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const profile = useMemo(() => {
    const p = auth.profile || {}
    return {
      name: p.name || '',
      email: p.email || '',
      phone: p.phone || '',
      gender: p.gender || '',
      dob: p.dob || '',
      address: p.address || ''
    }
  }, [auth.profile])

  const [form, setForm] = useState(profile)
  const completedFields = [form.name, form.email, form.phone, form.gender, form.dob, form.address].filter(Boolean).length
  const profileCompletion = Math.round((completedFields / 6) * 100)

  React.useEffect(() => {
    setForm(profile)
  }, [profile])

  if (!auth.isLoggedIn || auth.role !== 'user') {
    return (
      <div className='min-h-[60vh] flex items-center justify-center'>
        <div className='border border-gray-200 rounded-2xl p-6 text-center max-w-lg'>
          <h1 className='text-xl font-semibold text-gray-900'>Please login first</h1>
          <p className='text-sm text-gray-600 mt-2'>Login as a patient to view and edit your profile.</p>
          <button
            onClick={() => navigate('/login', { state: { from: '/myprofile' } })}
            className='mt-4 bg-primary text-white px-5 py-2.5 rounded-xl text-sm'
          >
            Go to Login
          </button>
        </div>
      </div>
    )
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (message) setMessage('')
    if (error) setError('')
  }

  const onSave = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) {
      setError('Name and email are required.')
      return
    }

    const result = updateUserProfile(form)
    if (!result.ok) {
      setError(result.message || 'Failed to update profile.')
      return
    }

    setMessage('Profile updated successfully.')
  }

  return (
    <motion.div initial='hidden' animate='visible' variants={cardVariants} className='py-6'>
      <div className='grid lg:grid-cols-3 gap-6'>
        <motion.div variants={cardVariants} className='lg:col-span-2 border border-gray-200 rounded-2xl p-6 bg-white'>
          <h1 className='text-2xl sm:text-3xl font-semibold text-gray-800'>My Profile</h1>
          <p className='text-sm text-gray-600 mt-1'>Keep your account details up to date for smoother bookings.</p>

          <form onSubmit={onSave} className='mt-6 grid sm:grid-cols-2 gap-4'>
            <label className='flex flex-col gap-1'>
              <span className='text-sm text-gray-700'>Full Name</span>
              <input
                name='name'
                value={form.name}
                onChange={onChange}
                className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                placeholder='Your full name'
              />
            </label>
            <label className='flex flex-col gap-1'>
              <span className='text-sm text-gray-700'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={onChange}
                className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                placeholder='your@email.com'
              />
            </label>
            <label className='flex flex-col gap-1'>
              <span className='text-sm text-gray-700'>Phone</span>
              <input
                name='phone'
                value={form.phone}
                onChange={onChange}
                className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                placeholder='+91 70000 00000'
              />
            </label>
            <label className='flex flex-col gap-1'>
              <span className='text-sm text-gray-700'>Gender</span>
              <select
                name='gender'
                value={form.gender}
                onChange={onChange}
                className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
              >
                <option value=''>Select</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </label>
            <label className='flex flex-col gap-1'>
              <span className='text-sm text-gray-700'>Date of Birth</span>
              <input
                type='date'
                name='dob'
                value={form.dob}
                onChange={onChange}
                className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
              />
            </label>
            <label className='flex flex-col gap-1 sm:col-span-2'>
              <span className='text-sm text-gray-700'>Address</span>
              <textarea
                name='address'
                value={form.address}
                onChange={onChange}
                rows={3}
                className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 resize-none'
                placeholder='Enter your address'
              />
            </label>

            {error && <p className='sm:col-span-2 text-sm text-red-600'>{error}</p>}
            {message && <p className='sm:col-span-2 text-sm text-green-700'>{message}</p>}

            <div className='sm:col-span-2'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold'
              >
                Save Profile
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className='border border-gray-200 rounded-2xl p-6 bg-gray-50 h-fit'
        >
          <h2 className='text-lg font-semibold text-gray-800'>Account Summary</h2>
          <div className='mt-4 space-y-2 text-sm text-gray-700'>
            <p>
              Account Type: <span className='font-semibold'>Patient</span>
            </p>
            <p>
              Booked Appointments: <span className='font-semibold'>{myAppointments.length}</span>
            </p>
            <p>
              Profile Completion:{' '}
              <span className='font-semibold'>{profileCompletion}%</span>
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/myappointments')}
            className='mt-5 w-full border border-primary text-primary py-2.5 rounded-xl text-sm'
          >
            View My Appointments
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MyProfile