import { createContext, useContext } from "react";
import GetToken from "utils/GetToken";

const permohonanUjiFetcherContext = createContext()

export function PermohonanUjiFetcherProvider({children}){
    const permohonanUji = useProvidePermohonanUjiFetcher()
    return <permohonanUjiFetcherContext.Provider value={permohonanUji}>{children}</permohonanUjiFetcherContext.Provider>
}

export const usePermohonanUjiManajemenFetcher = () => {
    return useContext(permohonanUjiFetcherContext)
}

function useProvidePermohonanUjiFetcher(){
    const token = GetToken()

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
    
    return {
        createPenawaranUji
    }
}