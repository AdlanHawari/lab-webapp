import useSWR from "swr"
import { useAlatUkurFetcher } from "./useAlatUkurFetcher"

export default function useGetToolTypes(
  test_type
) {
    const {getToolTypes} = useAlatUkurFetcher()
    const {data,error, mutate} = useSWR(
        `/tools/types?test_type=${test_type}`,
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
