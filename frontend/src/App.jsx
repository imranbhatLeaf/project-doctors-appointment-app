import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Login from './pages/Login'
import DoctorDashboard from './pages/DoctorDashboard'
import AppointmentBooking from './pages/AppointmentBooking'
import AppointmentBooked from './pages/AppointmentBooked'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[3%] md:mx-[3%] lg:mx-[5%] xl:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Login />} />
        <Route path='/doctor/dashboard' element={<DoctorDashboard />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/appointment/:id' element={<Appointments />} />
        <Route path='/appointment/:id/book' element={<AppointmentBooking />} />
        <Route path='/appointment/:id/booked' element={<AppointmentBooked />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App