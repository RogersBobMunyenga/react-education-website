import React from 'react'
import AboutContent from '../about/AboutContent';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const About = () => {
  return (
    <>
      <section className="about">
        <Navbar />
        <h2>About Us</h2>
       
      </section>
       <AboutContent />
        <Footer/>
    
    </>
  )
}

export default About