import React, { useEffect, useState } from 'react'
import classes from './popular.module.css'
import Item from '../item/item'

const Popular = () => {

const [collection,setCollection] = useState([]);


const collectionHandler = async () => {
  await fetch('https://ecommerce-backend-kxgh.onrender.com/popularinwomen').then((res)=>res.json()).then((data)=>setCollection(data))
}

 useEffect(()=>{
  collectionHandler()
 },[])

  return (
    <div className={classes.popular}>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className={classes.popular_items}>
            {collection.map((items,i)=>{
                return <Item key={i} id={items.id} name={items.product_name} image={items.image_url} new_price={items.new_price} old_price={items.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular
