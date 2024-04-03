// //Router 
// import { useNavigate } from 'react-router-dom';
// // redux 
// import { Dispatch } from '@reduxjs/toolkit';
// // functions
// import { handleLogin } from "../../utils"


// export default function LoginForm () { 
//     const navigate = useNavigate();
    
//     return (
//     <div className="P3" style={{minWidth: "50%"}} >
//         <form id="loginForm" onSubmit={(event)=>{handleLogin(event, dispatch)}} >
//             <label htmlFor="loginEmail" >Email</label><br/>
//             <input id="loginEmail" type="email"
//             onBlur={(event)=>handleValidInputs(event, "mail", setValid)}></input><br/>
//             <small>{valid.mail==false?"Please provide a valid emal.":""}</small><br/>

//             <label htmlFor="loginPassword">Password</label><br/>
//             <input id="loginPassword"
//             onBlur={(event)=>handleValidInputs(event, "pass", setValid)} ></input><br/>
//             <small>{valid.pass==false?"Please enter your password.":""}</small><br/>

//             <small>{userFound==false?"We couldn't find this user, please rectify the information or create an account.":""}</small><br/>

//             <button className="pill"  type="submit" htmlFor="loginForm" disabled={!allow}>Login</button>
//         </form>
//         <h4>{`${login ? "Don't":"Already"} have an account?`}</h4>
//         <button className="HeaderLink" onClick={()=>{setLogin(!login)}}>{login ? "Sign Up" : "Log In"}</button>

//     </div>
//     )
// }