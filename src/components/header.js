import {Link} from "react-router-dom"
import '../style/headerStyle.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../utils";

export default function Header({links, section}) {
  const dispatch = useDispatch();
  const userMail = useSelector((state) => state.auth.userDetails.mail);  
  console.log("userMail header: ", userMail);

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
              <Link to='/cart' className="HeaderLink">Cart</Link>
              <Link to='/profile' className="HeaderLink">Profile</Link>
              <Link  to='/profile'className="HeaderLink"
              onClick={()=>handleLogout(dispatch, userMail)}
              >Logout</Link>
          </ul>
      </div>
      <div className="headerRectangle" >
          {section}
      </div>

    </div>
  );
  };