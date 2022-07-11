import useSWR from "swr"


async function getPermohonanUji(url){
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
        // const req = await fetch(`http://localhost:3000`, requestOptions)
    const res = await req.json()
        
    console.log('usepermohonanuju', res)

    if(res.http_code == 200){
        const data = res.data
        const message = res.message
        return {
            data,
            message
        }
    }

    if(response.http_code == 422){
        error = new Error(res.message)
        error.status = res.status_code
        error.info = res
        // console.log("the error", error)
        // console.log("wedew")
        throw error
        // return error
    }
}

export default function usePermohonanUji(){
    
    const {data, mutate, error} = useSWR("/test-applications?assigned=false", getPermohonanUji)

    const loading = !data && !error;
    return {
        loading,
        error,
        data,
        mutate,

    }
}