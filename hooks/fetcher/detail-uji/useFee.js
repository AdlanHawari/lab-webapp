import useSWR from "swr";
import GetToken from "utils/GetToken"

async function getFee(url){
    let error

    const token = GetToken()

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

    if(res.header.response_code == 200){
        // console.log("200")
        const data = res.data
        const header = res.header
        return {
            header,
            data
        }
    }

    if(res.header.response_code == 401){
        error = new Error(res.error)
        error.status = res.header.response_code
        error.info = res
        // console.log("the error", error)
        // console.log("wedew")
        throw error
        // return error
    }


}

export default function useFee(
    test_id
){

    const {data, mutate, error} = useSWR(
        `/costs/test-id/${test_id}`,
        getFee)

    const loading = !data && !error;

    return{
        loading,
        error,
        data,
        mutate
    }

}