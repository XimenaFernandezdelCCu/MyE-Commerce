
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SignupForm from "./signupForm";
import usersData from "../../mockData/users.json"
import { handleValidInputs } from "../../utils";


export default function Auth( ) {

  let [login, setLogin] = useState(true);
  const [valid, setValid] = useState({mail:null});
  const [userFound, setUserFound]=useState(null);
  // ------------redux
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  // ------router
  const navigate = useNavigate();
  var type = login ? "Login": "Signup";
  const allow = Object.values(valid).every((value) => value === true);

  const handleLogin = (event)=>{
    event.preventDefault();
    console.log("------------", authState);
    const userMail = event.target.children[2].value;
    const userCont = event.target.children[8].value;
    console.log("ented: ", userMail, userCont);
    const userDetails = usersData.find((user)=>user.mail === userMail && user.pass === userCont);
    console.log("found user: ", userDetails);

    if(!userMail || !userCont || !userDetails){
      setUserFound(false);
    } else{
      console.log("***",userDetails.pk, userDetails.first, userDetails.preferred )
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