import React, { useContext } from 'react'
import classes from './ProductDisplay.module.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../shop-context/shop-context';

const ProductDisplay = (props) => {
    const {product} = props;
    const { addtoCart } = useContext(ShopContext)
  return (
    // <div className={classes.product_display}>
    //   <div className={classes.left_size}>
    //     <div className={classes.product_right_side}>
    //       <div className={classes.product_images}>
    //         <div className={classes.image_container}>
    //           <img src={product.image_url} alt="cloth" />
    //           <img src={product.image_url} alt="cloth" />
    //           <img src={product.image_url} alt="cloth" />
    //           <img src={product.image_url} alt="cloth" />
    //           <img src={product.image_url} alt="cloth" />
    //         </div>
    //       </div>
    //       <div>
    //         <img className={classes.main_image} src={product.image_url} alt='cloth'/>
    //       </div>

    //       <div className={classes.product_details}>
    //         <div className={classes.title}>
    //           <h3>{product.product_name}</h3>
    //         </div>
    //         <div className={classes.description}>
    //           <p>pure cotton</p>
    //         </div>
    //         <div className={classes.new_price}>
    //           <p>${product.new_price}</p>
    //         </div>
    //         <div className={classes.old_price}>
    //           <p>${product.old_price}</p>
    //         </div>
    //         <div className={classes.rating}>
    //           <img src={star_icon} alt="" />
    //           <img src={star_icon} alt="" />
    //           <img src={star_icon} alt="" />
    //           <img src={star_icon} alt="" />
    //           <img src={star_dull_icon} alt="" />
    //         </div>
    //         <div className={classes.choose_size}>
    //           <h2>Select size</h2>
    //           <div className={classes.right_size}>
    //             <div>S</div>
    //             <div>M</div>
    //             <div>L</div>
    //             <div>XL</div>
    //             <div>XXL</div>
    //           </div>
    //         </div>
    //         <div className={classes.Add_to_cart}>
    //           <button
    //             onClick={() => {
    //               addtoCart(product.id);
    //             }}
    //           >
    //             Add to cart
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={classes.productDisplay}>
      <div className={classes.productDisplay_left}>
        <div className={classes.productDisplay_img_list}>
          <img src={product.image_url} alt="" />
          <img src={product.image_url} alt="" />
          <img src={product.image_url} alt="" />
          <img src={product.image_url} alt="" />
        </div>
        <div className={classes.productDisplay_img}>
          <img
            className={classes.productDisplay_main_img}
            src={product.image_url}
            alt=""
          />
        </div>
      </div>
      <div className={classes.productDisplay_right}>
        <h1>{product.product_name}</h1>
        <div className={classes.productDisplay_right_prices}>
          <div className={classes.productDisplay_right_price_old}>
            ${product.old_price}
          </div>
          <div className={classes.productDisplay_right_price_new}>
            ${product.new_price}
          </div>
        </div>
        <div className={classes.productDisplay_right_start_container}>
          <img
            src={star_icon}
            alt=""
            className={classes.productDisplay_right_star}
          />
          <img
            src={star_icon}
            alt=""
            className={classes.productDisplay_right_star}
          />
          <img
            src={star_icon}
            alt=""
            className={classes.productDisplay_right_star}
          />
          <img
            src={star_icon}
            alt=""
            className={classes.productDisplay_right_star}
          />
          <img
            src={star_dull_icon}
            alt=""
            className={classes.productDisplay_right_star}
          />
          <p>(122)</p>
        </div>
        <div className={classes.productDisplay_right_size}>
          <h1>Select Size</h1>
          <div className={classes.productDisplay_right_sizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div>
          <p className={classes.productDescription}>
            Soft, breathable, and lightweight, cotton clothing offers all-day
            comfort and durability. Perfect for any season, it keeps you cool in
            summer and cozy in winter.
          </p>
        </div>
        <button onClick={(id) => addtoCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDisplay