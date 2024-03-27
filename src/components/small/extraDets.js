
export default function ExtraDets(){
    const interests = ["Fantasy", "Sci-fy", "True Crime", "Romance", "Sciences", "Self Help", "History", "Cooking", "TeenFic", "Kids", "Horror", "Foreign"]

    return (
        <>
        <div className="flex profileInfoItem" >
            <label><h2>Preferred Name</h2></label>
            <input type="text" placeholder="What do you want us to call you?"></input>
        </div><hr/>

        <div className="flex profileInfoItem">
            <label><h2>Bio</h2></label>
            <textarea placeholder="I love books that take me..." ></textarea>
            {/* {userDetails.bio ? 
                <textarea placeholder="I love books that take me..." ></textarea>
            :
                <h4>Complete your profile to add your bio</h4>  
            }    */}
        </div><hr/>

        <div className="flex profileInfoItem">
            <label><h2>Pick your interests:</h2></label>
            <div className="flex"
            style={{maxWidth:"70%", flexWrap:"wrap"}}>
                {interests.map((interest, index) =>
                    <div key={interest} 
                    className="flex"
                    style={{margin:"1% 5%"}}>
                        <label>{interest}</label>
                        <input type="checkbox" 
                        // value={interest} 
                        ></input>
                    </div>
                )}
            </div>
        </div><hr/>

        </>

    )
}