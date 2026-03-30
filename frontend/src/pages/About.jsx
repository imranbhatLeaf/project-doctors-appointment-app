import React from 'react'

const About = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-12 py-10'>
      <div className='max-w-6xl mx-auto flex flex-col gap-10'>
        {/* Hero */}
        <div className='rounded-2xl bg-primary p-8 sm:p-10 text-white'>
          <p className='text-sm opacity-90'>About DOCPoint</p>
          <h1 className='text-3xl sm:text-4xl font-semibold mt-2'>Care, made simple.</h1>
          <p className='mt-3 text-sm sm:text-base opacity-90 max-w-3xl'>
            DOCPoint helps patients find trusted doctors, book appointments faster, and stay informed—all with a
            clean, reliable experience built for everyday healthcare needs.
          </p>
        </div>

        {/* Content */}
        <div className='grid lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8'>
            <h2 className='text-lg font-semibold text-gray-900'>Our mission</h2>
            <p className='text-sm text-gray-600 mt-2 leading-relaxed'>
              We believe booking the right care should be easy and transparent. Our platform focuses on clear doctor
              profiles, simple scheduling, and dependable support so you can spend less time searching and more time
              feeling better.
            </p>

            <div className='mt-6 grid sm:grid-cols-2 gap-4'>
              <Feature
                title='Verified doctors'
                description='Profiles with clear specialties, qualifications, and experience.'
              />
              <Feature title='Fast booking' description='A smooth flow that helps you schedule in minutes.' />
              <Feature
                title='Patient-first support'
                description='Friendly assistance when you need changes, guidance, or help.'
              />
              <Feature title='Secure by design' description='Built with modern best practices and privacy in mind.' />
            </div>
          </div>

          <div className='lg:col-span-1 flex flex-col gap-4'>
            <StatCard label='Trusted doctors' value='50+' />
            <StatCard label='Specialties' value='10+' />
            <StatCard label='Avg. response time' value='24–48h' />
            <div className='rounded-2xl border border-gray-200 bg-white p-6'>
              <h3 className='text-sm font-semibold text-gray-900'>Need help?</h3>
              <p className='text-sm text-gray-600 mt-1'>
                For appointment support, billing questions, or general inquiries, please visit our Contact page.
              </p>
              <div className='mt-4'>
                <a href='/contact' className='inline-flex bg-primary text-white px-5 py-3 rounded-xl font-semibold'>
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why section */}
        <div className='rounded-2xl border border-gray-200 bg-white p-6 sm:p-8'>
          <h2 className='text-lg font-semibold text-gray-900'>Why choose DOCPoint</h2>
          <div className='mt-4 grid md:grid-cols-3 gap-4'>
            <WhyCard
              title='Professional experience'
              description='A clean interface that feels modern, focused, and easy to use.'
            />
            <WhyCard
              title='Reliable information'
              description='Browse doctors by specialty with straightforward, helpful details.'
            />
            <WhyCard
              title='Designed for trust'
              description='Clear communication, supportive UX, and consistent design across the app.'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const Feature = ({ title, description }) => {
  return (
    <div className='rounded-2xl border border-gray-200 p-5'>
      <p className='text-sm font-semibold text-gray-900'>{title}</p>
      <p className='text-sm text-gray-600 mt-1 leading-relaxed'>{description}</p>
    </div>
  )
}

const StatCard = ({ label, value }) => {
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-6'>
      <p className='text-xs text-gray-500'>{label}</p>
      <p className='text-2xl font-semibold text-gray-900 mt-1'>{value}</p>
    </div>
  )
}

const WhyCard = ({ title, description }) => {
  return (
    <div className='rounded-2xl border border-gray-200 p-6'>
      <p className='text-sm font-semibold text-gray-900'>{title}</p>
      <p className='text-sm text-gray-600 mt-1 leading-relaxed'>{description}</p>
    </div>
  )
}

export default About