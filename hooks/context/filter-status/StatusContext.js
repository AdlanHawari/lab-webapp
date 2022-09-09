import { createContext, useState, useMemo, useContext } from "react";

const statusFilterContext = createContext();

export default function StatusFilterContextProvider({children}){
    const [statusFilter, setStatusFilter] = useState()
    const contextValue = useMemo(()=> {
        return {statusFilter, setStatusFilter}
    }, [statusFilter, setStatusFilter])
    return(
        <statusFilterContext.Provider value={contextValue}>
            {children}
        </statusFilterContext.Provider>
    )
}

export function useStatusFilterContext(){
    return useContext(statusFilterContext)
}