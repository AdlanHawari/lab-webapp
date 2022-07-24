import { createContext, useContext } from "react";
import GetToken from "utils/GetToken";

const manajemenUserFetcherContext = createContext()

export function ManajemenUserFetcherProvider({children}){
    const manajemenUserFetcher = useProvideManajemenUser()
    return <manajemenUserFetcherContext.Provider value={manajemenUserFetcher}>{children}</manajemenUserFetcherContext.Provider>
}

export const useManajemenUserFetcherContext = () => {
    return useContext(manajemenUserFetcherContext)
}

function useProvideManajemenUser(){

    async function getUsers(url){
        let error

        const token = GetToken()
        var requestOptions = {
        method:'GET'  ,
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'Content-Type': 'application/json'
        },
        redirect: 'follow'
        };

        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
        const res = await req.json()
        console.log('response', res)

        if(res.header.response_code == 200){
            const data = res.data
            const header = res.header
            return {
                data,
                header
            }
        }

        if(res.header.response_code == 401){
            error = new Error(res.message)
            error.status = res.status_code
            error.info = res
            throw error
        }

        if(res.header.response_code == 422){
            error = new Error(res.message)
            error.status = res.status_code
            error.info = res
            throw error
        }
    }

    return {
        getUsers
    }
}