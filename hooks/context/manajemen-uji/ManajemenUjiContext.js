import { createContext, useContext, useMemo, useState } from "react";

const manajemenUjiContext = createContext()

export default function ManajemenUjiContextProvider({children}){

    const [pemilihanJadwalPopUp, setPemilihanJadwalPopUp] = useState(false)
    const [editJadwalPopUp, setEditJadwalPopUp] = useState(false)
    const [dokumenPenugasanPopUp, setDokumenPenugasanPopUp] = useState(false)
    const [tanggalRegisBalisPopUp, setTanggalRegisBalisPopUp] = useState(false)
    const [konfirmLaporanUjiPopUp, setKonfirmLaporanUjiPopUp] = useState(false)
    const [regisBapetenPopUp, setRegisBapetenPopUp] = useState(false)
    const [sertifLukPopUp, setSertifLukPopUp] = useState(false)
    const [ubahLaporanUjiPopUp, setUbahLaporanUjiPopUp] = useState(false)
    const [cancelUjiPopUp, setCancelUjiPopUp] = useState(false)

    const contextValue = useMemo(() => {
        return {
            pemilihanJadwalPopUp, 
            setPemilihanJadwalPopUp,
            dokumenPenugasanPopUp,
            setDokumenPenugasanPopUp,
            tanggalRegisBalisPopUp,
            setTanggalRegisBalisPopUp,
            konfirmLaporanUjiPopUp,
            setKonfirmLaporanUjiPopUp,
            regisBapetenPopUp, 
            setRegisBapetenPopUp,
            sertifLukPopUp, 
            setSertifLukPopUp,
            ubahLaporanUjiPopUp, 
            setUbahLaporanUjiPopUp,
            cancelUjiPopUp, 
            setCancelUjiPopUp,
            editJadwalPopUp, 
            setEditJadwalPopUp
            
        }
    }, [
        pemilihanJadwalPopUp,
        setPemilihanJadwalPopUp,
        dokumenPenugasanPopUp,
        setDokumenPenugasanPopUp,
        tanggalRegisBalisPopUp,
        setTanggalRegisBalisPopUp,
        konfirmLaporanUjiPopUp,
        setKonfirmLaporanUjiPopUp,
        regisBapetenPopUp, 
        setRegisBapetenPopUp,
        sertifLukPopUp, 
        setSertifLukPopUp,
        ubahLaporanUjiPopUp, 
        setUbahLaporanUjiPopUp,
        cancelUjiPopUp, 
        setCancelUjiPopUp,
        editJadwalPopUp,
        setEditJadwalPopUp
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