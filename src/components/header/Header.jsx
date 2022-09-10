
import { useState } from "react"
import Navbar from './Navbar';
import Hero from './Hero';



const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
      <>
          <section className="header">
              <Navbar/>
              <Hero/>
             
             
          </section>
          
      
      </>
  )
}

export default Header