import React, { useContext, useState } from 'react'
import classes from './css/LoginSignup.module.css'
import { ShopContext } from '../shop-context/shop-context';


const LoginSignup = () => {
    
  const [auth,setAuth] = useState('Log in');

   const [formData,setFormdata] = useState({
    username:'',
    email:'',
    password:''
  })

  const loginHandler =async ()=>{
    let responseData;
    await fetch(`http://localhost:4000/login`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('token',responseData.token)
      window.location.replace('/')
    }
    else{
      alert(responseData.error)
    }
  }

  const signinHandler = async ()=>{
    let responseData;
    await fetch('http://localhost:4000/signin',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('token',responseData.token)
      window.location.replace('/')
    }
    else{
      alert(responseData.error)
    }
  }

  const changeHandler = (e) => {
    setFormdata({...formData,[e.target.name]:e.target.value})
  }

  return (
    <div className={classes.LoginSignup}>
      <h1>{auth}</h1>
      <hr/>
      <div className={classes.loginSigupField}>
        <div className={classes.signupField}>
         {auth === 'Sign In' && <input type="text" value={formData.username} onChange={changeHandler} name='username' placeholder="your name" />}
         <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder="your email id" required/> 
         <input type="password" name='password'onChange={changeHandler} value={formData.password} placeholder="Enter password" required/>
        </div>
        <div className={classes.submission_Btn}>
          <button onClick={auth==='Sign In' ? signinHandler : loginHandler}>{auth}</button>
        </div>
        <div className={classes.already_loggedIn}>
          {auth === 'Sign In' ?<p>I already have an account  <span onClick={()=>{setAuth('Log In')}}>Log In</span></p>:<p>i don't have an account <span onClick={()=>{setAuth('Sign In')}}>Sign In</span></p>}
        </div>
        <div className={classes.agreement}>
          <input type="checkbox" />
          <p>By continuing, I'm agree with your Policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup