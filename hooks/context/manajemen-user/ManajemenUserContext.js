import { createContext, useContext, useMemo, useState } from "react";

const manajemenUserContext = createContext()

export default function ManajemenUserContextProvider({children}){
    const [rolePopUp, setRolePopUp] = useState(false)
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false)
    const [createInstForm, setCreateInstForm ] = useState(false)
    const contextValue = useMemo(()=> {
        return {
            rolePopUp,
            setRolePopUp,
            isCreateUserOpen,
            setIsCreateUserOpen,
            createInstForm, 
            setCreateInstForm
        }
    }, 
    [ 
        rolePopUp,
        setRolePopUp,
        isCreateUserOpen,
        setIsCreateUserOpen,
        createInstForm, 
        setCreateInstForm
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

