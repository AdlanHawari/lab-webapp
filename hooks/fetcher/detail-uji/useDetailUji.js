import axios from "axios";
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
    
    async function editPenawaranUji(formData, id){
        let error

        var requestOptions = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            },
            body: formData,
            redirect: 'follow'
          };

          try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/costs/${id}`, requestOptions)
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
    
    async function updateAssignment(formData, assignmentId){
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
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-applications/id/${id}`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }
    
    async function downloadDoc(id, docType){
        var requestOptions = {
            method: 'GET',
            encoding: 'binary',
            responseType: 'blob',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            // body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/download?test_application_id=${id}&doc_type=${docType}`, requestOptions)

            const fileBlob = await req.blob()
            return fileBlob
            // var file = new Blob([req], {type:'application/pdf'});
            // console.log("req", file)
            // return file

            // const res = await axios.get(
            //     `${process.env.NEXT_PUBLIC_API_URL}/documents/download?test_application_id=${id}&doc_type=${docType}`,
            //     {
            //         headers: {
            //             'Authorization': `Bearer ${token}`
            //         }
            // })
            // var file = new Blob([res], {type:'application/pdf'});
            // return file

        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function createBAPReport(formData, id){
        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/report/${id}`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }

    }

    async function uploadLaporanHasilUji(formData, id){
        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/${id}/report/upload`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function tolakLaporanUji(formData,id){
        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/report/${id}/reject`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function editSertifLUK(formData, id){
        var requestOptions = {
            method: 'PUT',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-applications/id/${id}`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }


    async function downloadZipFile(id, docGroup=""){
        var requestOptions = {
            method: 'GET',
            encoding: 'binary',
            responseType: 'blob',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            // body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/download/all?test_application_id=${id}${docGroup&&`&docGroup=${docGroup}`}`, requestOptions)

            const fileBlob = await req.blob()
            console.log("blob",fileBlob)
            // console.log("head",await req.json())
            return fileBlob

        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function cancelUji(formData, id){
        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-applications/status/${id}/cancel`, requestOptions)
            const res = await req.json()
            return res
            

        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    async function downloadSummary(start_date="", end_date="", institution_id="", test_type=""){
        var requestOptions = {
            method: 'GET',
            encoding: 'binary',
            responseType: 'blob',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            // body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/download/summary-dashboard?start_date=${start_date}&end_date=${end_date}${institution_id&&`&institution_id=${institution_id}`}${test_type&&`&test_type=${test_type}`}`, requestOptions)

            const fileBlob = await req.blob()
            return fileBlob

        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    return{
        confirmTestApp,
        createPenawaranUji,
        editPenawaranUji,
        inputFormPraUji,
        uploadDokumenPraUji,
        createTestAssignment,
        uploadDokumenPenugasan,
        updateAssignment,
        updateTestApp,
        downloadDoc,
        createBAPReport,
        uploadLaporanHasilUji,
        tolakLaporanUji,
        editSertifLUK,
        downloadZipFile,
        cancelUji,
        downloadSummary,
    }
}