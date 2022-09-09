import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Contact from './Contact'
import Blog from './Blog'
import Courses from './Courses'
import About from './About'

const Pages = () => {
  return (
      <>
          
          <Router>
    
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          
        </Switch>
      
      </Router>
      
      </>
  )
}

export default Pages