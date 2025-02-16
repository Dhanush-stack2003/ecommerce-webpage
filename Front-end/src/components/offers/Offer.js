import React from 'react'
import classes from './offer.module.css'
import exclusive_img from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className={classes.offer}>
        <div className={classes.offer_leftside}>
            <h1>Best Discounts on</h1>
            <h1>Top Brands</h1>
            <p>Only on Most selling products</p>
            <button>Check Now</button>
        </div>

        <div className={classes.offer_rightside}>
            <img src={exclusive_img} alt=''/>
        </div>
    </div>
  )
}

export default Offer