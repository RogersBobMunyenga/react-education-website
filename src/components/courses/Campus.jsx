import React from 'react'
import { campus } from "../../data";


const Campus = () => {
  return (
      <>
          <section className="campus">
              <h1>Our Global Campus</h1>
              <p>Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  Deleniti, omnis.</p>
              
              <div className="row">
                  {campus.map((item) => (
                      
                       <div className="campus-col">
                      <img src={item.cover} alt="" />
                      <div className="layer">
                          <h3>{item.title}</h3>
                      </div>
                          </div>
                          
                  ))}
                 
                  
              </div>
          </section>
      </>
  )
}

export default Campus