import useSWR from "swr"
import { useAlatUkurFetcher } from "./useAlatUkurFetcher"

export default function useGetTools(
    test_type="Uji Kesesuaian", 
    tool_type,
    page
) {
    const {getTools} = useAlatUkurFetcher()
    const {data, error, mutate} = useSWR(
        `/tools?test_type=${test_type}&page=${page}${tool_type&&`&tool_type=${tool_type}`}`,
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
