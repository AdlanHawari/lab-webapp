import { createContext, useContext } from "react";
import GetToken from "utils/GetToken";

const alatUkurFetcherContext = createContext()

export function AlatUkurFetcherProvider({children}){
        const alatUkurFetcher = useProvideAlatUkur()
        return <alatUkurFetcherContext.Provider value={alatUkurFetcher}>{children}</alatUkurFetcherContext.Provider>
}

export const useAlatUkurFetcher = () => {
    return useContext(alatUkurFetcherContext)
}

function useProvideAlatUkur(){

    const token = GetToken()

    async function getTools(url){
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
            return res
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

    async function createAlat(formData){
        var requestOptions = {
            method:'POST'  ,
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            },
            body: formData,
            redirect: 'follow'
            };

            try {
                const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools`, requestOptions)
                const res = await req.json()
        
                return res
                
            } catch (error) {
                throw error
            }
    }

    async function getToolTypes(url){
        var requestOptions = {
            method:'GET'  ,
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            },
            // body: formData,
            redirect: 'follow'
            };

            // console.log("masuk")
            try{
                const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
                const res = await req.json()
                return res
            }
            catch(e){
                console.log("error",e)
                throw e

            }

    }

    async function deleteTool(id){
        var requestOptions = {
            method:'DELETE'  ,
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            },
            redirect: 'follow'
            };
        
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools/${id}`, requestOptions)
        const res = await req.json()

        return res
    }

    async function editTool(formData, id){
        var requestOptions = {
            method:'PUT'  ,
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            },
            body: formData,
            redirect: 'follow'
            };

        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools/${id}`, requestOptions)
        const res = await req.json()

        return res
    }

    return {
        getTools,
        createAlat,
        getToolTypes,
        deleteTool,
        editTool
    }
}