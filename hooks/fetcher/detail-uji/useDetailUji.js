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
        let requestOptions = {
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
            return e
        }
    }

    async function createPenawaranUji(formData){

        let requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
          };

          try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/costs`, requestOptions)
            const res = await req.json()
            return res

        }catch(e){
          return e
        }

    }
    
    async function editPenawaranUji(formData, id){
        let requestOptions = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
          };

          try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/costs/${id}`, requestOptions)
            const res = await req.json()
            return res

        }catch(e){
          return e
        }
    }

    async function inputFormPraUji(formData, id){
        let requestOptions = {
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
            return e
        }
    }

    async function uploadDokumenPraUji(formData, id){
        let requestOptions = {
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
            return e
        }
    }

    async function createTestAssignment(formData, id){
        let requestOptions = {
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
            return e
        }
    }

    async function uploadDokumenPenugasan(formData, id){
        let requestOptions = {
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
            return e
        }
    }
    
    async function updateAssignment(formData, assignmentId){
        let requestOptions = {
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
            return e
        }
    }

    async function updateTestApp(formData, id){
        let requestOptions = {
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
            return e
        }
    }
    
    async function downloadDoc(id, docType){
        let requestOptions = {
            method: 'GET',
            encoding: 'binary',
            responseType: 'blob',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/download?test_application_id=${id}&doc_type=${docType}`, requestOptions)
            const fileBlob = await req.blob()
            return fileBlob
        }
        catch(e){
            return e
        }
    }

    async function createBAPReport(formData, id){
        let requestOptions = {
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
            return e
        }
    }

    async function uploadLaporanHasilUji(formData, id){
        let requestOptions = {
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
            return e
        }
    }

    async function tolakLaporanUji(formData,id){
        let requestOptions = {
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
            return e
        }
    }

    async function editSertifLUK(formData, id){
        let requestOptions = {
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
            redirect: 'follow'
        }
        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/download/all?test_application_id=${id}${docGroup&&`&group=${docGroup}`}`, requestOptions)
            const fileBlob = await req.blob()
            return fileBlob
        }
        catch(e){
            return e
        }
    }

    async function cancelUji(formData, id){
        let requestOptions = {
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
            return e
        }
    }

    async function downloadSummary(start_date="", end_date="", institution_id="", test_type=""){
        let requestOptions = {
            method: 'GET',
            encoding: 'binary',
            responseType: 'blob',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
        }
        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/download/summary-dashboard?start_date=${start_date}&end_date=${end_date}${institution_id&&`&institution_id=${institution_id}`}${test_type&&`&test_type=${test_type}`}`, requestOptions)
            const fileBlob = await req.blob()
            return fileBlob
        }
        catch(e){
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