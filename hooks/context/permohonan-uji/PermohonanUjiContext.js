import { createContext, useContext, useMemo, useState } from "react";

const manajemenPermohonanUjiContext = createContext()

export default function ManajemenPermohonanUjiContextProvider({children}){
    const [buatPenawaranPopUp, setBuatPenawaranPopUp] = useState(false)

    const contextValue = useMemo(()=> {
        return {
            buatPenawaranPopUp, 
            setBuatPenawaranPopUp
        }
    },[
        buatPenawaranPopUp, 
        setBuatPenawaranPopUp
    ])

    return(
        <manajemenPermohonanUjiContext.Provider value={contextValue}>
            {children}
        </manajemenPermohonanUjiContext.Provider>
    )
}

export function useManajemenPermohonanUjiContext(){
    return useContext(manajemenPermohonanUjiContext)
}
