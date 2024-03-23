import { useState, useRef } from "react";

export default function SignupForm({login, setLogin}) {

    let [passwordMatch, setPasswordMatch ] = useState(true);
    let [createAccount, setCreateAccount] = useState(false);

    const interests = ["Fantasy", "Sci-fy", "True Crime", "Romance", "Sciences", "Self Help", "History", "Cooking", "TeenFic", "Kids", "Horror", "Foreign"]

    let pass1 = useRef();
    let pass2 = useRef();

    let handlePasswordMatch = ()=>{
        setPasswordMatch(false);
        if(pass1.current.value != pass2.current.value){
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
        
    } 

    let handleCreateAccount =(event)=>{
        console.log("in")
        event.preventDefault();
        if (passwordMatch){
            setCreateAccount(true);
        }
    }

    return (
        <div>

        <form>
            <h2>Sign Up</h2>
            {!createAccount ?  
                <div>
                    <div>
                    <p>
                        <strong>We're so excited to meet you!</strong><br/>
                        Please provide the details below so we can create an account for you. 
                    </p>
                    <label >Name</label> <br/>
                    <input placeholder="First"  type="text" ></input><br/>
                    <input placeholder="Last" type="text" ></input><br/>

                    <label htmlFor="emailInput">Email</label> <br/>
                    <input id="emailInput" placeholder="Email" type="email" ></input><br/>

                    <label>Password</label><br/>
                    <input placeholder="Password" ref={pass1} type="password"
                    ></input><br/>
                    <label>Type your password again</label><br/>
                    <input placeholder="Password" ref={pass2} type="password"
                    onChange={handlePasswordMatch}></input><br/>
                    <small>{passwordMatch?"":"The passwords don't match"}</small>

                    <button onClick={handleCreateAccount} >Create Account</button>
                    </div>

                    <h4>{"Already have an account?"}</h4>
                    <button onClick={()=>{setLogin(!login)}}>{login ? "Sign Up" : "Log In"}</button>
                </div>
            :
                <div>
                    <p>
                        <strong>Complete your profile</strong><br/>
                        We want to know more about you!<br/> But if you want, you can finish setting up your profile later in the "Profile" section. 
                    </p>
                    <label>Bio</label>
                    <p>You can tell us a little about yourself here</p>
                    <textarea placeholder="I love books that take me..." ></textarea><br/>

                    <label>Pick your interests:</label>
                    <fieldset className="flex">
                        {interests.map((interest, index) =>
                            <div key={index}>
                                <label>{interest}</label>
                                <input type="checkbox" value={interest} ></input>
                            </div>
                        )}
                    </fieldset>
                    <div>
                        <button>Skip</button>
                        <button>Save</button>
                    </div>
                </div>
            }
        </form>   

        </div>

      
    );
  };