import { createContext, useContext, useMemo, useState } from "react";

const detailUjiClientContext = createContext()

export default function DetailUjiClientContextProvider({children}){
    const [persPenawaranOpen, setPersPenawaranOpen] = useState(false)
    const [formPraUjiOpen, setFormPraUjiOpen] = useState(false)
    const [uploadDokumenOpen, setUploadDokumenOpen] = useState(false)

    const contextValue = useMemo(() => {
        return {
            persPenawaranOpen, 
            setPersPenawaranOpen,
            formPraUjiOpen, 
            setFormPraUjiOpen,
            uploadDokumenOpen,
            setUploadDokumenOpen,
        }
    }, 
    [
        persPenawaranOpen, 
        setPersPenawaranOpen,
        formPraUjiOpen, 
        setFormPraUjiOpen,
        uploadDokumenOpen,
        setUploadDokumenOpen,
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