import { useSelector, useDispatch} from "react-redux";
import { authActions } from "../../store";
import NameEmailInput from "./nameEmailInput";
import ExtraDets from "./extraDets";


export default function ProfileInfoCopy ({setOption}) {

    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    console.log("State: ------", authState);
    
    const handleSaveEdit=(event)=>{
        event.preventDefault();
        console.log("--- Save Edit");
        const newFirst = ["first", event.target[0].value];
        const newLast = ["last",event.target[1].value];
        const newMail = ["mail", event.target[2].value];
        const newPreferred = ["preferred", event.target[3].value]; 
        const newBio = ["bio", event.target[4].value];
        const some =Array.prototype.slice.call(event.target.children[9].children[1].children);
        const interestArray = ["tags"]
        interestArray.push(some.filter((div)=>div.children[1].checked).map((div)=>div.innerText));
        const newItemsArray = [newFirst, newLast, newMail, newPreferred, newBio, interestArray];
        console.log(newItemsArray);
        
        for (let i =0; i<newItemsArray.length; i++){
            console.log([i]);
            if(newItemsArray[i][1]!="" || newItemsArray[i][1].length>0){
                console.log("dispatch: ", newItemsArray[i][0],newItemsArray[i][1] )
                const payload = {key: newItemsArray[i][0], value: newItemsArray[i][1]}
                dispatch(authActions.include(payload));
            }
        }
        setOption("info");
    }   

    return (
        <form id="editPersonalInfo"
        className="profileInfo P3"
        onSubmit={(event)=>handleSaveEdit(event)} >

            <h1 style={{alignSelf:"center"}}
            >Edit Personal Information</h1>
    
            <NameEmailInput></NameEmailInput>

            <ExtraDets></ExtraDets>

            <div style={{display:"flex", alignSelf:"center", padding:"1%"}}> 
                <button className="pill"
                type="submit"
                style={{ backgroundColor:"white"}}
                >Cancel</button>

                <button className="pill"
                type="submit"
                
                >Save</button>
            </div>
        </form>
    )

};