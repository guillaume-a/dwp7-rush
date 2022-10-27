import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.js'

const Header = () => {
  return (
    <header>
        <NavLink to="/">
            <Logo color="#FF6060" height="68px"/>
        </NavLink>

        <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/about">À propos</NavLink></li>
        </ul>
    </header>
  )
}

export default Header