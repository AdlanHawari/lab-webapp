import useSWR from "swr";
import { usePersonnelFetcher } from "./usePersonnelFetcher";

export default function useManajemenPengujiSWR(
    start_date,
    end_date,
    page,
    status_filter,
    personnel_status
){
    if(!status_filter){
        status_filter=""
    }
    if(!personnel_status){
        personnel_status=""
    }
    const {getPersonnelActivity} = usePersonnelFetcher()
    const {data, mutate, error} = useSWR(
        `/test-applications/tester?start_date=${start_date}&end_date=${end_date}&personnel_status=${personnel_status}&status=${status_filter}&page=${page}`,
        getPersonnelActivity
    )

    const loading = !data && !error
    return{
        loading,
        error,
        mutate,
        data
    }

}