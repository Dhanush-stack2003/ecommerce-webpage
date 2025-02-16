import React,{useEffect, useState} from 'react'
import classes from '../ListItem/ListProduct.module.css'
import arrow_icon from '../../assets/cross_icon.png'

function ListProduct() {

  const [allproducts,setAllproducts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/allproducts")
         .then((res) => res.json())
         .then((data) => setAllproducts(data));
  },[])

  const removeProducts = async (id) => {
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    }).then((res)=>res.json()).then((data)=>console.log(data))
  }

  return (
    <div className={classes.all_products}>
      <h1>All Products</h1>
      <div className={classes.all_products_format}>
        <p>Product</p>
        <p>Name</p>
        <p>Old_price</p>
        <p>new_price</p>
        <p>Category</p>
        <p>Remove product</p>
      </div>
      {/* classes.listproduct_format */}
      {allproducts.map((product, index) => {
        return (
          <>
            <hr />
            <div key={index} id={product.id} className={`${classes.all_products_format} ${classes.listproduct_format}`}>
              <img
                src={product.image_url}
                className={classes.listproduct_icon}
              />
              <p>{product.product_name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={()=>{removeProducts(product.id)}}
                className={classes.listProduct_remove_icon}
                src={arrow_icon}
                alt=""
              />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ListProduct