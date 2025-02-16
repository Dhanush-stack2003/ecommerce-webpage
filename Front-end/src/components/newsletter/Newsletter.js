import React from 'react'
import classes from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={classes.Newsletter}>
        <h1>Get updates on your Email</h1>
        <p>Subscribe to our News Letter to stay updated</p>
        <div className={classes.emailfield}>
            <input type='email' placeholder='your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter