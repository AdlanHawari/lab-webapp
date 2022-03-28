import {useContext, createContext} from 'react';

const authContext = createContext();

export function AuthProvider({children}){
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}


function useProvideAuth(){

    async function login(formData){
        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
          };
          try{
              const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, requestOptions)
              const res = await req.json()
              return res

          }catch(e){
            return e
          }
    }

    return {
        login
    }
}