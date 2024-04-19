import FormInput from "../reusable/formInput"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import Error from "../reusable/error";
import Loader from "../reusable/loader";
import { detailOptions, getDetails } from "../../utils/utils";

export default function ProfileEdit() {
    const reduxAuth = useSelector((state) => state.auth);
    const [dbData, setDbData] = useState([]);

    useEffect(() => {

        setDbData(getDetails(reduxAuth.id));

    }, []);

    function handleEditDetails(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const email = formData.get(detailOptions[0].key);

        const extraDetails = {
            first:  formData.get(detailOptions[1].key), 
            last: formData.get(detailOptions[2].key),
            preferred: formData.get(detailOptions[3].key),
            bio:  formData.get(detailOptions[4].key),
            interest:  formData.get(detailOptions[5].key)
        }
        
        let userLog = JSON.parse(localStorage.getItem(`${reduxAuth.id}_Log`));
        userLog.email = email;
        localStorage.setItem(`${reduxAuth.id}_Log`, JSON.stringify(userLog));

        localStorage.setItem(`${reduxAuth.id}_Extra`, JSON.stringify(extraDetails));

        window.location.href = "/profile/"
    }

    return (
        <><h1>Edit</h1>
            <div className="relative greyContainer rounded"  >
                {/* {error ?
                    <Error></Error>
                    :
                    <>
                    {loading ?
                        <Loader></Loader>
                        : */}
                        <>
                        <form id="editDetails" onSubmit={handleEditDetails} style={{ position: "relative" }}>
                            
                            <>
                            {detailOptions.map((detail, index) =>

                            <FormInput key={index}
                                name={detail.display} id={detail.key}
                                value={dbData[detail.key] ? JSON.stringify(dbData[detail.key]).slice(1,-1):"" } 
                            ></FormInput>
                            )}
                            <button
                                type="submit" htmlFor={"editDetails"}
                            >Save Changes</button>
                            </>
                           


                        </form>
                        </>
                    {/* }
                    </>
                } */}

            </div>
        </>
    )
}