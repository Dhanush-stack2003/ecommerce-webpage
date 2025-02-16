import React from 'react'
import classes from '../Sidebar/Sidebar.module.css'
import { Link } from 'react-router-dom';
import product_cart from '../../assets/Product_Cart.svg'
import product_list from '../../assets/Product_list_icon.svg'

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Link to='/addproduct' style={{'textDecoration':'none'}}>
        <div className={classes.sidebar_item}>
            <img src={product_cart} alt=''/>
            <p>Add product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{'textDecoration':'none'}}>
      <div className={classes.sidebar_item}>
        <img src={product_list} alt=''/>
        <p>List Products</p>
      </div>
      </Link>
    </div>
  );
}

export default Sidebar