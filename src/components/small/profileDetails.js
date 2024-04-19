import Detail from "../reusable/detail";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"

import { Link } from "react-router-dom"
import Loader from "../reusable/loader";
import Error from "../reusable/error";
import { detailOptions, getDetails } from "../../utils/utils";




export default function ProfileDetails(){
    const reduxAuth = useSelector((state) => state.auth);
    console.log("reduxAuth: ", reduxAuth);

    const detailName = ["Email", "First Name", "Last Name", "Preferred Name", "Bio", "Interest Tags"];
    const [dbData, setDbData] = useState([]);

    
    useEffect(() => {
        setDbData(getDetails(reduxAuth.id));

    }, []);



    return (
        <><h1>Details</h1>
            <div className="relative greyContainer rounded" >
                {/* {error ?
                    <Error></Error>
                    :
                    <>
                        {loading ?
                            <Loader></Loader>
                            : */}
                            <>
                            {detailOptions.map((detail, index)=>
                                // detail ?
                                <Detail key={index}
                                name={detail.display} 
                                value={dbData[detail.key] ? JSON.stringify(dbData[detail.key]).slice(1,-1)
                                    :
                                    <>
                                    <p>To add your {detailName[index]} go to:</p> 
                                     <Link to='/profile/edit' className="HeaderLink" >Edit Profile</Link>
                                    </>
                                } 
                                ></Detail>
                                // :
                                // <div>
                                //     <h3>To add your {detailName[index]} go to: 
                                //     <Link to='/profile/edit' className="HeaderLink" >Edit Profile</Link>
                                //     </h3>
                                //     <hr/>
                                // </div>
                                
                            )}
                            </>
                        {/* // } */}
                    {/* </> */}
                {/* } */}

            </div>
       
        </>
    )
}