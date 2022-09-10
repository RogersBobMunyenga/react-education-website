import React from 'react'
import { Link } from 'react-router-dom'
import { navlink } from '../../data'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import { nav } from "../../data";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
      <>
          
          <nav>
              {nav.map((item) => (

              
                  <a href="/">
                      <img src={item.logo} alt="" />
                  </a>
                  ))}
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
                  <div className="toggle ">
                      <div className='toggle-btn' onClick={() => setToggleMenu(!toggleMenu)}>
                          {toggleMenu ? <CloseIcon className='icon'/> : <MenuIcon className='icon'/> }
                      </div>
                  </div>
                
              </nav>
             
             
          
          
      
      </>
  )
}

export default Navbar