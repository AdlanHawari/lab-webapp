import { createContext, useContext, useMemo, useState } from "react";

const formCreateAlatUkurContext = createContext()

export default function FormCreateAlatUkurContextProvider({children}){
    const [createAlatUkurPopUp, setCreateAlatUkurPopUp] = useState(false)

    const contextValue = useMemo(() => {
        return{
            createAlatUkurPopUp, setCreateAlatUkurPopUp 
        }
    }, [createAlatUkurPopUp, setCreateAlatUkurPopUp])

    return(
        <formCreateAlatUkurContext.Provider value={contextValue}>
            {children}
        </formCreateAlatUkurContext.Provider>
    )
}

export function useFormCreateAlatUkurContext(){
    return useContext(formCreateAlatUkurContext)
}