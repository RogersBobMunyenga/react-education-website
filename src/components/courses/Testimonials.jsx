import React from 'react'
import { testimonial } from "../../data";
const Testimonials = () => {
  return (
      <>
          <section className="testimonials">
              <h1>What Our Students Say</h1>
              <p>Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
                  Quos, odit.</p>
              <div className="row">
                  {testimonial.map((item) => (
                        <div className="testimonial-col">
                      <img src={item.cover} alt="" />
                      <div>
                              <p>
                                  {item.desc}
                          </p>
                          <h3>{item.name}</h3>
                          {item.icon1 }
                           {item.icon1}
                           {item.icon1}
                           {item.icon1}
                           {item.icon2}
                      </div>
                  </div>
                  ))}
                
              </div>
          </section> 
         
      
      </>
  )
}

export default Testimonials