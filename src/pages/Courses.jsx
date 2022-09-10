import React from 'react'
import Campus from '../components/courses/Campus'
import Cta from '../components/courses/Cta'
import Facilities from '../components/courses/Facilities'
import Offers from '../components/courses/Offers'
import Testimonials from '../components/courses/Testimonials'
import Footer from '../components/footer/Footer'


const Courses = () => {
  return (
    <>
      <Offers/>
      <Campus/>
      <Facilities/>
      <Testimonials/>
      <Cta/>
      <Footer/>
      
    </>
  )
}

export default Courses