import { createContext, useState } from "react";



export const globalAuthContext = createContext();

const GlobalAuth = ({children}) => {
    const [user , setUser] = useState(null)
    const [ loader , setLoader] = useState(true)

    const createUser = (email , passwords ) => {
        setLoader(true);
        return 
    }


    const info = { user , loader , createUser}
    return (
        <globalAuthContext.Provider>
            {children}
        </globalAuthContext.Provider>
    );
};

export default GlobalAuth;