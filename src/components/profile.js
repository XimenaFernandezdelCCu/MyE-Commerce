import { useState } from "react";
import HiddenSec from "./small/hiddenSec";
import Switch from "./small/switch";
import ProfileInfo from "./small/profileInfo";

export default function Profile() {
  const [option, setOption]=useState("info");
  const name ="ximena";
    return (
      <div className="profile">
        <div className="profileHeader P3" >
          <div className="profileImg" ><img className="circular" style={{maxHeight:"100%"}}
          src="https://i.pinimg.com/564x/7f/5c/ea/7f5cea2b706835e199e8ba2311fb1d7d.jpg" ></img></div>
          
          <h1 
          style={{gridColumnStart:"2",
                  gridColumnEnd: "3"}}>
            Welcome {name}</h1>

          <ul style={{gridColumnStart:"2",
                  gridColumnEnd: "3"}}>
            <button onClick={()=>setOption("info")} >Profile Info</button>
            <button onClick={()=>setOption("orders")}>See Orders</button>
            <button onClick={()=>setOption("whish")}>Whishlist</button>
          </ul>
        </div>
        <HiddenSec state={option}>
          {option == "info" ? <ProfileInfo></ProfileInfo> : <></> }
        </HiddenSec>
        {option == "info" ? 
          <button onClick={()=>setOption("info")}
          className="pill">Edit</button> : <></> 
        }
        
      </div>
    );
  };