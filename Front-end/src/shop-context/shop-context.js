import React,{createContext, useState,useEffect} from 'react'

export const ShopContext = createContext(null);

const defaultCart = () => {
    let cart = {}  
    for(let index=0 ; index < 300+1 ; index++){
    cart[index] = 0
 }
 return cart
}

 const ShopContextProvider = (props) => {
    const [all_product,setAllproducts] = useState([])
    const [cartItems,setCartItems] = useState(defaultCart());
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>setAllproducts(data))

         if (localStorage.getItem("token")) {
           fetch("http://localhost:4000/getcart", {
             method: "POST",
             headers: {
               Accept: "application/json",
               'auth-token': `${localStorage.getItem("token")}`,
               "Content-Type": "application/json",
             },
             body: "",
           })
             .then((res) => res.json())
             .then((data) => {setCartItems(data)});
         }
    },[])
    
const addtoCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    if(localStorage.getItem('token')){
    fetch('http://localhost:4000/addtocart',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'auth-token':`${localStorage.getItem('token')}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'itemId':itemId})
    })
    }
    console.log('added')
}

const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(localStorage.getItem('token')){
    fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'auth-token':`${localStorage.getItem('token')}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'itemId':itemId})
    }).then((res)=>res.json()).then((data)=>console.log(data))
    console.log('removed')
}
}

const totalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = all_product.find((product)=>product.id === Number(item))
            totalAmount += itemInfo.new_price * cartItems[item]
        }
    }
    return totalAmount;
}

const totalCartItem = () => {
    let cartValues = 0
    for(const cart in cartItems ){
        cartValues += cartItems[cart]
    }
    return cartValues
}


    const ShopContextValue = {all_product,defaultCart,addtoCart,removeFromCart,totalCartAmount,totalCartItem,cartItems}
    return(
        <ShopContext.Provider value={ShopContextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider