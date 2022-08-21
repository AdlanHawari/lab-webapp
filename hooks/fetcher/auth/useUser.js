import useSWR from "swr";
import { useAuth } from "./useAuth";

export default function useUser(){

    const auth = useAuth()
    
    const {data, mutate, error} = useSWR("/users/profile",auth.isLoggedIn);
    
    const loading = !data && !error;
    // console.log("error swr",error.status)

    return {
        loading,
        error,
        user: data,
        mutate
    }
}