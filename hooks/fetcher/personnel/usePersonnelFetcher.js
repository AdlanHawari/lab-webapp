import { createContext, useContext } from "react";
import GetToken from "utils/GetToken";

const personnelContext = createContext()

export function PersonnelProvider({children}){
    const personnel = useProvidePersonal()
    return <personnelContext.Provider value={personnel}>{children}</personnelContext.Provider>
}

export const usePersonnelFetcher = ()=> {
    return useContext(personnelContext)
}

function useProvidePersonal(){
    const token = GetToken()

    async function getPersonnelActivity(url){
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

    async function getAssignments(url){
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

    return {
        getPersonnelActivity,
        getAssignments
    }
}