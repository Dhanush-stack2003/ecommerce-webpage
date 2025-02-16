import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/logo_big.png'
import admin_icon from '../../assets/nav-profile.svg'

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_section}>
        <div className={classes.navbar_logo_section}>
          <img className={classes.navbar_logo} src={logo} alt="" />
          <h1 className={classes.navbar_title}>Euphoria</h1>
        </div>
      </div>
        <img className={classes.admin_logo} src={admin_icon} alt="" />
    </div>
  );
}

export default Navbar