import {Link} from "react-router-dom"
import {useState } from "react";
import '../style/headerStyle.css'
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../utils";

export default function Header({links, section}) {
  const dispatch = useDispatch();
  const mail = localStorage.getItem("UserMail");
  const cartLength = useSelector((state) => state.cart.cartItems.length);

  

  return (
    <div className="header" > 
      <div className="headerk">
          <h1 className="title" >MARKETFY</h1>
          <ul> 
              {/* {links.map((link, index) => 
                  // <button key={index} 
                  // // onClick={()=>{navigate('/cart');}} 
                  // >{link}</button>
                  <Link to='/cart' key={index}>{link}</Link>
              )
              } */}
              <Link to='/home' className="HeaderLink">Shop</Link>
              <div style={{position:"relative"}} >
                {cartLength>0 ? <div className="notification">{cartLength}</div>:""}
                <Link to='/cart' className="HeaderLink" style={{marginRight:"2vw"}} >Cart</Link>
              </div>
              <Link to='/profile' className="HeaderLink">Profile</Link>
              <Link  to='/profile'className="HeaderLink"
              onClick={()=>handleLogout(dispatch, mail)}
              >Logout</Link>
          </ul>
      </div>
      <div className="headerRectangle" >
          {section}
      </div>

    </div>
  );
  };