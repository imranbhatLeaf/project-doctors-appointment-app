import React, { useState } from 'react'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const nameOk = form.name.trim().length >= 2
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    const subjectOk = form.subject.trim().length >= 2
    const messageOk = form.message.trim().length >= 10

    if (!nameOk || !emailOk || !subjectOk || !messageOk) {
      setStatus({
        type: 'error',
        message: 'Please fill all fields (name, valid email, subject, and a message of at least 10 characters).'
      })
      return
    }

    // Frontend-only form (no backend wiring in this page).
    setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className='px-4 sm:px-6 lg:px-12 py-10'
    >
      <motion.div variants={itemVariants} className='max-w-6xl mx-auto flex flex-col gap-10'>
        {/* Hero */}
        <motion.div variants={itemVariants} className='rounded-2xl bg-primary p-8 sm:p-10 text-white'>
          <p className='text-sm opacity-90'>DOCPoint Support</p>
          <h1 className='text-3xl sm:text-4xl font-semibold mt-2'>Contact Us</h1>
          <p className='mt-3 text-sm sm:text-base opacity-90 max-w-2xl'>
            Have a question about appointments, doctors, or services? Send us a message and we will get back to you as
            soon as possible.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className='grid lg:grid-cols-3 gap-6'>
          {/* Contact info */}
          <div className='lg:col-span-1'>
            <motion.div variants={containerVariants} className='flex flex-col gap-4'>
              <InfoCard
                title='Phone'
                value='+1 (555) 123-4567'
                icon={
                  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      strokeLinejoin='round'
                    />
                  </svg>
                }
              />

              <InfoCard
                title='Email'
                value='support@docpoint.com'
                icon={
                  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      strokeLinejoin='round'
                    />
                    <path d='m22 6-10 7L2 6' stroke='currentColor' strokeWidth='1.7' strokeLinejoin='round' />
                  </svg>
                }
              />

              <InfoCard
                title='Address'
                value='Lal Chowk, Srinagar, Jammu & Kashmir, India'
                icon={
                  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M20.59 13.41 12 22l-8.59-8.59A5.5 5.5 0 0 1 12 5.5a5.5 5.5 0 0 1 8.59 7.91Z'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      strokeLinejoin='round'
                    />
                  </svg>
                }
              />

              <InfoCard
                title='Working Hours'
                value='Mon - Fri, 9:00 AM - 6:00 PM'
                icon={
                  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      strokeLinejoin='round'
                    />
                    <path d='M12 6v6l4 2' stroke='currentColor' strokeWidth='1.7' strokeLinejoin='round' />
                  </svg>
                }
              />
            </motion.div>
          </div>

          {/* Map + form */}
          <div className='lg:col-span-2 flex flex-col gap-6'>
            <motion.div variants={itemVariants} className='rounded-2xl border border-gray-200 bg-white overflow-hidden'>
              <div className='p-6 border-b border-gray-200'>
                <h2 className='text-lg font-semibold'>Visit Us</h2>
                <p className='text-sm text-gray-600 mt-1'>Visit our Srinagar office at the address listed above.</p>
              </div>

              <div className='w-full h-64 sm:h-72 bg-gray-100'>
                <iframe
                  title='Map'
                  className='w-full h-full'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  src='https://www.google.com/maps?q=Srinagar%20Jammu%20and%20Kashmir&output=embed'
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className='rounded-2xl border border-gray-200 bg-white p-6 sm:p-8'>
              <h2 className='text-lg font-semibold'>Send a Message</h2>
              <p className='text-sm text-gray-600 mt-1'>We will respond within 1-2 business days.</p>

              {status.type !== 'idle' && (
                <div
                  className={
                    status.type === 'success'
                      ? 'mt-4 rounded-xl bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm'
                      : 'mt-4 rounded-xl bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm'
                  }
                  role='alert'
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={onSubmit} className='mt-6 grid sm:grid-cols-2 gap-4'>
                <label className='flex flex-col gap-2'>
                  <span className='text-sm font-medium text-gray-700'>Your Name</span>
                  <input
                    required
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    placeholder='John Doe'
                    className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                  />
                </label>

                <label className='flex flex-col gap-2'>
                  <span className='text-sm font-medium text-gray-700'>Email</span>
                  <input
                    required
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={onChange}
                    placeholder='john@example.com'
                    className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                  />
                </label>

                <label className='flex flex-col gap-2 sm:col-span-2'>
                  <span className='text-sm font-medium text-gray-700'>Subject</span>
                  <input
                    required
                    name='subject'
                    value={form.subject}
                    onChange={onChange}
                    placeholder='How can we help?'
                    className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30'
                  />
                </label>

                <label className='flex flex-col gap-2 sm:col-span-2'>
                  <span className='text-sm font-medium text-gray-700'>Message</span>
                  <textarea
                    required
                    name='message'
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder='Write your message here...'
                    className='border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 resize-none'
                  />
                </label>

                <div className='sm:col-span-2 flex items-center justify-between gap-4 flex-wrap'>
                  <p className='text-xs text-gray-500'>
                    By submitting, you agree to be contacted about your request.
                  </p>

                  <motion.button
                    type='submit'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:scale-[1.01] transition-all duration-150 disabled:opacity-60'
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const InfoCard = ({ title, value, icon }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, boxShadow: '0 8px 18px rgba(0,0,0,0.08)' }}
      className='rounded-2xl border border-gray-200 bg-white p-5'
    >
      <div className='flex items-start gap-3'>
        <div className='text-primary mt-0.5'>{icon}</div>
        <div>
          <p className='text-sm font-semibold text-gray-900'>{title}</p>
          <p className='text-sm text-gray-600 mt-1 leading-relaxed'>{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact