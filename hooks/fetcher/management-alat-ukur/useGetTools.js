import useSWR from "swr"
import { useAlatUkurFetcher } from "./useAlatUkurFetcher"

export default function useGetTools(
    tool_type,
    page
) {
    const {getTools} = useAlatUkurFetcher()
    const {data, error, mutate} = useSWR(
        `/tools?page=${page}${tool_type&&`&tool_type=${tool_type}`}`,
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
