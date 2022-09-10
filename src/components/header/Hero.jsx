import React from 'react'
import { hero } from "../../data";

const Hero = () => {
  return (
    
      <>
      <div className="text-box">
        {hero.map((val) => (
          <>
                 <h1>{val.title}</h1>
                  <p>{val.desc}</p>
          </>
          ))}
           
            <a className='hero-btn' href="/">Learn More</a>
        </div>
      
      </>
  )
}

export default Hero