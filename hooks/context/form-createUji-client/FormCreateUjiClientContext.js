import { createContext, useContext, useMemo, useState } from "react";

const formCreateUjiClientContext = createContext()

export default function FormCreateUjiClientContextProvider({children}){
    const [createUjiPopUp, setCreateUjiPopUp] = useState(false)
    const contextValue = useMemo(()=> {
        return {
            createUjiPopUp, 
            setCreateUjiPopUp
        }
    },[createUjiPopUp, setCreateUjiPopUp])
    return(
        <formCreateUjiClientContext.Provider value={contextValue}>
            {children}
        </formCreateUjiClientContext.Provider>
    )
}

export function useFormCreateUjiClientContext(){
    return useContext(formCreateUjiClientContext)
}