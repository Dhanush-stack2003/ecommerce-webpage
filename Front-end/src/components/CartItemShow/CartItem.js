import React, { useContext,useState } from 'react'
import classes from './CartItem.module.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../shop-context/shop-context'

const CartItem = () => {

  const [discount,setDiscount] = useState('');
  const [EnteredDiscount,setEnteredDiscount] = useState('')

  const DiscountHandler = () =>{
    setEnteredDiscount(discount)
  }

    const {all_product,cartItems,removeFromCart,totalCartAmount} = useContext(ShopContext)
  return (
    <div className={classes.CartItem}>
      <div className={classes.CartItem_main}>
        <p>Product</p>
        <p>title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className={(classes.CartItem_products, classes.CartItem_main)}>
              <img src={item.image_url}key={item.id} className={classes.CartItem_img} alt='cloth'/>
              <p className={classes.product_name}>{item.product_name}</p>
              <p className={classes.product_price}>${item.new_price}</p>
              <button className={classes.CartItem_quantity}>
                {cartItems[item.id]}
              </button>
              <p>${item.new_price * cartItems[item.id]}</p>
              <img
                className={classes.remove_icon}
                src={remove_icon}
                alt=""
                onClick={() => {
                  removeFromCart(item.id);
                }}
              />
          <hr/>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className={classes.CartItem_down}>
        <div className={classes.CartItem_total_item}>
          <h1>cart Totals</h1>
          <div>
            <div className={classes.CartItem_price}>
              <p>Subtotal</p>
              <p>${totalCartAmount()}</p>
            </div>
            <hr/>
            <div className={classes.CartItem_price}>
              <p>Shipping Fee</p>
              <p style={{ color: "green" }}>Free</p>
            </div>
            <hr/>
            <div className={classes.CartItem_price}>
              <p>Total</p>
              <h3>
                $
                {EnteredDiscount === "FIRST123"
                  ? totalCartAmount() - 100
                  : totalCartAmount()}
              </h3>
            </div>
          </div>
          <button className={classes.total_button}>Check out</button>
        </div>
      <div className={classes.promocode}>
          <p>If you have any Promocode, Enter here</p>
           <div className={classes.promobox}>
          <input
            type="text"
            value={discount}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
            placeholder='Promo code'
            />
          <button
            onClick={() => {
              DiscountHandler();
            }}
            >
            Apply
          </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem