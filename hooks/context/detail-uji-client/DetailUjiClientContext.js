import { createContext, useContext, useMemo, useState } from "react";

const detailUjiClientContext = createContext()

export default function DetailUjiClientContextProvider({children}){
    const [persPenawaranOpen, setPersPenawaranOpen] = useState(false)
    const [formPraUjiOpen, setFormPraUjiOpen] = useState(false)
    const [uploadDokumenOpen, setUploadDokumenOpen] = useState(false)
    const [cancelUjiPopUp, setCancelUjiPopUp] = useState(false)
    const contextValue = useMemo(() => {
        return {
            persPenawaranOpen, 
            setPersPenawaranOpen,
            formPraUjiOpen, 
            setFormPraUjiOpen,
            uploadDokumenOpen,
            setUploadDokumenOpen,
            cancelUjiPopUp, 
            setCancelUjiPopUp
        }
    }, 
    [
        persPenawaranOpen, 
        setPersPenawaranOpen,
        formPraUjiOpen, 
        setFormPraUjiOpen,
        uploadDokumenOpen,
        setUploadDokumenOpen,
        cancelUjiPopUp,
        setCancelUjiPopUp
    ])

    return(
        <detailUjiClientContext.Provider value={contextValue}>
            {children}
        </detailUjiClientContext.Provider>
    )
}

export function useDetailUjiClientContext(){
    return useContext(detailUjiClientContext)
}