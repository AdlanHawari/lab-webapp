import useSWR from "swr"
import { useAlatUkurFetcher } from "./useAlatUkurFetcher"

export default function useGetToolTypes() {
    const {getToolTypes} = useAlatUkurFetcher()
    const {data,error, mutate} = useSWR(
        "/tools/types",
        getToolTypes
    )
    const loading = !data && !error;
    // console.log("ini swr nya")
  return {
    loading,
    error,
    mutate,
    tool_type: data?.data
  }
}
