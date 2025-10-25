import React from 'react'
import Main from '../../components/student/Main'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import Testimonials from '../../components/student/Testimonials'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

function Home() {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
        <Main />
        <Companies />
        <CourseSection />
        <Testimonials />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Home