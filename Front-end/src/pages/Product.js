import React,{useContext} from 'react'
import classes from './css/Product.module.css'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import { ShopContext } from '../shop-context/shop-context'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Description from '../components/Description/Description'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'

const Product = () => {

  const  {all_product}  = useContext(ShopContext);
  const {productID} = useParams();

  const product = all_product.find((item)=>item.id === Number(productID))


  return (
    <div className={classes.product}>
        <Breadcrum products={product}/>
        <ProductDisplay product={product}/>
        <Description/>  
        <RelatedProducts/>
    </div>
  )
}

export default Product