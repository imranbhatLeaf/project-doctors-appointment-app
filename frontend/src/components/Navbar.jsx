import React, { useContext } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { auth, logout } = useContext(AppContext)
  const token = auth.isLoggedIn

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500'
    >
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='' />
      <ul className='hidden md:flex items-start font-medium gap-4'>
        <NavLink to='/'>
          <motion.li whileHover={{ scale: 1.3 }} className='py-1'>
            Home
          </motion.li>
          <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <motion.li whileHover={{ scale: 1.3 }} className='py-1'>
            Doctors
          </motion.li>
          <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <motion.li whileHover={{ scale: 1.3 }} className='py-1'>
            About
          </motion.li>
          <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <motion.li whileHover={{ scale: 1.3 }} className='py-1'>
            Contact
          </motion.li>
          <hr className='border-none bg-primary outline-none h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt='' />
            <img className='w-2.5' src={assets.dropdown_icon} alt='' />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 min-w-40'>
                <p className='text-xs text-gray-500 mb-2'>
                  Signed in as {auth.role === 'doctor' ? 'Doctor' : 'Patient'}
                </p>
                {auth.role === 'doctor' ? (
                  <p
                    onClick={() => {
                      navigate('/doctor/dashboard')
                    }}
                    className='hover:text-black cursor-pointer text-sm'
                  >
                    Dashboard
                  </p>
                ) : (
                  <>
                    <p onClick={() => navigate('/myprofile')} className='hover:text-black cursor-pointer text-sm'>
                      My Profile
                    </p>
                    <p
                      onClick={() => navigate('/myappointments')}
                      className='hover:text-black cursor-pointer text-sm mt-1'
                    >
                      Appointments
                    </p>
                  </>
                )}
                <p
                  onClick={() => {
                    logout()
                    navigate('/login')
                  }}
                  className='hover:text-black cursor-pointer text-sm mt-1'
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='hidden md:flex items-center gap-2'>
            <button
              onClick={() => navigate('/login')}
              className='border border-primary text-primary px-5 py-2.5 rounded-full font-light'
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className='bg-primary text-white px-5 py-2.5 rounded-full font-light'
            >
              Create Account
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Navbar