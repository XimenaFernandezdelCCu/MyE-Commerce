import { createContext, useState } from "react";

const HomeContext = createContext();

export function HomeProvider ({children}){
    const [found, setFound] = useState();
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    return(
        <HomeContext.Provider 
        value={{
            found, setFound, 
            page, setPage, 
            data, setData, 
            showModal, setShowModal
        }}
        >
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider;
export {HomeContext};