import React from 'react'
import classes from './footer.module.css'
import Footer_logo from '../Assets/logo_big.png'
import Instagram_logo from '../Assets/instagram_icon.png'
import Whatsapp_logo from '../Assets/whatsapp_icon.png'
import pintrest from '../Assets/pintester_icon.png'


const Footer = () => {
  return (
    <div className={classes.Footer}>
        <div className={classes.Brand_logo}>
            <img src={Footer_logo} alt=''/>
            <p className={classes.name}>Euphoria</p>
        </div>

        <div className={classes.contact_info}>
            <ul className={classes.contact}>
                <li>Products</li>
                <li>Offices</li>
                <li>Contact us</li>
                <li>About us</li>
            </ul>
        </div>
        <div className={classes.logos}>
            <div className={classes.logo_container}>
                <img src={Instagram_logo} alt=''/>
                <p>Instagram</p>
            </div>
            <div className={classes.logo_container}>
                <img src={Whatsapp_logo} alt=''/>
                <p>Whatsapp</p>
            </div>
            <div className={classes.logo_container}>
                <img src={pintrest} alt=''/>
                <p>Pintrest</p>
            </div>

        </div>

        <div className={classes.copyrights}>
            <p>copyright @ 2024 - All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer