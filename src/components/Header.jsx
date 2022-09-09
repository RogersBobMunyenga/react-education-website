import React from 'react'
import { Link } from 'react-router-dom'
import { navlink } from '../data'
import logo from "../img/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"



const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
      <>
          <section className="header">
              <nav>
                  <a href="/">
                      <img src={logo} alt="" />
                  </a>
                  <div className={toggleMenu ? "menu-toggle" : "navlinks"} >

                      <ul >
                    {navlink.map((links, i) => (
                   <li>
                      <Link className='link' to={links.path} key={i}>
                        {links.text}
                       </Link>
                   </li> 
                      ))}
                      </ul>
                  </div>
                  <div className="toggle">
                      <div className='toggle-btn' onClick={() => setToggleMenu(!toggleMenu)}>
                          {toggleMenu ? <CloseIcon className='icon'/> : <MenuIcon className='icon'/> }
                      </div>
                  </div>
                
              </nav>
             
              <div className="text-box">
                  <h1>World's Biggest University</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi ut ipsa vitae dolor?
                      Eveniet voluptas labore,
                      quam quas quo ipsum ex qui et sequi nesciunt,
                      aliquam ab laborum culpa dolorum?</p>
                        <a className='hero-btn' href="/">Learn More</a>
              </div>
          </section>
          
      
      </>
  )
}

export default Header