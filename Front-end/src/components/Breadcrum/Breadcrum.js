import React from 'react'
import classes from './Breadcrum.module.css'
import arrow from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {

  const { products } = props;

  return (
  <div className={classes.breadcrum}>
    <p> Shop <img src={arrow} alt=''/> Product <img src={arrow} alt=''/> {products.category}<img src={arrow}/> {products.product_name} <img src={arrow} alt=''/></p>
  </div>
  );
}

export default Breadcrum