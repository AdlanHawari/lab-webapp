import { createContext, useContext, useMemo, useState } from "react";

const pageContext = createContext();

export default function PageContextProvider({children}){
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState()
    const contextValue = useMemo(()=> {
        return {currentPage, setCurrentPage, lastPage, setLastPage}
    }, [currentPage, setCurrentPage, lastPage, setLastPage])
    return(
        <pageContext.Provider value={contextValue}>
            {children}
        </pageContext.Provider>
    )
}

export function usePageContext(){
    return useContext(pageContext)
}