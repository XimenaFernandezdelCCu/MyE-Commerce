
export default function signupForm() {
    const interests = ["Fantasy", "Sci-fy", "True Crime", "Romance", "Sciences", "Self Help", "History", "Cooking", "TeenFic", "Kids", "Horror", "Foreign"]
    return (
      <form>
        <h2>Sign Up</h2>
        <p>
            <strong>We're so excited to meet you!</strong><br/>
            Please provide the details below so we can create an account for you. 
        </p>
        <label>Name</label>
        <input placeholder="First"  type="text" ></input>
        <input placeholder="Last" type="text" ></input>

        <label>Email</label>
        <input placeholder="Email" type="email" ></input>

        <label>Bio</label>
        <p>You can tell us a little about yourself here</p>
        <textarea placeholder="I love books that take me..." ></textarea>

        <label>Pick your interests:</label>
        <fieldset>
            {interests.map((interest, index) =>
                <div key={index}>
                    <label>{interest}</label>
                    <input type="checkbox" value={interest} ></input>
                </div>
            )}
        </fieldset>


      </form>

      
    );
  };