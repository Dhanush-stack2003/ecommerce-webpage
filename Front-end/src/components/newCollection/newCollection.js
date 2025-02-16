import React, { useEffect, useState } from 'react'
import classes from './newCollection.module.css'
import Item from '../item/item'

const NewCollection = () => {

  const [new_collection,setnew_collection] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/latestcollection').then((res)=>res.json()).then((data)=>setnew_collection(data))
  },[])

  return (
    <div className={classes.new_collection}>
     <h1>New collection</h1>
     <hr/>
     <div className={classes.collection_items}>
        {new_collection.map((items,i)=>{
            return <Item key={i} id={items.id} name={items.product_name} image={items.image_url} new _price={items.new_price} old_price={items.old_price}/>
        })}
     </div>
    </div>
  )
}

export default NewCollection