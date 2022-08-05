import useSWR from "swr";
import { useManajemenUserFetcherContext } from "./useManajemenUserFetcher";

export default function useGetUsers(
    page,
    role_id
){
    
    const managementUserFetcher = useManajemenUserFetcherContext()

    const {data,error,mutate} = useSWR(
        `/users?role_id=${role_id}&page=${page}`,
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