import { usePersonnelFetcher } from "./usePersonnelFetcher";

export default function usePersonnelAssignments(id){
    const personnel = usePersonnelFetcher()
    const {data,mutate,error} = useSWR(
        `/assignments/user/${id}`,
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