import React, { useEffect } from 'react'
import useSWR from 'swr';
import GetToken from 'utils/GetToken';

export default function TestesLoginPage() {
    const token = GetToken()

    // const formValues 
    var requestOptions = {
        method:'GET'  ,
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'Content-Type': 'application/json'
        },
        redirect: 'follow'
        };

    const fetcher = async url => {
        const res = await fetch(url, requestOptions)
        if (!res.ok) {
            const error = new Error('An error occurred while fetching the data.')
            // Attach extra info to the error object.
            error.info = await res.json()
            error.status = res.status
            throw error
          }
        
          return res.json()
    }
    const api = "http://api.play1.musagreen.com/v1/users/profile"
    const { data, error } = useSWR(api, fetcher)

    useEffect(() => {
      if(data){
        console.log("data",data)
      }
      if(error){
        console.log("err",error)
      }
    
    }, [data, error])
    
  return (
    <div>index</div>
  )
}
