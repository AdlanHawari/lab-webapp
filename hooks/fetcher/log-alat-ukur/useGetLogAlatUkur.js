import useSWR from "swr"
import { useLogAlatUkurFetcher } from "./useLogAlatUkurFetcher";

export default function useGetLogAlatUkur(
    start_date,
    end_date,
    page
) {
    const {getLogAlatUkur} = useLogAlatUkurFetcher()
    const {data,error, mutate} = useSWR(
        `/logs-tool?start_date=${start_date}&end_date=${end_date}&page=${page}`,
        getLogAlatUkur
    )
    const loading = !data && !error;
  return {
    loading,
    error,
    data,
    mutate
}
}
