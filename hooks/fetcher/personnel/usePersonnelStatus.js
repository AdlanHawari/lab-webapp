import useSWR from "swr";
import { usePersonnelFetcher } from "./usePersonnelFetcher";

export default function usePersonnelStatus(){
    const personnel = usePersonnelFetcher()
    const {data, mutate, error} = useSWR(
        "/users?role_id=3",
        personnel.getPersonnelActivity
    )
    const loading = !data && !error
    return {
        loading,
        error,
        personnel: data,
        mutate
    }
}