import { createContext, useContext, useMemo, useState } from "react";

const persPenawaranContext = createContext()

export default function PersPenawaranContextProvider({children}){
    const [persPenawaranOpen, setPersPenawaranOpen] = useState(false)
    const contextValue = useMemo(() => {
        return {persPenawaranOpen, setPersPenawaranOpen}
    }, [persPenawaranOpen, setPersPenawaranOpen])
    return(
        <persPenawaranContext.Provider value={contextValue}>
            {children}
        </persPenawaranContext.Provider>
    )
}

export function usePersPenawaranContext(){
    return useContext(persPenawaranContext)
}