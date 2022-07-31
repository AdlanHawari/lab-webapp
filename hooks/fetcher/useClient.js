const { createContext, useContext } = require("react");

const clientContext = createContext()

export function ClientProvider({children}){
    const client = useProvideClient()
    return <clientContext.Provider value={client}>{children}</clientContext.Provider>
}

export const useClient = () => {
    return useContext(clientContext)
}

function useProvideClient(){
    
    let token
    if (typeof window !== 'undefined') {
        token = localStorage.getItem(`${process.env.NEXT_PUBLIC_LOCAL_TOKEN_KEY}`)
    }
    
    async function createPermohonanUji(formData){

        var requestOptions = {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${token}`
            },
            body: formData,
            redirect: 'follow'
        }

        try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test-applications`, requestOptions)

            const res = await req.json()
            return res
        }
        catch(e){
            console.log("error",e)
            return e
        }
    }

    

    return {
        createPermohonanUji,
        
    }

}