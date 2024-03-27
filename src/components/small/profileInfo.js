import { useSelector} from "react-redux";
import users from '../../mockData/users.json';


export default function ProfileInfo ({user}) {
    const interests = ["fantasy", "Sci-Fy", "Horror"];
    const pref = user.preferred ? user.preferred : user.first; 

    console.log("user passed", user);

    return (
        <div className="profileInfo P3" >
            <div>
                <div className="flex profileInfoItem" >
                    <h2>Preferred Name</h2>
                    <h2>{pref}</h2>
                </div><hr></hr>

                <div className="flex profileInfoItem" >
                    <h2>Name</h2>
                    <div className="flex">
                        <h2>{user.first}</h2>
                        <h2>{user.last}</h2>
                    </div>
                </div><hr></hr>

                <div className="flex profileInfoItem" >
                    <h2>Mail</h2>
                    <h2>{user.mail}</h2>
                </div><hr></hr>

            </div>

            <div className="flex profileInfoItem">
                <h2>Bio</h2>
                {user.bio ? 
                    <p>{user.bio}</p>
                :
                    <h4>Complete your profile to add your bio</h4>  
                }   
            </div><hr></hr>
                
            <div className="flex profileInfoItem">
                <h2>Interests</h2>
                {user.tags.length >0 ? 
                    user.tags.map((interest)=>
                        <li key={interest} 
                        className="pill"
                        style={{backgroundColor:"#8eaf67", listStyle:"none", padding: ".1rem .5rem"}}>
                            {interest}</li>)
                : <h4>Complete your profile to add Interests</h4>
                }
            </div>

        </div>
    )

};