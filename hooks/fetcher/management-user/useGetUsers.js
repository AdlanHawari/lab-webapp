import useSWR from "swr";
import { useManajemenUserFetcherContext } from "./useManajemenUserFetcher";

export default function useGetUsers(
    page
){
    
    const managementUserFetcher = useManajemenUserFetcherContext()

    const {data,error,mutate} = useSWR(
        `/users?page=${page}`,
        managementUserFetcher.getUsers
    )
    console.log("datanya", data)

    const loading = !data && !error;

    return{
        loading,
        error,
        users: data,
        mutate
    }
}