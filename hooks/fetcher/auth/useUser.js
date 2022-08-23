import useSWR from "swr";
import { useAuth } from "./useAuth";

export default function useUser(){

    const auth = useAuth()
    // console.log("if mutated should print this")
    
    const {data, mutate, error, isValidating} = useSWR("/users/profile",auth.isLoggedIn);
    
    const loading = !data && !error;
    // const unAuthorized = error && error.status===401
    // if(error){
    //     if(error.message){
    //         console.log("error swr",error.message)
    //     }
    //     if(error.status){
    //         console.log("error swr status",error.status)
    //     }

            
    // }

    return {
        loading,
        error,
        // unAuthorized,
        user: data,
        mutate,
        isValidating
    }
}