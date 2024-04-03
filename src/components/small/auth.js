/* Contains Login */

// redux
import { useDispatch } from "react-redux";
import { authActions, cartActions, wishActions, ordersActions } from "../../store";
// Router 
import { useNavigate } from 'react-router-dom';
import { useState,  useContext } from "react";
// components 
import SignupForm from "./signupForm";
import LoginForm from "./loginForm"
import FormInput from "./formInput";
//context 
import {ValidationContext} from "../../context/ValidationProvider";
//
import usersData from "../../mockData/users.json"
import { handleValidInputs, getLocalInfo, activeUserToRedux, handleLogin } from "../../utils";


export default function Auth( ) {
  // State
  let [login, setLogin] = useState(true);
  // const [valid, setValid] = useState({mail:null});
  const {valid, setValid} = useContext(ValidationContext);

  const [userFound, setUserFound]=useState(null);
  // Redux
  const dispatch = useDispatch();
  // Router
  const navigate = useNavigate();
  // Users DB
  const localStoreUsers = JSON.parse(localStorage.getItem("users")); 
  
  var type = login ? "Login": "Signup";
  const {allow}= useContext(ValidationContext);
  // const allow = Object.values(valid).every((value) => value === true);

  const handleLogin = (event)=>{
    event.preventDefault();
    //  Retrieve User Input: 
    const formData = new FormData(event.target);
    const userMail = formData.get('loginEmail');
    const userPass = formData.get('loginPassword');
    console.log("input: ", userMail, userPass);

    // simulate DB Fetch:
    // find user in JSON 
    // const userDetails = usersData.find((user)=>user.mail === userMail && user.pass === userPass);
    // find user in Local Storage
    const activeUser = localStoreUsers.find((user)=>user.mail === userMail && user.pass === userPass)

    if(!activeUser || !userMail || !userPass ){
      setUserFound(false);
    } else{
      // Add User to Redux
      activeUserToRedux(activeUser, dispatch);

      localStorage.setItem("UserMail", activeUser.mail);

      navigate('/home');
    }
  }

  return (
    <div className="P3 auth flex" >

        <div className="flex">
          <h1 className="title" style={{transform: "rotate(270deg)"}}  >{type}</h1>
          <div>
              <img src="https://i.pinimg.com/564x/b4/1b/53/b41b53cb6b36265757a7404485e2acba.jpg" ></img>
          </div>
        </div>
      
        
          {!login ? 
            <SignupForm login={login} setLogin={setLogin} ></SignupForm> :
          // <LoginForm></LoginForm>

            <div className="P3" style={{minWidth: "50%"}} >
              <form 
              id="loginForm" 
              onSubmit={handleLogin}>

                <FormInput name="Email" id="loginEmail" type="email"  onblur={(event)=>handleValidInputs(event, "mail", setValid)} >
                  <small>{valid.mail==false?"Please provide a valid emal.":""}</small>
                </FormInput>

                <FormInput name="Password" id="loginPassword" type="password"  onblur={(event)=>handleValidInputs(event, "pass", setValid)} >
                  <small>{valid.pass==false?"Please enter your password.":""}</small>
                </FormInput>

                <small>{userFound==false?"We couldn't find this user, please rectify the information or create an account.":""}</small><br/>

                <button className="pill"  type="submit" htmlFor="loginForm" disabled={!allow}>Login</button>
              </form>

              <h4>{`${login ? "Don't":"Already"} have an account?`}</h4>
              <button className="HeaderLink" onClick={()=>{setLogin(!login)}}>{login ? "Sign Up" : "Log In"}</button>
      
            </div>
          }
    </div>
  );
  };


  // user to local: 
//   const someUsers = [
//     {
//       auth: false,
//     first: "Ximena",
//     last: "Cu", 
//     preferred: "Xim", 
//     mail: "xim@mail.com", 
//     pass: "a",
//     bio: "bla bla bla bla", 
//     tags: [
//         "fantasy", "fiction", "horror"
//     ],
//     pk: 1
//     },
//     {
//       auth: false,
//       first: "Lucas",
//       last: "Cu", 
//       preferred: null, 
//       mail: "luc@mail.com", 
//       pass: "a",
//       bio: null, 
//       tags: [],
//       pk: 2
//     }
//   ]
// localStorage.setItem("users", JSON.stringify(someUsers))