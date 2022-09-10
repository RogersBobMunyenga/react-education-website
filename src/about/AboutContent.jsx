import React from 'react'
import { aboutContent } from '../data'
import { aboutCol } from '../data'

const AboutContent = () => {
  return (
               <>
          <section className="about-content">
              <div className="row">
                  <div className="about-col">
                      {aboutContent.map((item) => (
                    <>
                 <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                          </>
                      ))}
                          <a className='hero-btn red-btn' href="/">EXPLORE MORE</a>
                      
                  </div>

                  <div className="about-col">
                      {aboutCol.map((item) => (
                      <img src={item.image} alt="" />

                      ))}
                  </div>
              </div>
          </section>
                   </>
  )
}

export default AboutContent