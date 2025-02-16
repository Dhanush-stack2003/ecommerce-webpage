import React,{useState} from 'react'
import classes from './Addproduct.module.css'
import upload_file from '../../assets/upload_area.svg'

function Addproduct() {

    const [file,setfile] = useState(false);

    const [product,setProduct] = useState({
        product_name:'',
        image_url:'',
        category:'women',
        new_price:'',
        old_price:'',
    })

    const fileHandler = (e) =>{
        setfile(e.target.files[0])
    }

    const productHandler = (e) =>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const submitrequest = async () => {
      let ResponseData;
      let productvalues = product;

      let formData = new FormData();
      formData.append("products", file);

        await fetch('http://localhost:4000/upload',{
        method:'POST',
        headers:{
          Accept:'application/json'
        },
        body:formData,
      }).then((res)=>res.json()).then((data)=>ResponseData=data)

      if(ResponseData.success){
        productvalues.image_url= ResponseData.image_url

         await fetch('http://localhost:4000/addproducts',{
          method:'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(productvalues)
        }).then((res)=>res.json()).then((data)=>data?alert("product added"):alert("unable process"))

      }
    }

  return (
    <div className={classes.addproduct}>
      <div className={classes.addproduct_itemfield}>
        <p>Product Title</p>
        <input type="text" value={product.product_name} placeholder="Enter here" name='product_name' onChange={productHandler}/>
      </div>
        <div className={classes.addproduct_price}>
      <div className={classes.addproduct_itemfield}>
          <p>Price</p>
          <input type="number" value={product.old_price} placeholder="Enter here" name='old_price' onChange={productHandler}/>
        </div>
      <div className={classes.addproduct_itemfield}>
          <p>Offer</p>
          <input type="number" value={product.new_price} placeholder="Enter here" name='new_price' onChange={productHandler}/>
        </div>
      </div>
      <div className={classes.addproduct_selectors}>
        <p>Product Category</p>
        <select name='category' value={product.category} className={classes.addproduct_category} onChange={productHandler}>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">kids</option>
        </select>
      </div>
      <div className={classes.addproduct_thumnail_img}>
        <label htmlFor="file_upload">
          <img
            src={file ? URL.createObjectURL(file) : upload_file}
            alt=""
          />
        </label>
        <input id="file_upload" hidden type="file" value={product.image_url} name='image_url' onChange={fileHandler}/>
      </div>
      <div className={classes.addproduct_btn}>
        <button onClick={submitrequest}>Add products</button>
      </div>
    </div>
  );

}
export default Addproduct