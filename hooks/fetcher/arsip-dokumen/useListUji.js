import useSWR from "swr";
import { useArsipListFetcher } from "./useListUjiFetcher";

export default function useListUjiArsip(
    start_date,
    end_date,
    page,
    institution_id,
    test_type
){

    if(institution_id==-1){
        institution_id = ""
    }
    if(!institution_id){
        institution_id = ""
    }

    const fetcher = useArsipListFetcher()
    const {data, error, mutate} = useSWR(
        // `/test-applications/counter?start_date=${start_date}&end_date=${end_date}&institution_id=${institution_id}&test_type=${test_type}`,,
        
    )

    const

    return {

    }
}