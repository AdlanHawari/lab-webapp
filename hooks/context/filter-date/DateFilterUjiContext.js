import { createContext, useContext, useMemo, useState } from "react";

const DateFilterUjiContext = createContext();

export default function DateFilterUjiContextProvider({children}){
    const [startDateFilter, setStartDateFilter] = useState("")
    const [endDateFilter, setEndDateFilter] = useState("")
    const contextValue= useMemo(() => {
        return {startDateFilter, setStartDateFilter, endDateFilter, setEndDateFilter}
    }, [startDateFilter, setStartDateFilter, endDateFilter, setEndDateFilter])
    return(
        <DateFilterUjiContext.Provider value={contextValue}>
            {children}
        </DateFilterUjiContext.Provider>
    )
}

export function useDateFilterUjiContext(){
    return useContext(DateFilterUjiContext)
}
