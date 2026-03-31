import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-16 rounded-2xl border border-gray-200 bg-gray-50'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-6 md:px-10'>
        <div className='text-sm text-gray-600 flex flex-col gap-3'>
          <img className='w-44' src={assets.logo} alt='DocPoint logo' />
          <p>
            DocPoint helps patients discover trusted doctors and book appointments quickly,
            safely, and from anywhere.
          </p>
          <p className='text-xs text-gray-500'>
            Serving your health journey with reliable care and easy online access.
          </p>
        </div>

        <div className='text-gray-700'>
          <h2 className='text-base font-semibold mb-3'>Quick Links</h2>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/doctors'>Doctors</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/login'>User Login / Sign Up</Link></li>
            <li><Link to='/doctor-auth'>Doctor Login / Sign Up</Link></li>
          </ul>
        </div>

        <div className='text-gray-700'>
          <h2 className='text-base font-semibold mb-3'>Get In Touch</h2>
          <div className='space-y-2 text-sm text-gray-600'>
            <p>Email: support@docpoint.com</p>
            <p>Phone: +91 7000000000</p>
            <p>Hours: Mon - Sat, 9:00 AM - 8:00 PM</p>
            <p>Location: Srinagar, Jammu and Kashmir</p>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-200 px-6 md:px-10 py-4 text-center text-sm text-gray-500'>
        DocPoint © 2026. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer