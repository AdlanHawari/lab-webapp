import { createContext, useContext } from "react";
import GetToken from "utils/GetToken";

const detailUjiFetcherContext = createContext()

export function DetailUjiFetcherProvider({children}){
    const detailUji = useProvideDetailUjiFetcher()
    return <detailUjiFetcherContext.Provider value={detailUji}>{children}</detailUjiFetcherContext.Provider>
}

export const useDetailUji = () => {
    return useContext(detailUjiFetcherContext)
}

function useProvideDetailUjiFetcher(){

    const token = GetToken()

    async function confirmTestApp(testApplicationId){
        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: null,
            redirect: 'follow'
          };

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-applications/status/${testApplicationId}/confirm`,
            requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function createPenawaranUji(formData){
        let error

        var requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            },
            body: formData,
            redirect: 'follow'
          };

          try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/costs`, requestOptions)
          //   console.log("req", req)
            const res = await req.json()
            console.log("res", res)
            return res

        }catch(e){
            console.log("error",e)
          return e
        }

    }

    async function inputFormPraUji(formData, id){
        var requestOptions = {
            method: 'PUT',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-applications/pretest/${id}`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function uploadDokumenPraUji(formData, id){
        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/${id}/payment/upload`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function createTestAssignment(formData, id){
        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/assignments`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function uploadDokumenPenugasan(formData, id){
        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/${id}/assignment/upload`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }
    
    async function laporAlatKeluar(formData, assignmentId){
        var requestOptions = {
            method: 'PUT',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/assignments/${assignmentId}`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function updateTestApp(formData, id){
        var requestOptions = {
            method: 'PUT',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-applications/${id}`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }


    return{
        confirmTestApp,
        createPenawaranUji,
        inputFormPraUji,
        uploadDokumenPraUji,
        createTestAssignment,
        uploadDokumenPenugasan,
        laporAlatKeluar,
        updateTestApp
    }
}