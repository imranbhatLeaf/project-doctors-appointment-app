import React, { useContext, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signUp, login } = useContext(AppContext)
  const [role, setRole] = useState('user')
  const [mode, setMode] = useState(location.pathname === '/signup' ? 'signup' : 'login')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    speciality: '',
    experience: ''
  })

  const isSignup = mode === 'signup'
  const title = useMemo(() => {
    if (role === 'doctor') return isSignup ? 'Doctor Sign Up' : 'Doctor Login'
    return isSignup ? 'Create Patient Account' : 'Patient Login'
  }, [isSignup, role])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.email || !form.password) {
      setError('Email and password are required.')
      return
    }

    if (isSignup && !form.name.trim()) {
      setError('Name is required for sign up.')
      return
    }

    if (isSignup && role === 'doctor' && (!form.speciality.trim() || !form.experience.trim())) {
      setError('Doctor sign up requires speciality and experience.')
      return
    }

    const action = isSignup ? signUp : login
    const result = action({
      role,
      name: form.name,
      email: form.email,
      password: form.password,
      speciality: form.speciality,
      experience: form.experience
    })

    if (!result.ok) {
      setError(result.message || 'Something went wrong. Please try again.')
      return
    }

    const redirectPath = location.state?.from
    if (redirectPath && role === 'user') {
      navigate(redirectPath)
      return
    }

    navigate(role === 'doctor' ? '/doctor/dashboard' : '/')
  }

  return (
    <div className='min-h-[75vh] flex items-center justify-center py-8'>
      <div className='w-full max-w-4xl rounded-2xl border border-gray-200 overflow-hidden grid md:grid-cols-2 bg-white'>
        <div className='bg-primary text-white p-8 md:p-10'>
          <p className='text-sm opacity-90'>DOCPoint Account</p>
          <h1 className='text-2xl md:text-3xl font-semibold mt-2'>{title}</h1>
          <p className='text-sm mt-3 opacity-90'>
            Access your appointments as a patient or manage your professional profile as a doctor.
          </p>

          <div className='mt-8 space-y-3'>
            <button
              onClick={() => setRole('user')}
              className={`w-full text-left px-4 py-3 rounded-xl border ${
                role === 'user' ? 'bg-white text-primary border-white' : 'border-white/40 text-white'
              }`}
            >
              Continue as Patient
            </button>
            <button
              onClick={() => setRole('doctor')}
              className={`w-full text-left px-4 py-3 rounded-xl border ${
                role === 'doctor' ? 'bg-white text-primary border-white' : 'border-white/40 text-white'
              }`}
            >
              Continue as Doctor
            </button>
          </div>
        </div>

        <div className='p-8 md:p-10'>
          <div className='flex items-center gap-2 mb-6'>
            <button
              onClick={() => {
                setMode('login')
                setError('')
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                mode === 'login' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setMode('signup')
                setError('')
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                mode === 'signup' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form className='space-y-4' onSubmit={handleSubmit}>
            {isSignup && (
              <div>
                <label className='text-sm text-gray-700'>Full Name</label>
                <input
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                  placeholder='Enter your full name'
                />
              </div>
            )}

            <div>
              <label className='text-sm text-gray-700'>Email</label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                placeholder='Enter your email'
              />
            </div>

            <div>
              <label className='text-sm text-gray-700'>Password</label>
              <input
                type='password'
                name='password'
                value={form.password}
                onChange={handleChange}
                className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                placeholder='Enter your password'
              />
            </div>

            {isSignup && role === 'doctor' && (
              <>
                <div>
                  <label className='text-sm text-gray-700'>Speciality</label>
                  <input
                    name='speciality'
                    value={form.speciality}
                    onChange={handleChange}
                    className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                    placeholder='e.g. General physician'
                  />
                </div>
                <div>
                  <label className='text-sm text-gray-700'>Experience</label>
                  <input
                    name='experience'
                    value={form.experience}
                    onChange={handleChange}
                    className='mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                    placeholder='e.g. 5 Years'
                  />
                </div>
              </>
            )}

            {error && <p className='text-sm text-red-600'>{error}</p>}

            <button type='submit' className='w-full bg-primary text-white py-3 rounded-xl font-semibold'>
              {isSignup ? 'Create account' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login