

export default function NameEmailInput(){
    return (
        <>
        <div className="flex profileInfoItem" >
            <label><h2>Name</h2></label>    
            <div className="flex">
                <input placeholder="First"  type="text" ></input>
                <input placeholder="Last" type="text" ></input>
            </div>
        </div><hr/>

        <div className="flex profileInfoItem" >
            <label htmlFor="emailInput"><h2>Email</h2></label>
            <input id="emailInput" placeholder="Email" type="email" ></input>
        </div><hr/>

        </>

    )
}