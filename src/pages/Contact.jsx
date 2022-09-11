import { ContactEmergencyOutlined } from '@mui/icons-material';
import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import  {contactCol} from "../data";

const Contact = () => {
  return (
    <>
      
      <section className="about">
        <Navbar />
        <h2>Contact Us</h2>
      </section>

      <div className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.65583063883!2d54.94660897080034!3d25.075758163894953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sug!4v1662893776193!5m2!1sen!2sug"
          width="600"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact-us">
        <div className="row">
          <div className="contact-col">
            {contactCol.map((item) => (
              <div>
              { item.icon}
            <span>
                  <h5>{ item.title}</h5>
              <p>{ item.desc} </p>
              </span>
            </div>
            ))}
            

            

            
              
          </div>
          <div className="contact-col">
            <form action="">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email address" required />
              <input type="text" placeholder="Enter your subject" required />
              <textarea rows="8" placeholder="Message" required></textarea>
              <button type='submit' className='hero-btn red-btn'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/> 
    </>
  )
}

export default Contact