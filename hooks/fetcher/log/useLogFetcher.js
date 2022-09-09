import { createContext, useContext } from "react"
import GetToken from "utils/GetToken"

const userLogContext = createContext()

export function LogProvider({children}){
    const log = useProvideLog()
    return <userLogContext.Provider value={log}>{children}</userLogContext.Provider>
}

export const useLogFetcher = ()=> {
    return useContext(userLogContext)
}

function useProvideLog(){
    const token = GetToken()
    async function getUserLog(url){
        let error
        let requestOptions = {
            method:'GET'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
        };
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
        const res = await req.json()
        if(res.header.response_code == 200){
            const data = res.data
            const header = res.header
            return {
                header,
                data
            }
        }
        if(res.header.response_code == 401){
            error = new Error(res.error)
            error.status = res.header.response_code
            error.info = res
            throw error
        }
    }

    async function deleteLog(id){
        var requestOptions = {
            method:'DELETE'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
        };
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logs/${id}`, requestOptions)
        const res = await req.json()
        return res
    }
    return {
        getUserLog,
        deleteLog
    }
}