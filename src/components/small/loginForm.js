// import axios from 'axios';
//hooks
// import { useAxiosPost } from '../../hooks/useAxiosPost';
// import { loginAction } from '../../utils/responseActions';
import { findUser } from '../../utils/utils';
import { Link } from 'react-router-dom';
//components
import FormInput from "../reusable/formInput"
import Loader from '../reusable/loader';
import Error from '../reusable/error';
import { useState } from 'react';

export default function LoginForm(){
    const [status, setStatus]= useState();
    const [message, setMessage]= useState();
 

    function handleLogin(event){
        event.preventDefault();
        //  Retrieve User Input: 
        const formData = new FormData(event.target);
        const email = formData.get('loginEmail');
        const pass = formData.get('loginPassword');

        const response = findUser(email, pass)
        console.log(response)
        if(response.status == 200){
            // log them in: 
            localStorage.setItem("Marketfy_ActiveUser", response.userId);
            window.location.href = '/'
        } else {
            setStatus(response.status);
            setMessage(response.message);
        }

    }   

  
    return (
        <div className='orangeBorderCard rounded p3' >
            <h3 className='title' >Login</h3>

            <div style={{position:"relative"}}>
{/* 
                {loading &&
                    <Loader></Loader>
                }

                {error.code === "ERR_NETWORK" &&
                    <Error></Error>                    
                } */}

                <form 
                id="loginForm" 
                onSubmit={handleLogin}>
                    <p>
                        <strong>Welcome Back!</strong><br />
                        Please provide your authentication details.
                    </p>

                    <FormInput name="Email" id="loginEmail" type="email"  
                    // onblur={(event)=>handleValidInputs(event, "mail", setValid)} 
                    >
                    {/* <small>{valid.mail==false?"Please provide a valid emal.":""}</small> */}
                    {status == 400 && 
                        <div>
                        <small>{message}</small>
                        </div>
                    }
                    </FormInput>

                    <FormInput name="Password" id="loginPassword" type="password"  
                    // onblur={(event)=>handleValidInputs(event, "pass", setValid)} 
                    >
                    {/* <small>{valid.pass==false?"Please enter your password.":""}</small> */}
                    {status == 401 && 
                        <div>
                        <small>{message}</small>
                        </div>
                    }
                    </FormInput>
                    

                    {/* <small>{userFound==false?"We couldn't find this user, please rectify the information or create an account.":""}</small><br/> */}

                    <button  type="submit"
                    //  htmlFor="loginForm" 
                    // disabled={!allow}
                    >Login</button>
                </form>

            </div>

            <div>
                <p>
                    <strong className='right' >Are you new here?</strong>
                    <Link to='/auth/signup' className="link" >Create an Account</Link>
                </p>

            </div>
      
        </div>
    )
}