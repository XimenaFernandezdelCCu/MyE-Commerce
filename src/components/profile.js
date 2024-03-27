import { useState } from "react";
import HiddenSec from "./small/hiddenSec";
import ProfileInfo from "./small/profileInfo";
import ProfileInfoCopy from "./small/profileInfoCopy";
import { useSelector } from "react-redux";
import users from '../mockData/users.json'
import Wishlist from "./small/wishlist";



export default function Profile() {
  const [option, setOption]=useState("info");

  const authState = useSelector((state) => state.auth);

  // PROVISIONAL:
  const user = authState.userDetails.pk == 0 ? users[1] : authState.userDetails;
  
  const pref = user.preferred ? user.preferred : user.first; 

  const name ="ximena";
    return (
      <div className="profile">
        <div className="profileHeader flex" >
          <div className="profileImg" ><img className="circular" style={{maxHeight:"20vh"}}
          src="https://i.pinimg.com/564x/7f/5c/ea/7f5cea2b706835e199e8ba2311fb1d7d.jpg" ></img></div>
          <div>
            <h1 className="title" >
              Welcome {pref}!</h1>
              <p>"It's the possibility of having a dream come true that makes life interesting." <br/>
              <strong>The Alchemist" by Paulo Coelho</strong> </p>
          </div>
          
        </div>

        <div className="profileBody" >
          <ul>
            <button onClick={()=>setOption("info")} 
            className="pill">Profile Info</button>
            <button onClick={()=>setOption("edit")}
            className="pill"
            style={{alignSelf:"center"}}>Edit my Info</button>
            <button onClick={()=>setOption("orders")}
            className="pill">See Orders</button>
            {/* <button onClick={()=>setOption("info")} 
            className="pill">Whishlist</button> */}
            
          </ul>

          <HiddenSec state={option}>
            {option == "info" ? <ProfileInfo user={user} ></ProfileInfo> : 
              option == "edit" ? <ProfileInfoCopy setOption={setOption} ></ProfileInfoCopy> : <h1>Orders</h1> 
            }
          </HiddenSec>
        </div>

        <Wishlist></Wishlist>

      </div>
    );
  };