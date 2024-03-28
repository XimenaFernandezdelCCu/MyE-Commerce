import { createContext } from "react";


// found needs to be data.length

// provide initial value
export const BrowseContext = createContext({
    page: 0, 
    found: ["true" , 0],
});