import {Link} from "react-router-dom"
import '../style/headerStyle.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authActions } from "../store";

export default function Header({links, section}) {
  const linkStyle ={
    color: "#cc8245", 
    textDecoration: "none", 
    fontWeight: "bolder", 
    // "&:hover": {
    //   color: "#cc8245"
    // }
  }
  const dispatch = useDispatch();
  const handleLogout = ()=>{
    dispatch(authActions.logout())
  }
  // const navigate = useNavigate();
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
                <Link to='/home' style={linkStyle}>Shop</Link>
                <Link to='/cart' style={linkStyle}>Cart</Link>
                <Link to='/profile' style={linkStyle}>Profile</Link>
                <Link  to='/profile'
                onClick={handleLogout}
                style={linkStyle}>Logout</Link>
            </ul>
        </div>
        <div className="headerRectangle" >
            {section}
        </div>

      </div>
    );
  };