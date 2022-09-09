import { createContext, useContext } from "react";
import GetToken from "utils/GetToken";

const summaryContext = createContext()

export function SummaryProvider({children}){
    const summary = useProvideSummary()
    return <summaryContext.Provider value={summary}>{children}</summaryContext.Provider>
}

export const useSummaryFetcher = () => {
    return useContext(summaryContext)
}

function useProvideSummary(){
    const token = GetToken()
    async function getSummary(url){
        let error
        const token = GetToken()
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

    async function getInstitutions(url){

        const token = GetToken()
        let requestOptions = {
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
        }
        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }
    return {
        getInstitutions,
        getSummary
    }
}