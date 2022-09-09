import { createContext, useContext, useMemo, useState } from "react";

const institutionFilterContext = createContext()

export default function InstitutionFilterContextProvider({children}){
    const [institutionState, setInstitutionState] = useState(-1)
    const contextValue = useMemo(() => {
        return {institutionState, setInstitutionState}
    }, [institutionState, setInstitutionState])
    return(
        <institutionFilterContext.Provider value={contextValue}>
            {children}
        </institutionFilterContext.Provider>
    )
}

export function useInstitutionFilterContext(){
    return useContext(institutionFilterContext)
}