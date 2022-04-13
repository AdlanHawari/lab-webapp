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
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: formData,
            redirect: 'follow'
          };
          try{
              const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, requestOptions)
            //   console.log("req", req)
              const res = await req.json()
              console.log("res", res)
              return res

          }catch(e){
              console.log("error",e)
            return e
          }
    }

    async function isLoggedIn(url){
        let error

        const token = localStorage.getItem(`${process.env.NEXT_PUBLIC_LOCAL_TOKEN_KEY}`)
        // const token = localStorage.getItem("jwt_user")
        var requestOptions = {
            method: 'GET',
            // mode: '*cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            redirect: 'follow'
          };

        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
        const res = await req.json()
        if(res.http_code == 200 || res.http_code == 401){
            const data = res.data
            const message = res.message
            return {
                data,
                message
            }
        }

        if(response.http_code == 401){
            error = new Error(res.message)
            error.status = res.status_code
            error.info = res
            throw error

        }

    }

    return {
        login,
        isLoggedIn
    }
}