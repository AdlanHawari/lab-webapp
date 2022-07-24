import BaseLayout from 'components/base/BaseLayout';
import LogSection from 'components/base/logsection/LogSection';
import { clientLogs } from 'constants/test_objects/clientLog';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import { LogProvider } from 'hooks/fetcher/log/useLogFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from 'react';

export default function ManajemenLogPage() {
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
          <LogSection/>
        </DateFilterUjiContextProvider>
      </PageContextProvider>
    </LogProvider>

  )
}

ManajemenLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

