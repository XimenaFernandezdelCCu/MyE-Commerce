
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import { useState, useEffect } from "react";
import SignupForm from "./small/signupForm";


export default function Auth() {

  const [login, setLogin] = useState(true);
  const [validMail, setValidMail] = useState(true);
  const [validpass, setValidpass] = useState(true);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);

  var type = login ? "Login": "Signup";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleLog = ()=>{
    console.log("------------", auth);
    dispatch(authActions.log());
  }

  const handleValidation =(event)=>{
    setValidMail(false);
     console.log(event.target.value);
     if (emailRegex.test(event.target.value)){
      setValidMail(true);
     } else {
      setValidMail(false);
     }
  }

  const handleValidation2 =(event)=>{
    setValidpass(false);
     console.log(event.target.value);
     console.log()
     if (event.target.value.type===undefined){
      setValidpass(false);
      console.log("hereeee")
     } else {
      setValidpass(true);
     }
  }

  const func = ()=>{
    return(
      <h1>RETURN</h1>
    )
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
      
        <div>
          {!login ? <SignupForm></SignupForm> :
          <form>
              <label for="loginEmail" >Email</label>
              <input id="loginEmail" type="email"
              onBlur={handleValidation}></input>
              <small>{validMail?"":"Please provide a valid emal."}</small>

              <label for="loginPassword">Password</label>
              <input id="loginPassword"
              onBlur={handleValidation2} ></input>
              <small>{validpass?"":"Please enter your password."}</small>

              <button>Login</button>
          </form>}

          <h4>{`${login ? "Don't":"Already"} have an account?`}</h4>
          <button onClick={()=>{setLogin(!login)}}>{login ? "Sign Up" : "Log In"}</button>
  
        </div>

      {/* </div> */}



    </div>
  );
  };