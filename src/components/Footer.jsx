import classes from '../styles/Footer.module.css'
import logo from '../assets/svg/logo.svg'

export default function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={`${classes.footer__content} container`}>
            <img src={logo} alt="image logo" />
            <p>All rights reserved &#169; 2024</p>
        </div>
    </footer>
  )
}
