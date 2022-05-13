import axios from 'axios';
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
        // var requestOptions = {
        //     method: 'GET',
        //     mode: 'cors',
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         // 'Content-Type': 'application/json'
        //     },
        //     // redirect: 'follow'
        //   };
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
        
        // const res = await axios.get('http://api.play1.musagreen.com/get-profile', {
        //     // headers:{
        //     //     'Authorization': `Bearer ${token}`
        //     // }
        // })
        console.log('response', res)


        if(res.http_code == 200 || res.http_code == 401){
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
            throw error
            // return error
            

        }

    }

    return {
        login,
        isLoggedIn
    }
}