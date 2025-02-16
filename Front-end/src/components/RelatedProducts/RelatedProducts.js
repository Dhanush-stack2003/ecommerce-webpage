import React, { useEffect, useState } from 'react'
import classes from './RelatedProducts.module.css'
import Item from '../item/item' 

const RelatedProducts = () => {

const [data,setData] = useState([]);

const datathandler = async () => {
  await fetch('https://ecommerce-backend-kxgh.onrender.com/relatedproducts').then((res)=>res.json()).then((data)=>setData(data))
}

 useEffect(()=>{
  datathandler()
 },[])

  return (
    <div className={classes.related_products}>
      <div className={classes.section}>
        <h2>Related Products</h2>
        <hr/>
      </div>
        <div className={classes.related_product_items} onClick={window.scrollTo(0,0)}>
            {data.map((item,i)=>{
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.product_name}
                    image={item.image_url}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
            })}
        </div>
    </div>
  )
}

export default RelatedProducts
