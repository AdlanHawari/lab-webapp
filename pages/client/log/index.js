import BaseLayout from "components/base/BaseLayout"
import LogSection from "components/base/logsection/LogSection"
import LogFilterSection from "components/big/log/LogFilterSection";
import LogMainSection from "components/big/log/LogMainSection";
import { clientLogs } from "constants/test_objects/clientLog"
import DateFilterUjiContextProvider from "hooks/context/filter-date/DateFilterUjiContext";
import PageContextProvider from "hooks/context/pagination/PageContext";
import { LogProvider } from "hooks/fetcher/log/useLogFetcher";
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from "react";

export default function ClientLogPage() {

  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Log')
  })
  
  return(
    <LogProvider>
      <PageContextProvider>
        <DateFilterUjiContextProvider>
        <div className="flex flex-col  space-y-5">
          <LogFilterSection/>
          <LogMainSection/>

          {/* <LogSection/> */}
        </div>
        </DateFilterUjiContextProvider>
      </PageContextProvider>

    </LogProvider>
    // <div className="">
    //   this is log
    // </div>
  )
}

ClientLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
