import { createContext, useContext, useMemo, useState } from "react";

const docNumberFilterContext = createContext()

export default function DocNumberFilterContextProvider({children}){
    const [docNumState, setDocNumState] = useState("")
    const contextValue = useMemo(() => {
        return {docNumState, setDocNumState}
    }, [docNumState, setDocNumState])

    return(
        <docNumberFilterContext.Provider value={contextValue}>{children}</docNumberFilterContext.Provider>
    )
}

export function useDocNumberFilterContext(){
    return useContext(docNumberFilterContext)
}