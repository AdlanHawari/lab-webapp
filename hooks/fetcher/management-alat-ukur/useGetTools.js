import useSWR from "swr"
import { useAlatUkurFetcher } from "./useAlatUkurFetcher"

export default function useGetTools(
    test_type="", 
    tool_type="",
    page,
    status=""
) {
    if(!status){
        status=""
    }
    const {getTools} = useAlatUkurFetcher()
    const {data, error, mutate} = useSWR(
        `/tools?test_type=${test_type}&page=${page}${tool_type&&`&tool_type=${tool_type}`}${status&&`&is_used=${status}`}`,
        getTools
    )
    const loading = !data && !error;
    return {
        loading,
        error,
        tools: data,
        mutate,
    }
}
