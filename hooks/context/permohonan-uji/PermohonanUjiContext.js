import { createContext, useContext, useMemo, useState } from "react";

const manajemenPermohonanUjiContext = createContext()

export default function ManajemenPermohonanUjiContextProvider({children}){
    const [buatPenawaranPopUp, setBuatPenawaranPopUp] = useState(false)
    const [konfirmPembayaranPopUp, setKonfirmPembayaranPopUp] = useState(false)

    const contextValue = useMemo(()=> {
        return {
            buatPenawaranPopUp, 
            setBuatPenawaranPopUp,
            konfirmPembayaranPopUp,
            setKonfirmPembayaranPopUp
        }
    },[
        buatPenawaranPopUp, 
        setBuatPenawaranPopUp,
        konfirmPembayaranPopUp,
        setKonfirmPembayaranPopUp
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
