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
    const token = GetToken()
    async function getUsers(url){
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

    async function createInstitution(formData){
        var requestOptions = {
            method:'POST'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
            };

        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/institutions`, requestOptions)
        const res = await req.json()
        return res
    }

    async function createUser(formData){
        let requestOptions = {
            method:'POST'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
            };
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, requestOptions)
        const res = await req.json()
        return res
    }

    async function deleteUser(id){
        let requestOptions = {
            method:'DELETE'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
            };
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, requestOptions)
        const res = await req.json()
        return res
    }

    async function editUser(formData){
        let requestOptions = {
            method:'PUT'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
            };
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, requestOptions)
        const res = await req.json()
        return res
    }
    
    return {
        getUsers,
        createInstitution,
        createUser,
        deleteUser,
        editUser
    }
}