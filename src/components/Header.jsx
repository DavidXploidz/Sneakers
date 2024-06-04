import React from 'react'
import logo from '../assets/svg/logo.svg'
import classes from '../styles/Header.module.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className={classes.header}>
      <div className={`${classes.header__content} container`}>
        <img src={logo} alt="logo icon" />
        <nav className={classes.header__nav}>
          <NavLink to="/" className={({isActive}) => isActive ? classes.active : ''}>Home</NavLink>
          <NavLink to="/men" className={({isActive}) => isActive ? classes.active : ''}>Men</NavLink>
          <NavLink to="/women" className={({isActive}) => isActive ? classes.active : ''}>Women</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? classes.active : ''}>About</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? classes.active : ''}>Cart</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header