import useSWR from "swr";
import { usePersonnelFetcher } from "./usePersonnelFetcher";

export default function usePersonnelAssignments(id){
    const personnel = usePersonnelFetcher()
    const {data,mutate,error} = useSWR(
        `/test-applications?tester_user_id=${id}`,
        personnel.getAssignments
    )
    const loading = !data && !error
    return {
        loading,
        error,
        personnelAssignments: data,
        mutate
    }
}