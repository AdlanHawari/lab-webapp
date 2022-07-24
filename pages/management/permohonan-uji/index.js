import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import StatusFilter from 'components/base/filter/StatusFilter';
import PermohonanUjiTable from 'components/base/table/PermohonanUjiTable';
import PermohonanUjiFilterSection from 'components/big/manajemen/permohonan-uji/PermohonanUjiFilterSection';
import PermohonanUjiMainSection from 'components/big/manajemen/permohonan-uji/PermohonanUjiMainSection';
import { permohonanUjiStatus } from 'constants/filter-status/ManajemenUjiStatus';
import { permohonanUjiData } from 'constants/test_objects/permohonanUji';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import StatusFilterContextProvider from 'hooks/context/filter-status/StatusContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect } from 'react';

export default function ManajemenPermohonanUjiPage() {
  const [title, setTitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Permohonan Uji')
  })
  return(
    <StatusFilterContextProvider>
      <PageContextProvider>
        <DateFilterUjiContextProvider>
          <div className="flex flex-col divide-y divide-grey-200 space-y-5">
                      
            <PermohonanUjiFilterSection/>

            <PermohonanUjiMainSection/>
                  
          </div>
        </DateFilterUjiContextProvider>
      </PageContextProvider>
    </StatusFilterContextProvider>
  )
}

ManajemenPermohonanUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

