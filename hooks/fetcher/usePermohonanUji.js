import useSWR from "swr"


async function getPermohonanUji(
    url){
    let error

    const token = localStorage.getItem(`${process.env.NEXT_PUBLIC_LOCAL_TOKEN_KEY}`)

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

    return res
        

    // if(res.header.response_code == 200){
        
    //     const data = res.data
    //     const header = res.header
    //     return {
    //         header,
    //         data
    //     }
    // }

    // if(res.header.response_code == 401){
    //     error = new Error(res.error)
    //     error.status = res.header.response_code
    //     error.info = res
    //     throw error
    // }
}

export default function usePermohonanUji(
    start_date,
    end_date,
    page,
    status_filter,
    dashboard

){
    if(!status_filter){
        status_filter=""
    }
    if(!dashboard){
        dashboard=""
    }
    
    // const {data, mutate, error} = useSWR("/test-applications", getPermohonanUji)
    const {data, mutate, error} = useSWR(
        `/test-applications?start_date=${start_date}&end_date=${end_date}&page=${page}&status=${status_filter}&dashboard=${dashboard}`, 
        getPermohonanUji)

    const loading = !data && !error;
    return {
        loading,
        error,
        data,
        mutate,

    }
}