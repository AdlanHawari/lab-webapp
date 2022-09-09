import useSWR from "swr";
import { useAuth } from "./useAuth";

export default function useUser(){
    const auth = useAuth()
    const {data, mutate, error, isValidating} = useSWR("/users/profile",auth.isLoggedIn);
    const loading = !data && !error;
    return {
        loading,
        error,
        user: data,
        mutate,
        isValidating
    }
}