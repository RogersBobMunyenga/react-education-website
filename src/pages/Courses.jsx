import React from 'react'
import Facilities from '../components/courses/Facilities'
import Offers from '../components/courses/Offers'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'

const Course = () => {
  return (
    <>
      <section className="about">
        <Navbar />
        <h2>Our Courses</h2>


      </section>
      <Offers/>
      <Facilities/>
        

       <Footer/>   
          
      
      </>
  )
}

export default Course