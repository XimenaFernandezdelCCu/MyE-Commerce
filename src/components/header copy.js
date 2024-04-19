import {Link} from "react-router-dom"
import '../style/headerStyle.css'
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../utils";

export default function Header({links, section}) {
  const dispatch = useDispatch();
  // const mail = localStorage.getItem("UserMail");
  const cartLength = useSelector((state) => state.cart.cartItems.length);
  const reduxAuth = useSelector((state)=>state.auth);

  const isAuthenticated = reduxAuth.auth;
  
  const where = window.location.pathname;
  console.log("where: ", where);

  let banner;
  switch (where) {
    case '/':
      banner = "welcome";
      break;
    case '/home':
      banner = "Find some books!";
      break;
    case '/profile':
      banner = "profile";
      break;
    case '/cart': 
    banner = "cart";
      break;
    case '/products/:id':
      banner = "Product";
      break;
    default:
      banner = "Marketfy";
  }
  

  return (
    <div className="header" > 
      <div className="headerk">
          <h1 className="title" >MARKETFY</h1>
          {isAuthenticated? 

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
              
              <Link  
              to='/' 
              className="HeaderLink"
              onClick={()=>handleLogout(dispatch, reduxAuth)}
              >Logout</Link>
          </ul>
          :
            <div className="HeaderLink">login</div>
          }
      </div>
      <div className="headerRectangle" >
          {banner}
      </div>

    </div>
  );
  };