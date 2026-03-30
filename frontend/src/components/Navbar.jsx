import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { animate, motion } from "motion/react"
const Navbar = () => {
  const navigate = useNavigate() 
  const [showMenu, setshowMenu] = useState(false)
  const [token, settoken] = useState(true)
  return (
    <motion.div
    initial={
      {y:-80,opacity:0}
    }
    animate={{y:0,opacity:1}}
    transition={{duration:0.4}}
    className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500 '>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start font-medium gap-4'>
          <NavLink to='/' >
            <motion.li whileHover={{scale:1.3}} className='py-1'>Home</motion.li>
            <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='/doctors'>
            <motion.li whileHover={{scale:1.3}}   className='py-1'>Doctors</motion.li>
            <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='about'>
            <motion.li whileHover={{scale:1.3}}   className='py-1'>About</motion.li>
            <hr className='border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='/contact'>
            <motion.li whileHover={{scale:1.3}}  className='py-1'>Contact</motion.li>
            <hr className='border-none bg-primary outline-none h-0.5 w-3/5 m-auto hidden'/>
          </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
          {
              token? 
              <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='bg-gray-300 px-3 py-3 gap-2'>
                    <p onClick={()=>{navigate('myprofile')}} className='hover:text-black cursor-pointer text-sm'>My Profile</p>
                    <p onClick={()=>{navigate('myappointments')}} className='hover:text-black cursor-pointer text-sm'>Appointments</p>
                    <p onClick={()=>{settoken(false)}} className='hover:text-black cursor-pointer text-sm'>Logout</p>
                  </div>
                </div>
              </div>
              :
              <div>
          <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        </div>
          }
        </div>
        
    </motion.div>
  )
}

export default Navbar