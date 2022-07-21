import useSWR from "swr";
import { usePersonnelFetcher } from "./usePersonnelFetcher";

export default function usePersonnelStatus(status){
    const personnel = usePersonnelFetcher()
    const {data, mutate, error} = useSWR(
        `/users?role_id=3&personnel_status=${status}`,
        personnel.getPersonnelActivity
    )

    const loading = !data && !error

    return {
        loading,
        error,
        data,
        mutate
    }
}