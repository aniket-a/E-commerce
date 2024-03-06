import React, {useContext, useState} from 'react'
import "./navbar.css"
import logo from "../../Assets/logo.png"
import cart from "../../Assets/cart_icon.png"
import {Link} from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu, setMenu] = useState("SHOP")

  const {getTotalCartItems} = useContext(ShopContext)
  
  return (
    <div className="navbar">
      <div className="nav_container">
        <div className="nav_logo">
          <img src={logo} alt="" />
          <p>SHOPPER-STORE</p>
        </div>

        

        <ul className="nav_menu">
          <li onClick={() => setMenu("SHOP")}>
            <Link to="/">SHOP</Link> {menu === "SHOP" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("MEN")}>
            <Link to="/men">MEN</Link> {menu === "MEN" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("WOMEN")}>
            <Link to="/women">WOMEN</Link> {menu === "WOMEN" ? <hr /> : ""}
          </li>
          <li onClick={() => setMenu("KIDS")}>
            <Link to="/kids">KIDS</Link> {menu === "KIDS" ? <hr /> : ""}
          </li>
        </ul>

        <div className="nav_login_cart">
          <Link to="/login">
            <button className='login_btn'>Login</button>
          </Link>

          <Link to="/cart">
            <img className='cart' src={cart} alt="" />
          </Link>

          <div className="nav_cart_count">{getTotalCartItems()}</div>

        </div>

      </div>
    </div>
  );
}

export default Navbar
