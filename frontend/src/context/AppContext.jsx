import { createContext, useEffect, useMemo, useState } from 'react'
import { doctors } from '../assets/assets_frontend/assets'

export const AppContext = createContext(null)

const USER_STORAGE_KEY = 'docpoint_users'
const DOCTOR_STORAGE_KEY = 'docpoint_doctors'
const AUTH_STORAGE_KEY = 'docpoint_auth'
const APPOINTMENTS_STORAGE_KEY = 'docpoint_appointments'

const AppContextProvider = (props) => {
  const [auth, setAuth] = useState({ isLoggedIn: false, role: null, profile: null })
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [registeredDoctors, setRegisteredDoctors] = useState([])
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || '[]')
    const storedDoctors = JSON.parse(localStorage.getItem(DOCTOR_STORAGE_KEY) || '[]')
    const storedAuth = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || 'null')
    const storedAppointments = JSON.parse(localStorage.getItem(APPOINTMENTS_STORAGE_KEY) || '[]')

    setRegisteredUsers(storedUsers)
    setRegisteredDoctors(storedDoctors)
    setAppointments(storedAppointments)
    if (storedAuth?.isLoggedIn) {
      setAuth(storedAuth)
    }
  }, [])

  const persistUsers = (users) => {
    setRegisteredUsers(users)
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users))
  }

  const persistDoctors = (doctorUsers) => {
    setRegisteredDoctors(doctorUsers)
    localStorage.setItem(DOCTOR_STORAGE_KEY, JSON.stringify(doctorUsers))
  }

  const persistAuth = (nextAuth) => {
    setAuth(nextAuth)
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuth))
  }

  const signUp = ({ role, name, email, password, speciality, experience }) => {
    const payload = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password
    }

    if (role === 'doctor') {
      const exists = registeredDoctors.some((doctor) => doctor.email === payload.email)
      if (exists) return { ok: false, message: 'Doctor account already exists with this email.' }

      const doctorsWithNew = [...registeredDoctors, { ...payload, speciality, experience }]
      persistDoctors(doctorsWithNew)
      persistAuth({ isLoggedIn: true, role: 'doctor', profile: { ...payload, speciality, experience } })
      return { ok: true }
    }

    const exists = registeredUsers.some((user) => user.email === payload.email)
    if (exists) return { ok: false, message: 'User account already exists with this email.' }

    const usersWithNew = [...registeredUsers, payload]
    persistUsers(usersWithNew)
    persistAuth({ isLoggedIn: true, role: 'user', profile: payload })
    return { ok: true }
  }

  const login = ({ role, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const source = role === 'doctor' ? registeredDoctors : registeredUsers
    const account = source.find((entry) => entry.email === normalizedEmail && entry.password === password)

    if (!account) {
      return { ok: false, message: 'Invalid credentials for selected account type.' }
    }

    persistAuth({ isLoggedIn: true, role, profile: account })
    return { ok: true }
  }

  const logout = () => {
    const cleared = { isLoggedIn: false, role: null, profile: null }
    setAuth(cleared)
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }

  const addAppointment = ({ doctorId, doctorName, speciality, date, time }) => {
    if (!auth.isLoggedIn || auth.role !== 'user' || !auth.profile?.id) {
      return { ok: false, message: 'Please login as patient first.' }
    }

    const booking = {
      id: Date.now().toString(),
      userId: auth.profile.id,
      userName: auth.profile.name,
      doctorId,
      doctorName,
      speciality,
      date,
      time,
      bookedAt: new Date().toISOString()
    }

    const updatedAppointments = [booking, ...appointments]
    setAppointments(updatedAppointments)
    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(updatedAppointments))
    return { ok: true, booking }
  }

  const myAppointments = useMemo(() => {
    if (!auth.isLoggedIn || auth.role !== 'user' || !auth.profile?.id) return []
    return appointments.filter((item) => item.userId === auth.profile.id)
  }, [appointments, auth])

  const value = useMemo(
    () => ({
      doctors,
      auth,
      signUp,
      login,
      logout,
      addAppointment,
      myAppointments
    }),
    [auth, doctors, myAppointments]
  )

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export default AppContextProvider
