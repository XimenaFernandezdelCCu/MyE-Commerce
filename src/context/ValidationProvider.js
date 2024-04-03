import { createContext, useState } from "react";

const ValidationContext = createContext();

export function ValidationProvider ({children}){
    const [valid, setValid] = useState({mail:null});
    const allow = Object.values(valid).every((value) => value === true);

    return(
        <ValidationContext.Provider value={{valid, setValid, allow}} >
            {children}
        </ValidationContext.Provider>
    )
}

export default ValidationProvider;
export {ValidationContext};