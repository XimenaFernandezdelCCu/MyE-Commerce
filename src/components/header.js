import {Link} from "react-router-dom"
import '../style/style.css'

export default function Header({links, section}) {
    return (
      <div className="header" > 
        <div className="headerk">
            <h1>MARKETFY</h1>
            <ul>
                {links.map((link, index) => 
                    <li key={index} >{link}</li>)
                }
            </ul>
        </div>
        <div className="headerRectangle" >
            {section}
        </div>

      </div>
    );
  };