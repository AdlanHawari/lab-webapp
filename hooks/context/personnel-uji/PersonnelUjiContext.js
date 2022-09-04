import { createContext, useContext, useMemo, useState } from "react";

const personnelUjiContext = createContext()

export default function PersonnelUjiContextProvider({children}){
    const [beritaAcaraPopUp, setBeritaAcaraPopUp] = useState(false)
    const [laporanUjiPopUp, setLaporanUjiPopUp] = useState(false)
    const [editLaporanUjiPopUp, setEditLaporanUjiPopUp] = useState(false)
    const [konfirmlaporanUjiPopUp, setKonfirmLaporanUjiPopUp] = useState(false)

    const contextValue = useMemo(() => {
        return {
            beritaAcaraPopUp, 
            setBeritaAcaraPopUp,
            laporanUjiPopUp, 
            setLaporanUjiPopUp,
            konfirmlaporanUjiPopUp,
            setKonfirmLaporanUjiPopUp,
            editLaporanUjiPopUp, 
            setEditLaporanUjiPopUp
            
        }
    }, [
        beritaAcaraPopUp, 
        setBeritaAcaraPopUp,
        laporanUjiPopUp, 
        setLaporanUjiPopUp,
        konfirmlaporanUjiPopUp, 
        setKonfirmLaporanUjiPopUp,
        editLaporanUjiPopUp, 
        setEditLaporanUjiPopUp
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