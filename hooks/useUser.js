import useSWR from "swr";

export default function useUser(){
    const {data, mutate, error} = useSWR("/login",process.env.NEXT_PUBLIC_API);
    
    const loading = !data && !error;

    return {
        loading,
        user: data,
        mutate
    };


}