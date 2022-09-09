import useSWR from "swr"

async function getPermohonanUji(
    url){
    const token = localStorage.getItem(`${process.env.NEXT_PUBLIC_LOCAL_TOKEN_KEY}`)

    let requestOptions = {
        method:'GET'  ,
        headers: {
            'Authorization': `Bearer ${token}`
        },
        redirect: 'follow'
    };
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
    const res = await req.json()
    return res
}

export default function usePermohonanUji(
    start_date="",
    end_date="",
    page,
    status_filter="",
    dashboard="",
    arsipDoc= {
        doc_number: "",
        institution_id: "",
        test_type: ""
    }
){
    if(!status_filter){
        status_filter=""
    }
    if(!dashboard){
        dashboard=""
    }
    if(!arsipDoc.institution_id){
        arsipDoc.institution_id=""
    }
    const {data, mutate, error} = useSWR(
        `/test-applications?${page&&`page=${page}`}${start_date&&`&start_date=${start_date}`}${end_date&&`&end_date=${end_date}`}${status_filter&&`&status=${status_filter}`}${dashboard&&`&dashboard=${dashboard}`}${arsipDoc.institution_id&&`&institution_id=${arsipDoc.institution_id}`}${arsipDoc.test_type&&`&test_type=${arsipDoc.test_type}`}${arsipDoc.doc_number&&`&doc_number=${arsipDoc.doc_number}`}`, 
        getPermohonanUji)

    const loading = !data && !error;
    return {
        loading,
        error,
        data,
        mutate,
    }
}