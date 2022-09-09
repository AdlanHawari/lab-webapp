import useSWR from "swr";
import { useLogFetcher } from "./useLogFetcher";

export default function useLog(
    start_date,
    end_date,
    page
){
    const userLog = useLogFetcher()
    const {data,mutate,error} = useSWR(
        `/logs?start_date=${start_date}&end_date=${end_date}&page=${page}`,
        userLog.getUserLog
    )
    const loading = !data && !error;
    return{
        loading,
        error,
        data,
        mutate
    }

}