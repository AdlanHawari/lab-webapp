import useSWR from "swr";
import { useAuth } from "./useAuth";

export default function useUser(){

    const auth = useAuth()
    console.log("if mutated should print this")
    
    const {data, mutate, error} = useSWR("/users/profile",auth.isLoggedIn);
    
    const loading = !data && !error;
    // const unAuthorized = error && error.status===401
    console.log("error swr",error)

    return {
        loading,
        error,
        // unAuthorized,
        user: data,
        mutate
    }
}