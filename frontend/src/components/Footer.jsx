import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='relative grid grid-cols-1 md:grid-cols-3 bg-gray-200 py-10 px-5'>
        <div className='text-sm text-gray-500 gap-2 flex flex-col'>
            {
                <img className='w-44' src={assets.logo} alt="" />
            }
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad esse molestiae quaerat deserunt praesentium beatae corrupti? Labore odit ducimus blanditiis porro modi magnam rem expedita sunt, error doloremque qui quas?</p>

        </div>
        <div className='flex flex-col text-center text-gray-500'>
            <h2 className='mb-3'>GET IN TOUCH</h2>
            <h3>prescipto@contactprescripto.com</h3>
            <h3>Phone: +1 9020342324</h3>

        </div>
        <div className='text-gray-500'>
            <ul className='flex flex-col items-center justify-end'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SPECIALITIES</li>
            </ul>
            <div className='flex justify-end items-end absolute bottom-0 right-0 p-2'>
                <h2>Prescripto @2026</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer