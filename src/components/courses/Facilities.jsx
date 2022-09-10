import React from 'react'
import { facility } from "../../data";
const Facilities = () => {
  return (
      <>
          <section className="facilities">

          
          <h1>Our Facilities</h1>
          <p>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Aperiam, cum?
          </p> 
              <div className="row">
                  {facility.map((item) => (
                      <div className="facilities-col">
              <img src={item.cover} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}
              </p>
          </div>
                  ))}
          
         </div>
      </section>
      </>
  )
}

export default Facilities