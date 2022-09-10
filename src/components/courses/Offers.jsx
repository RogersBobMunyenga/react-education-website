import React from 'react'
import { course } from "../../data";
const Offers = () => {
  return (
      <>
      <section className="course">
        
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
     
        </p>

        <div className="row">
          {course.map((item) => (
            
              <div className="course-col">
              <h3>{ item.title}</h3>
              <p>
                { item.desc}
            </p>
          </div>
          
        ))}
          
        </div>
      </section>
    
      </>
  )
}

export default Offers