import useSWR from "swr"
import { useAlatUkurFetcher } from "./useAlatUkurFetcher"

export default function useGetToolsBrand() {
    const {getTools} = useAlatUkurFetcher()
    const {data, error, mutate} = useSWR(
        `/tools?limit=1000`,
        getTools
    )
    const loading = !data && !error;

  return {
    loading_toolbrand: loading,
    error_toolbrand: error,
    tools: data,
    mutate,
  }
}
