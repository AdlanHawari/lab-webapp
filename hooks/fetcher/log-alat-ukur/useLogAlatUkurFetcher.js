import { createContext, useContext } from "react";
import GetToken from "utils/GetToken";

const useLogAlatUkurContext = createContext()

export function LogAlatUkurProvider({children}){
    const logAlatUkur= useProvideLogAlatUkur()
    return <useLogAlatUkurContext.Provider value={logAlatUkur}>{children}</useLogAlatUkurContext.Provider>
}

export const useLogAlatUkurFetcher = () => {
    return useContext(useLogAlatUkurContext)
}

function useProvideLogAlatUkur(){
    const token = GetToken()
    async function getLogAlatUkur(url){
        let requestOptions = {
            method:'GET'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
        };
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
        const res = await req.json()
        return res
    }

    async function deleteLogAlatUkur(id){
        let requestOptions = {
            method:'DELETE'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
        };
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logs-tool/${id}`, requestOptions)
        const res = await req.json()
        return res
    }
    return {
        getLogAlatUkur,
        deleteLogAlatUkur
    }
}