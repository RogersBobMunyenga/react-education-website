import React from 'react'
import Footer from '../footer/Footer';
import Campus from '../courses/Campus';
import Offers from '../courses/Offers';
import Facilities from '../courses/Facilities';
import Cta from '../courses/Cta';
import Testimonials from '../courses/Testimonials';




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