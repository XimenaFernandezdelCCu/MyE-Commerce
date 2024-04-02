// redux
import { useDispatch } from "react-redux";
import { authActions, cartActions, wishActions, ordersActions } from "../../store";
// Router 
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
// components 
import SignupForm from "./signupForm";
//
import usersData from "../../mockData/users.json"
import { handleValidInputs, getLocalInfo } from "../../utils";


export default function Auth( ) {

  let [login, setLogin] = useState(true);
  const [valid, setValid] = useState({mail:null});
  const [userFound, setUserFound]=useState(null);
  // ------------redux
  const dispatch = useDispatch();
  // ------router
  const navigate = useNavigate();

  var type = login ? "Login": "Signup";
  const allow = Object.values(valid).every((value) => value === true);

  const handleLogin = (event)=>{
    event.preventDefault();
    // REF? Retrieve inputs 
    const userMail = event.target.children[2].value;
    const userCont = event.target.children[8].value;
    // simulate DB Fetch:
    const userDetails = usersData.find((user)=>user.mail === userMail && user.pass === userCont);

    if(!userMail || !userCont || !userDetails){
      setUserFound(false);
    } else{
      const payload = {
        first: userDetails.first,
        last: userDetails.last,
        preferred: userDetails.preferred, 
        mail: userDetails.mail, 
        pass: userDetails.pass, 
        bio: userDetails.bio, 
        tags: userDetails.tags, 
        pk: userDetails.pk
      }
      dispatch(authActions.login(payload));

      //local Store:
      const key = "Marketfy_"+userDetails.mail
      // const localStore = JSON.parse(localStorage.getItem(key));
      // console.log("LOCAL: ",localStore);
      const localStore = getLocalInfo(userDetails.mail);
      //

      if(localStore === null){
        localStorage.setItem(key, JSON.stringify({
          auth: true, 
          userDetails: payload
        }))
      } else {
        const updated = {...localStore} 
        updated.auth = true; 
        localStorage.setItem(key, JSON.stringify(updated))
        if(localStore.cart){
          console.log("loading Cart from local storage")
          dispatch(cartActions.setCart(localStore.cart));
        }
        if (localStore.wish){
          console.log("loading Wishlist from local storage")
          dispatch(wishActions.setWishlist(localStore.wish));
        }
        if(localStore.orders){
          console.log("loading orders from local storage")
          dispatch(ordersActions.setOrders(localStore.orders))
        }
      }
      navigate('/home');
    }
  }

  return (
    <div className="P3 auth flex" >

      {/* <div> */}
        <div>
          <h1 className="title" >{type}</h1>
          <div>
              <img></img>
          </div>
        </div>
      
        
          {!login ? <SignupForm login={login} setLogin={setLogin} ></SignupForm> :
          <div className="P3" style={{minWidth: "50%"}} >
            <form id="loginForm" onSubmit={handleLogin} >
                <label htmlFor="loginEmail" >Email</label><br/>
                <input id="loginEmail" type="email"
                onBlur={(event)=>handleValidInputs(event, "mail", setValid)}></input><br/>
                <small>{valid.mail==false?"Please provide a valid emal.":""}</small><br/>

                <label htmlFor="loginPassword">Password</label><br/>
                <input id="loginPassword"
                onBlur={(event)=>handleValidInputs(event, "pass", setValid)} ></input><br/>
                <small>{valid.pass==false?"Please enter your password.":""}</small><br/>

                <small>{userFound==false?"We couldn't find this user, please rectify the information or create an account.":""}</small><br/>

                <button  type="submit" htmlFor="loginForm" disabled={!allow}>Login</button>
            </form>
            <h4>{`${login ? "Don't":"Already"} have an account?`}</h4>
            <button onClick={()=>{setLogin(!login)}}>{login ? "Sign Up" : "Log In"}</button>
    
          </div>
          }

          

      {/* </div> */}



    </div>
  );
  };