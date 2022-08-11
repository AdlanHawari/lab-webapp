import { createContext, useContext, useMemo, useState } from "react";

const personnelUjiContext = createContext()

export default function PersonnelUjiContextProvider({children}){
    const [beritaAcaraPopUp, setBeritaAcaraPopUp] = useState(false)
    const [laporanUjiPopUp, setLaporanUjiPopUp] = useState(false)
    const [konfirmlaporanUjiPopUp, setKonfirmLaporanUjiPopUp] = useState(false)

    const contextValue = useMemo(() => {
        return {
            beritaAcaraPopUp, 
            setBeritaAcaraPopUp,
            laporanUjiPopUp, 
            setLaporanUjiPopUp,
            konfirmlaporanUjiPopUp,
            setKonfirmLaporanUjiPopUp 
            
        }
    }, [
        beritaAcaraPopUp, 
        setBeritaAcaraPopUp,
        laporanUjiPopUp, 
        setLaporanUjiPopUp,
        konfirmlaporanUjiPopUp, 
        setKonfirmLaporanUjiPopUp
    ])

    return(
        <personnelUjiContext.Provider value={contextValue}>
            {children}
        </personnelUjiContext.Provider>
    )
}

export function usePersonnelUjiContext(){
    return useContext(personnelUjiContext)
}