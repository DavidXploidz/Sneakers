import React, { useMemo, useState } from 'react'
import logo from '../assets/svg/logo.svg'
import classes from '../styles/Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import useSneakers from '../hooks/useSneakers'

function Header() {

  const { cart } = useSneakers()

  const [menu, setMenu] = useState(false)

  const items = useMemo(() => {
    return cart.length ? cart.length : '';
  }, [cart])

  const handleClickMenu = () => {
    setMenu(!menu)
    if (!menu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }

  return (
    <header className={classes.header}>
      <div className={`${classes.header__content} container`}>
        <Link to="/"><img src={logo} alt="logo icon" /></Link>
        <div type="button" onClick={ handleClickMenu } className={classes.header__ham}><i className={`bx bx-${menu ? 'x' : 'menu'}`}></i></div>
        <nav className={`${classes.header__nav} ${menu && classes['header__nav--active']}`}>
          <NavLink to="/" className={({isActive}) => isActive ? classes.active : ''}>Home</NavLink>
          <NavLink to="/tvs" className={({isActive}) => isActive ? classes.active : ''}>Tv´s</NavLink>
          <NavLink to="/cameras" className={({isActive}) => isActive ? classes.active : ''}>Cameras</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? classes.active : ''}>About</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? classes.active : ''}><span className={classes.header__cart} data-label={items}><i className='bx bx-cart'></i></span> Cart</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header