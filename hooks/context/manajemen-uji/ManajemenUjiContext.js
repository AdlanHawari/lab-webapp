import { createContext, useContext, useMemo, useState } from "react";

const manajemenUjiContext = createContext()

export default function ManajemenUjiContextProvider({children}){

    const [pemilihanJadwalPopUp, setPemilihanJadwalPopUp] = useState(false)
    const [dokumenPenugasanPopUp, setDokumenPenugasanPopUp] = useState(false)
    const [tanggalRegisBalisPopUp, setTanggalRegisBalisPopUp] = useState(false)

    const contextValue = useMemo(() => {
        return {
            pemilihanJadwalPopUp, 
            setPemilihanJadwalPopUp,
            dokumenPenugasanPopUp,
            setDokumenPenugasanPopUp,
            tanggalRegisBalisPopUp,
            setTanggalRegisBalisPopUp
        }
    }, [
        pemilihanJadwalPopUp,
        setPemilihanJadwalPopUp,
        dokumenPenugasanPopUp,
        setDokumenPenugasanPopUp,
        tanggalRegisBalisPopUp,
        setTanggalRegisBalisPopUp
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