import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React from 'react'
import { ZipFileDownloader } from 'utils/FileDownloader'
import GetToken from 'utils/GetToken'

export default function DownloadPage() {

    async function downloadZipBedil(){
        let token = GetToken()
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
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/download/all?test_application_id=${id}${docGroup&&`&group=${docGroup}`}`, requestOptions)
            const fileBlob = await req.blob()
            return fileBlob
        }
        catch(e){
            return e
        }
    }
    
  return (
    <div>
        <button className='bg-primary w-36'
        onClick={()=>{
            ZipFileDownloader()
        }}
        >
            Download
        </button>
    </div>
  )
}
