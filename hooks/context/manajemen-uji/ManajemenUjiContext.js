import { createContext, useContext, useMemo, useState } from "react";

const manajemenUjiContext = createContext()

export default function ManajemenUjiContextProvider({children}){

    const [pemilihanJadwalPopUp, setPemilihanJadwalPopUp] = useState(false)

    const contextValue = useMemo(() => {
        return {
            pemilihanJadwalPopUp, 
            setPemilihanJadwalPopUp
        }
    }, [
        pemilihanJadwalPopUp,
        setPemilihanJadwalPopUp
    ])

    return(
        <manajemenUjiContext.Provider value={contextValue}>
            {children}
        </manajemenUjiContext.Provider>
    )
}

export function useManajemenUjiContext(){
    return useContext(manajemenUjiContext)
}