import FormInput from "./formInput"

export default function ExtraDets(){
    const interests = ["Fantasy", "Sci-fy", "True Crime", "Romance", "Sciences", "Self Help", "History", "Cooking", "TeenFic", "Kids", "Horror", "Foreign"]

    return (
        <>
        <FormInput name="Preferred Name" id="signupPreferred" type="text"></FormInput>
        <FormInput name="Bio" id="signupBio" type="text"></FormInput>
        <div className="formInput">
            <label><h2>Pick your interests:</h2></label>
            <div className="flex"
            style={{maxWidth:"70%", flexWrap:"wrap"}}>
                {interests.map((interest, index) =>
                    <div key={interest} 
                    className="flex"
                    style={{margin:"1% 5%"}}>
                        <label>{interest}</label>
                        <input type="checkbox" 
                        ></input>
                    </div>
                )}
            </div>
        </div><hr/>
        </>

    )
}