import { createContext, useContext, useMemo, useState } from "react";

const jenisAlatFilterContext = createContext()

export default function JenisAlatFilterContextProvider({children}){
    const [jenisAlatState, setJenisAlatState] = useState("")

    const contextValue = useMemo(() => {
        return {jenisAlatState, setJenisAlatState}
    }, [jenisAlatState, setJenisAlatState])

    return(
        <jenisAlatFilterContext.Provider value={contextValue}>{children}</jenisAlatFilterContext.Provider>
    )
}

export function useJenisAlatFilterContext(){
    return useContext(jenisAlatFilterContext)
}