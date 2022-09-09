import useSWR from "swr";
import GetToken from "utils/GetToken";
import { useSummaryFetcher } from "./useSummaryFetcher";

export default function useSummary(
    start_date,
    end_date,
    institution_id,
    test_type
){
    if(institution_id==-1){
        institution_id = ""
    }
    if(!institution_id){
        institution_id = ""
    }
    const summary = useSummaryFetcher()
    const {data,mutate, error} = useSWR(
        `/test-applications/status/counter?start_date=${start_date}&end_date=${end_date}&institution_id=${institution_id}&test_type=${test_type}`,
        summary.getSummary
    )
    const loading = !data && !error;
    return{
        loading,
        error,
        data,
        mutate
    }
}