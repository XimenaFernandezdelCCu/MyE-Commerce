
import { Link } from "react-router-dom";
import { generateUserId } from "../../utils/utils";
//components
import FormInput from "../reusable/formInput"
import Error from "../reusable/error";
import Loader from "../reusable/loader";

export default function SignupForm() {
    // const { postData, loading, data, error } = useAxiosPost();

    function handleSignup(event) {
        event.preventDefault();
        const newId = generateUserId();
        //  Retrieve User Input: 
        const formData = new FormData(event.target);
        const email = formData.get('signupEmail');
        const password = formData.get('signupPass');
        const userLog = {
            pk: newId, 
            email: email, 
            password: password
        }
        const userExtra = {
            first: formData.get('signupFirst'), 
            last: formData.get('signupLast')
        }        

        // add to list of users:
        let users=[];
        const existing = localStorage.getItem("Users_Marketfy");
        users.push(existing, newId)
        localStorage.setItem("Users_Marketfy", users);
        // add user details:
        localStorage.setItem(`${newId}_Log`, JSON.stringify(userLog));
        localStorage.setItem(`${newId}_Extra`, JSON.stringify(userExtra));
        // log them in: 
        localStorage.setItem("Marketfy_ActiveUser", newId);
        window.location.href = '/'
    }

    return (
        <div className='orangeBorderCard rounded p3' >
            <h3 className="title" >Sign Up</h3>
            <div style={{position:"relative"}}>

                {/* {loading &&
                    <Loader></Loader>
                } */}

                {/* {error.code === "ERR_NETWORK" &&
                    <Error></Error>                    
                } */}

                <form
                    id="signupForm"
                    onSubmit={handleSignup}
                >
                    <p>
                        <strong>We're so excited to meet you!</strong><br />
                        Please provide the details below so we can create an account for you.
                    </p>

                    <div>
                        <h4>Name</h4>
                        <FormInput name="First" id="signupFirst" type="text"
                        // onblur={(event)=>handleValidInputs(event, "first", setValid)}
                        >
                            {/* <small>{valid.first==false?"Please enter your First Name.":""}</small> */}
                        </FormInput>
                        <FormInput name="Last" id="signupLast" type="text"
                        // onblur={(event)=>handleValidInputs(event, "last", setValid)}
                        >
                            {/* <small>{valid.last==false?"Please enter your Last Name.":""}</small> */}
                        </FormInput>
                    </div>

                    <FormInput name="Email" id="signupEmail" type="email"
                    // onblur={(event)=>handleValidInputs(event, "mail", setValid)}
                    >
                        {/* <small>{valid.mail==false?"Please provide a valid emal.":""}</small> */}
                    </FormInput>

                    <div>
                        <div className="formInput" >
                            <label htmlFor="signupPass">
                                <h4>Password</h4>
                            </label>
                            <input
                                // ref={pass1} onChange={handlePasswordMatch}
                                name="signupPass"
                                id="signupPass"
                                // onBlur={props.onblur}
                                placeholder="***********"
                                type="password"></input>
                        </div>

                        <hr />
                    </div>

                    <div>
                        <div className="formInput"
                        // style={{display:"flex", flexDirection:"column"}} 
                        >
                            <label htmlFor="signupPass2">
                                <h4>Type your password again</h4>
                            </label>
                            <input
                                // ref={pass2} onChange={handlePasswordMatch}
                                name="signupPass2"
                                id="signupPass2"
                                // onBlur={props.onblur}
                                placeholder="***********"
                                type="password"
                            ></input>

                        </div>
                        {/* <small>{passwordMatch?"":"The passwords don't match"}</small> */}
                        <hr />
                    </div>

                    <button type="submit"
                    // disabled={!allow}
                    >
                        Create Account
                    </button>
                </form>
            </div>

            <div>
                <p>
                    <strong className="right" >Already have an account?</strong>
                    <Link to='/auth/' className="link" >Login</Link>
                </p>

            </div>
            {/* {!createAccount ?   */}

            {/* // :
                //     <form 
                onSubmit={handlesignupSave}>
                //         <p>
                //             <strong>Complete your profile</strong><br/>
                //             We want to know more about you!<br/> But if you want, you can finish setting up your profile later in the "Profile" section. 
                //         </p>
                        
                //         <ExtraDets></ExtraDets><hr/>
    
                //         <div className="flex">
                //             <button className="pill" style={{backgroundColor:"white", color:"#cc8245" }} onClick={handlesignupLog}>Skip</button>
                //             <button className="pill" type="submit" >Save</button>
                //         </div>
                //     </form>
                // } */}


        </div>

    )




}