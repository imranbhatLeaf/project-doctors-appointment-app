import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const DoctorDashboard = () => {
  const { auth } = useContext(AppContext)

  if (!auth.isLoggedIn || auth.role !== 'doctor') {
    return (
      <div className='min-h-[60vh] flex items-center justify-center'>
        <div className='border border-gray-200 rounded-2xl p-6 text-center max-w-lg'>
          <h1 className='text-xl font-semibold text-gray-900'>Doctor access only</h1>
          <p className='text-sm text-gray-600 mt-2'>
            Please login with a doctor account to view this dashboard.
          </p>
        </div>
      </div>
    )
  }

  const doctor = auth.profile

  return (
    <div className='py-8 px-4 sm:px-6'>
      <div className='max-w-5xl mx-auto space-y-6'>
        <div className='rounded-2xl bg-primary text-white p-6 sm:p-8'>
          <p className='text-sm opacity-90'>Doctor Dashboard</p>
          <h1 className='text-2xl sm:text-3xl font-semibold mt-2'>Welcome, {doctor.name}</h1>
          <p className='text-sm opacity-90 mt-2'>
            Manage your profile, availability, and incoming appointment requests.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-4'>
          <Card title='Speciality' value={doctor.speciality || 'Not specified'} />
          <Card title='Experience' value={doctor.experience || 'Not specified'} />
          <Card title='Email' value={doctor.email} />
        </div>

        <div className='rounded-2xl border border-gray-200 bg-white p-6'>
          <h2 className='text-lg font-semibold text-gray-900'>Today at a glance</h2>
          <div className='grid sm:grid-cols-3 gap-4 mt-4'>
            <MiniStat label='Appointments today' value='4' />
            <MiniStat label='Pending requests' value='2' />
            <MiniStat label='Completed this week' value='18' />
          </div>
          <p className='text-xs text-gray-500 mt-4'>
            These are placeholder metrics for now. You can connect real appointment data later.
          </p>
        </div>
      </div>
    </div>
  )
}

const Card = ({ title, value }) => (
  <div className='rounded-2xl border border-gray-200 bg-white p-5'>
    <p className='text-xs text-gray-500'>{title}</p>
    <p className='text-base font-semibold text-gray-900 mt-1'>{value}</p>
  </div>
)

const MiniStat = ({ label, value }) => (
  <div className='rounded-xl bg-gray-50 p-4 border border-gray-200'>
    <p className='text-xs text-gray-500'>{label}</p>
    <p className='text-xl font-semibold text-gray-900 mt-1'>{value}</p>
  </div>
)

export default DoctorDashboard
