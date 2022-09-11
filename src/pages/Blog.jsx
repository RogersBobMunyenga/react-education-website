import { InsertEmoticon } from '@mui/icons-material'
import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import { blogLeft } from "../data";
import { blogRight } from "../data";
const Blog = () => {
  return (
    <>
      <section className="about">
        <Navbar />
        <h2>Our Certificate & Online Programmes For 2022</h2>
      </section>
      <div className="blog-content">
        <div className="row">
        
        <div className="blog-left">
          {blogLeft.map((item) => (
          <>
           <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <br />
              <p>{item.desc}</p>
              <br />
              <p>{item.desc}</p>
              <br />
              <p>{item.desc}</p>
              <br />
              <p>{item.desc}</p>
              
        
          </>
          ))}
            
            <div className="comment-box">
              <h3>Leave a comment</h3>
              <form className='comment-form'>
                <input type="text" placeholder='Enter Name' />
                <input type="email" placeholder='Enter Email' />
                <textarea rows="5" placeholder='Your comment here'>
                  
                </textarea>
                <button  className='hero-btn red-btn' type='submit'>POST COMMENT</button>
              </form>
            </div>
          </div>
         
        <div className="blog-right">
            <h3>Post Categories</h3>
            {blogRight.map((item) => (
              <div>
              <span>{item.title}</span>
              <span>{item.number}</span>
            </div>
            ))}
            
          </div>
          </div>
      </div>

      <Footer/> 
    
    </>
  )
}

export default Blog