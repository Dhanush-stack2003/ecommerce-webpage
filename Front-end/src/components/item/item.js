import React from 'react'
import classes from './item.module.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className={classes.item}>
      <Link to={`/product/${props.id}`}><img src={props.image} /></Link>
      <p>{props.name}</p>

      <div className={classes.item_prices}>
        <div className={classes.item_new_price}>
          <p>${props.old_price}</p>
        </div>
        <div className={classes.item_old_price}>
          <p>${props.new_price}</p>
        </div>
      </div>
    </div>
  );
}

export default Item