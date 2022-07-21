import useSWR from "swr";
import { useSummaryFetcher } from "./useSummaryFetcher";

export default function useInstitutionsList(){
    const summary = useSummaryFetcher()
    const {data,error,mutate} = useSWR(
        "/institutions",
        summary.getInstitutions
    )
    const loading = !data && !error;
    console.log("datanya use Ins List:", data)

    return{
        loading,
        error,
        institutionLists: data,
        mutate
    }
}