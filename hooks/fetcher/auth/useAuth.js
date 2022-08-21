import axios from 'axios';
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

    async function forgetPass(formData){
        var requestOptions = {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: formData,
            redirect: 'follow'
          };
          try{
              const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/password/forget`, requestOptions)
            //   console.log("req", req)
              const res = await req.json()
              console.log("res", res)
              return res

          }catch(e){
              console.log("error",e)
            return e
          }
    }


    async function changePass(formData, uuid){
        var requestOptions = {
            method: 'PUT',
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: formData,
            redirect: 'follow'
          };
        
          try{
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/password/${uuid}`, requestOptions)
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

        const token = GetToken()
          var requestOptions = {
            method:'GET'  ,
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            },
            redirect: 'follow'
          };
          try {
            const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
            const res = await req.json()
            return res

          } catch (e) {
              throw e
          }

        
            // const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, requestOptions)
            // const res = await req.json()
            // console.log('response', res)
            // // if(res.)
            // if(res.header.response_code == 200){
            //   return res

            // }

            // if(res.error){
            //   error = new Error(res.error)
            //   error.status = res.header.response_code
            //   error.info = res
            //   throw error
            // }
    

        // if(res.header.response_code == 200){
        //     const data = res.data
        //     const header = res.header
        //     return {
        //         data,
        //         header
        //     }
        // }

        // if(res.header.response_code == 401){
        //     error = new Error(res.message)
        //     error.status = res.status_code
        //     error.info = res
        //     throw error
        // }

        // if(res.header.response_code == 422){
        //     error = new Error(res.message)
        //     error.status = res.status_code
        //     error.info = res
        //     throw error
        // }

    }

    return {
        login,
        forgetPass,
        changePass,
        isLoggedIn
    }
}