import React,{useContext} from 'react'
import dropdown_menu from '../components/Assets/dropdown_icon.png'
import Item from '../components/item/item'
import classes from './css/shopCategory.module.css'
import { ShopContext } from '../shop-context/shop-context'

const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext)

  return (
      <div className={classes.shopCategory}>
      <div className={classes.banner}>
        <img src={props.banner} alt="" />
      </div>
        <div className={classes.shopCategory_SortByIndex}>
          <p>
            <span>showing 1</span> out of 13
          </p>
          <div className={classes.shopCategory_sort}>
            <span>sort by </span>
            <img src={dropdown_menu} />
          </div>
        </div>

      <div className={classes.items}>
        {all_product.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image_url}
                name={item.product_name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={classes.explore_more}>
        <div>Explore more</div>
      </div>
    </div>
  );
}

export default Shopcategory