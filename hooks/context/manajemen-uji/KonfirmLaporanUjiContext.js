import { createContext, useContext, useMemo, useState } from "react";

const konfirmLaporanUjiContext = createContext()

export default function KonfirmLaporanUjiContextProvider({children}){
    const [terimaPopUp, setTerimaPopUp] = useState(false)
    const [tolakPopUp, setTolakPopUp] = useState(false)

    const contextValue = useMemo(() => {
        return {
            terimaPopUp,
            setTerimaPopUp,
            tolakPopUp,
            setTolakPopUp
        }
    }, [
        terimaPopUp,
        setTerimaPopUp,
        tolakPopUp,
        setTolakPopUp

    ])

    return(
        <konfirmLaporanUjiContext.Provider value={contextValue}>
            {children}
        </konfirmLaporanUjiContext.Provider>
    )
}

export function useKonfirmLaporanUjiContext(){
    return useContext(konfirmLaporanUjiContext)
}