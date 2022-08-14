import { createContext, useContext } from "react";

const useListUjiContext = createContext()

export function ArsipListUjiProvider({children}){
    const uji = useProvideArsipList()
    return <useListUjiContext.Provider value={uji}>{children}</useListUjiContext.Provider>
}


export const useArsipListFetcher = ()=> {
    return useContext(useListUjiContext)
}

function useProvideArsipList(){

    
    return {

    }
}