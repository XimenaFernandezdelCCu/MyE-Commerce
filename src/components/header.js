import {Link} from "react-router-dom"
import '../style/headerStyle.css'
import { useNavigate } from 'react-router-dom';


export default function Header({links, section}) {
  // const navigate = useNavigate();
    return (
      <div className="header" > 
        <div className="headerk">
            <h1 className="title" >MARKETFY</h1>
            <ul>
                {links.map((link, index) => 
                    <button key={index} 
                    // onClick={()=>{navigate('/cart');}} 
                    >{link}</button>
                    // <Link to='/cart' key={index}>{link}</Link>
                )
                }
            </ul>
        </div>
        <div className="headerRectangle" >
            {section}
        </div>

      </div>
    );
  };