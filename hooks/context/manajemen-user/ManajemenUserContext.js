import { createContext, useContext, useMemo, useState } from "react";
import GetToken from "utils/GetToken";

const manajemenUserContext = createContext()

export default function ManajemenUserContextProvider({children}){
    const [rolePopUp, setRolePopUp] = useState(false)
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false)

    const contextValue = useMemo(()=> {
        return {
            rolePopUp,
            setRolePopUp,
            isCreateUserOpen,
            setIsCreateUserOpen
        }
    }, 
    [ 
        rolePopUp,
        setRolePopUp,
        isCreateUserOpen,
        setIsCreateUserOpen
    ])

    return(
        <manajemenUserContext.Provider value={contextValue}>
            {children}
        </manajemenUserContext.Provider>
    )
}

export function useManajemenUserContext(){
    return useContext(manajemenUserContext)
}

