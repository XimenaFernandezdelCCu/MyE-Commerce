import { useState, useRef, useContext } from "react";
// Redux 
import { useDispatch, useSelector } from "react-redux";
//components
import FormInput from "./formInput";
import ExtraDets from "./extraDets";
//context 
import {ValidationContext} from "../../context/ValidationProvider";
// Router 
import { useNavigate } from 'react-router-dom';
//functions
import { handleValidInputs, activeUserToRedux, add2LocalStore } from "../../utils";

export default function SignupForm({login, setLogin}) {
    //State 
    let [passwordMatch, setPasswordMatch ] = useState(true);
    let [createAccount, setCreateAccount] = useState(false);
    const {valid, setValid} = useContext(ValidationContext);
    const {allow}= useContext(ValidationContext);
    // Redux
    const dispatch = useDispatch();
    const reduxAuth = useSelector((state)=>state.auth);
    // Router
    const navigate = useNavigate();

    // Ref for email validation 
    let pass1 = useRef();
    let pass2 = useRef();
    //Get Users from DB (local)
    let localStoreUsers = JSON.parse(localStorage.getItem("users")); 

    let handlePasswordMatch = ()=>{
        if(pass1.current.value && pass2.current.value){
            setPasswordMatch(false);
            if(pass1.current.value != pass2.current.value){
                setPasswordMatch(false);
            } else {
                setPasswordMatch(true);
            }
        }
    } 
    
    let handleCreateAccount =(event)=>{
        event.preventDefault();
        if (passwordMatch){
            
            let pk;
            if(!localStoreUsers){
                pk= 1;
                localStoreUsers=[];
            } else {
                pk = localStoreUsers.length+1;
            }
            
            //Retrieve Input
            const formData = new FormData(event.target);
            const newUser = {
                auth: false,
                first: formData.get('signupFirst'),
                last: formData.get('signupLast'), 
                preferred: null, 
                mail: formData.get('signupEmail'), 
                pass: formData.get('signupPass'),
                bio: null, 
                tags: [],
                pk: pk
            }
           
            //Add to DB (local Storage)
            if(localStoreUsers.length){
                localStoreUsers.push(newUser)
            } else {
                localStoreUsers = [{...newUser}]
            }
            
            localStorage.setItem("users", JSON.stringify(localStoreUsers));
            activeUserToRedux(newUser, dispatch);
            setCreateAccount(true);
        }
    }

    const handlesignupSave = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);

        //Get userDetails from "create Account" form saved in redux and add the new info. 
        const completeUser = {
            ...reduxAuth.userDetails,
            auth: true,
            preferred: formData.get('signupPreferred'), 
            bio: formData.get('signupBio')  
        }
        //Add to DB (local Storage)
        let localStoreUsers = JSON.parse(localStorage.getItem("users")); 
        let activeUserIndex = localStoreUsers.findIndex((user)=>user.pk==reduxAuth.userDetails.pk);
        localStoreUsers[activeUserIndex]=completeUser;
        localStorage.setItem("users", JSON.stringify(localStoreUsers));
        // add2LocalStore(reduxAuth, completeUser )

        activeUserToRedux(completeUser, dispatch);
        // log in 
        navigate('/home');
    } 

    const handlesignupLog = ()=>{
        add2LocalStore(reduxAuth, {auth: true} );
        navigate('/home');
    }

    return (
        <div style={{minWidth: "60%"}} >
            {!createAccount ?  
                <form onSubmit={handleCreateAccount}>
                <div>
                    <div>
                        <p>
                            <strong>We're so excited to meet you!</strong><br/>
                            Please provide the details below so we can create an account for you. 
                        </p>

                        {/* <NameEmailInput></NameEmailInput> */}
                        <h2>Name</h2>
                        <FormInput name="First" id="signupFirst" type="text"  onblur={(event)=>handleValidInputs(event, "first", setValid)}>
                            <small>{valid.first==false?"Please enter your First Name.":""}</small>
                        </FormInput>
                        <FormInput name="Last" id="signupLast" type="text"  onblur={(event)=>handleValidInputs(event, "last", setValid)}>
                            <small>{valid.last==false?"Please enter your Last Name.":""}</small>
                        </FormInput>
                        <FormInput name="Email" id="signupEmail" type="email"  onblur={(event)=>handleValidInputs(event, "mail", setValid)}>
                        <small>{valid.mail==false?"Please provide a valid emal.":""}</small>
                        </FormInput>
                        <div>
                            <div className="formInput" >
                                <label htmlFor="signupPass">
                                    <h2>Password</h2>
                                </label>
                                <input ref={pass1} onChange={handlePasswordMatch}
                                name="signupPass"
                                id="signupPass"
                                // onBlur={props.onblur}
                                placeholder="***********" 
                                type="password"></input>
                            </div>
                            
                            <hr/>
                        </div>
                        <div>
                            <div   className="formInput"
                            // style={{display:"flex", flexDirection:"column"}} 
                            >
                                <label htmlFor="signupPass2">
                                    <h2>Type your password again</h2>
                                </label>
                                <input ref={pass2} onChange={handlePasswordMatch}
                                name="signupPass2"
                                id="signupPass2"
                                // onBlur={props.onblur}
                                placeholder="***********" 
                                type="password"
                                style={{justifySelf:"right"}}
                                ></input>
                                
                            </div>
                            <small>{passwordMatch?"":"The passwords don't match"}</small>
                            <hr/>
                        </div>                        

                        <button className="pill" type="submit" disabled={!allow}>
                            Create Account
                        </button>
                    </div>

                    <h4>{"Already have an account?"}</h4>
                    <button onClick={()=>{setLogin(!login)}}>{login ? "Sign Up" : "Log In"}</button>
                </div></form> 
            :
                <form onSubmit={handlesignupSave}>
                    <p>
                        <strong>Complete your profile</strong><br/>
                        We want to know more about you!<br/> But if you want, you can finish setting up your profile later in the "Profile" section. 
                    </p>
                    
                    <ExtraDets></ExtraDets><hr/>

                    <div className="flex">
                        <button className="pill" style={{backgroundColor:"white", color:"#cc8245" }} onClick={handlesignupLog}>Skip</button>
                        <button className="pill" type="submit" >Save</button>
                    </div>
                </form>
            }
          

        </div>

      
    );
  };