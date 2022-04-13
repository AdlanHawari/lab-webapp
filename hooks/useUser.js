import useSWR from "swr";
import { useAuth } from "./useAuth";

export default function useUser(){

    const auth = useAuth()
    // const {data, mutate, error} = useSWR("/login",process.env.NEXT_PUBLIC_API);
    const {data, mutate, error} = useSWR("/get-profile",auth.isLoggedIn);
    
    const loading = !data && !error;

    return {
        loading,
        error,
        user: data,
        mutate
    }
}