import React from 'react'
import classes from './hero.module.css'
import Arrow from '../Assets/arrow.png'
import handIcon from '../Assets/hand_icon.png'
import exclusive from '../Assets/hero_image.png'


const Hero = () => {
  return (
    <div className={classes.hero}>
        <div className={classes.leftSide}>
            <h2>ALL NEW ARRIVALS</h2>
            <div>
                <div className={classes.handIcon}>
                    <p>new</p>
                    <img src={handIcon} alt=''/>
                </div>
                    <p>collection</p>
                    <p>for everyone</p>
            </div>
            <div className={classes.latestBtn}>
                <div>Latest collection</div>
                <img src={Arrow} alt=''/>
            </div>
        </div>
        <div className={classes.rightSide}>
            <img src={exclusive} alt=''/>
        </div>
    </div>
  )
}

export default Hero