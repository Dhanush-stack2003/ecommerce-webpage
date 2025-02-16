import React, { useContext, useRef, useState } from "react";
import logo from '../Assets/logo.png'
import '../navbar/Navbar.css'
import Dropdown_logo from '../Assets/nav_dropdown.png'
import cartLogo from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../shop-context/shop-context";

const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  const { totalCartItem} = useContext(ShopContext);

  const menuRef =useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('dropDown_menu_visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src={logo} alt="Euphoria logo" />
         <p><Link to='/' style={{textDecoration:'none'}}>Euphoria</Link></p>
      </div>

      <img src={Dropdown_logo} alt="dropdown logo" onClick={dropdown_toggle} className='dropdown_logo'/>

      <ul className='menu' ref={menuRef}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" className='link'>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" className='link'>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women" className='link'>
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" className='link'>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className='cart'>
        <div className='loginBtn'>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            {localStorage.getItem('token') ? <button onClick={()=>{localStorage.removeItem('token');window.location.replace('/')}}>Log out</button>
            :<button>LogIn</button>}
          </Link>
        </div>
        <Link to={"/cart"}>
          <img src={cartLogo} alt="" className='cart_icon'/>
        </Link>
        <p className='counter'>{totalCartItem()}</p>
      </div>
    </div>
  );
};

export default Navbar;
