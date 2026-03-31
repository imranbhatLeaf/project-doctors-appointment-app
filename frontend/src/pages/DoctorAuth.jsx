import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorAuth = () => {
  const navigate = useNavigate()
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className='min-h-[75vh] flex items-center justify-center px-4'>
      <div className='w-full max-w-lg border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8'>
        <p className='text-2xl font-semibold text-gray-800 mb-1'>
          {isSignup ? 'Doctor Sign Up' : 'Doctor Login'}
        </p>
        <p className='text-sm text-gray-500 mb-6'>
          {isSignup
            ? 'Register as a doctor to manage patients and appointments.'
            : 'Login to access your doctor dashboard.'}
        </p>

        <form className='flex flex-col gap-4'>
          {isSignup && (
            <>
              <input
                className='border border-gray-300 rounded-md p-3 outline-none focus:border-primary'
                type='text'
                placeholder='Doctor Name'
              />
              <input
                className='border border-gray-300 rounded-md p-3 outline-none focus:border-primary'
                type='text'
                placeholder='Specialization'
              />
              <input
                className='border border-gray-300 rounded-md p-3 outline-none focus:border-primary'
                type='text'
                placeholder='License Number'
              />
            </>
          )}
          <input
            className='border border-gray-300 rounded-md p-3 outline-none focus:border-primary'
            type='email'
            placeholder='Email Address'
          />
          <input
            className='border border-gray-300 rounded-md p-3 outline-none focus:border-primary'
            type='password'
            placeholder='Password'
          />
          <button
            type='button'
            onClick={() => navigate('/doctor-dashboard')}
            className='bg-primary text-white rounded-md py-3 font-medium'
          >
            {isSignup ? 'Register as Doctor' : 'Login as Doctor'}
          </button>
        </form>

        <p className='text-sm text-gray-600 mt-5'>
          {isSignup ? 'Already registered?' : 'New doctor on DocPoint?'}{' '}
          <span
            onClick={() => setIsSignup((prev) => !prev)}
            className='text-primary cursor-pointer font-medium'
          >
            {isSignup ? 'Login here' : 'Sign up here'}
          </span>
        </p>

        <button
          onClick={() => navigate('/login')}
          className='mt-4 text-sm text-primary font-medium'
        >
          Continue as patient/user instead
        </button>
      </div>
    </div>
  )
}

export default DoctorAuth
