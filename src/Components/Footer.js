import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo'


const Footer = () => {
  return (
    <footer>
      <NavLink to="/">
        <Logo color="white" height="40px" />
      </NavLink>
      
      <span>&copy; {(new Date()).getFullYear()} Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer