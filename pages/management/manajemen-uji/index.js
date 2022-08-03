import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import StatusFilter from 'components/base/filter/StatusFilter';
import ManajemenPengujiTable from 'components/base/table/ManajemenPengujiTable';
import ManajemenujiTable from 'components/base/table/ManajemenujiTable';
import ManajemenPengujiFilterSection from 'components/big/manajemen/manajemen-penguji/ManajemenPengujiFilterSection';
import ManajemenPengujiMainSection from 'components/big/manajemen/manajemen-penguji/ManajemenPengujiMainSection';
import ManajemenUjiFilterSection from 'components/big/manajemen/manajemen-uji/ManajemenUjiFilterSection';
import ManajemenUjiMainSection from 'components/big/manajemen/manajemen-uji/ManajemenUjiMainSection';
import { manajemenUjiStatus } from 'constants/filter-status/ManajemenUjiStatus';
import { subMenu } from 'constants/SubmenuManajemenUji';
import { manajemenUjiData } from 'constants/test_objects/manajemenUji';
import { pengujiData } from 'constants/test_objects/penguji';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import StatusFilterContextProvider from 'hooks/context/filter-status/StatusContext';
import ManajemenUjiContextProvider from 'hooks/context/manajemen-uji/ManajemenUjiContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import { useTitleContext } from "hooks/TitleContext";
import { useEffect, useState } from 'react';

export default function ManajemenManajemenUjiPage() {
  // const [title, setTitle] = useTitleContext();
  // const [subTitle, setSubtitle] = useState(subMenu.PENGUJI)
  const [title,setTitle, subTitle,setSubtitle] = useTitleContext();
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
  setTitle('Manajemen Uji')
  })
  return(
    
    
        <div className="flex flex-col divide-y divide-grey-200 space-y-5">

          {subTitle == subMenu.UJI ?
            <StatusFilterContextProvider>
              <PageContextProvider>
                <DateFilterUjiContextProvider>
                  <ManajemenUjiFilterSection/>
                  <ManajemenUjiContextProvider>
                    <ManajemenUjiMainSection/>
                  </ManajemenUjiContextProvider>
                </DateFilterUjiContextProvider>
              </PageContextProvider>
            </StatusFilterContextProvider>
            
            :
            subTitle == subMenu.PENGUJI &&
            // <StatusFilterContextProvider>
              <PageContextProvider>
                <DateFilterUjiContextProvider>
                  <ManajemenPengujiFilterSection/>
                  <ManajemenPengujiMainSection/>
                </DateFilterUjiContextProvider>
              </PageContextProvider>
            // </StatusFilterContextProvider>
            

          }

        </div>
    // <div className="block space-y-7">

    //   <div className="block space-y-6">
    //       <DateFilter/>
    //       <StatusFilter filter={manajemenUjiStatus} titleSpace="space-x-8" space="space-x-4"/>
    //   </div>
    //   {subTitle == subMenu.UJI ?
    //   <ManajemenujiTable data={manajemenUjiData}/>
    //   :
    //   <ManajemenPengujiTable data={pengujiData}/>
    //   }
    // </div>
  )
}

ManajemenManajemenUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

