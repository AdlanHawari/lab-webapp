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


    return{
        confirmTestApp
    }
}