import {useContext, createContext} from 'react';
import GetToken from 'utils/GetToken';

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
        let requestOptions = {
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

    async function forgetPass(formData){
        let requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
          };
          try{
              const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/password/forget`, requestOptions)
              const res = await req.json()
              return res
          }catch(e){
            return e
          }
    }

    async function changePass(formData, uuid){
        let requestOptions = {
            method: 'PUT',
            body: formData,
            redirect: 'follow'
          };
          try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/password/${uuid}`, requestOptions)
            const res = await req.json()
            return res
        }catch(e){
          return e
        }
    }

    async function isLoggedIn(url){
       const token = GetToken()
        let requestOptions = {
            method:'GET'  ,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
          };
          const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
        return req.json()
    }
    return {
        login,
        forgetPass,
        changePass,
        isLoggedIn
    }
}