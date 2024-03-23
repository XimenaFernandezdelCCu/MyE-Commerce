
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SignupForm from "./small/signupForm";


export default function Auth({handleEmailValidation, validMail}) {

  let [login, setLogin] = useState(true);
  let [validpass, setValidpass] = useState(true);

  // ------------redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);

  var type = login ? "Login": "Signup";

  const handleLogin = (event)=>{
    event.preventDefault();
    console.log("------------", auth);
    dispatch(authActions.login());
    navigate('/home');
  }

  const handleValidation2 =(event)=>{
    setValidpass(false);
     if (event.target.value.length<1){
      setValidpass(false);
      console.log("hereeee")
     } else {
      setValidpass(true);
     }
  }

  return (
    <div className="P3 auth flex" >
      {/* <button onClick={handleLog} >Auth</button>aaa - {`My name is ${auth}!`} */}

      {/* <div> */}
        <div>
          <h1 className="title" >{type}</h1>
          <div>
              <img></img>
          </div>
        </div>
      
        
          {!login ? <SignupForm login={login} setLogin={setLogin} ></SignupForm> :
          <div>
            <form>
                <label htmlFor="loginEmail" >Email</label>
                <input id="loginEmail" type="email"
                onBlur={handleEmailValidation}></input>
                <small>{validMail?"":"Please provide a valid emal."}</small>

                <label htmlFor="loginPassword">Password</label>
                <input id="loginPassword"
                onBlur={handleValidation2} ></input>
                <small>{validpass?"":"Please enter your password."}</small>

                <button onClick={handleLogin} >Login</button>
            </form>
            <h4>{`${login ? "Don't":"Already"} have an account?`}</h4>
            <button onClick={()=>{setLogin(!login)}}>{login ? "Sign Up" : "Log In"}</button>
    
          </div>
          }

          

      {/* </div> */}



    </div>
  );
  };