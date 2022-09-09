import BaseLayout from 'components/base/BaseLayout';
import SummaryFilterSection from 'components/big/manajemen/summary/SummaryFilterSection';
import SummaryMainSection from 'components/big/manajemen/summary/SummaryMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import InstitutionFilterContextProvider from 'hooks/context/filter-institution/InstitutionFilter';
import JenisPekerjaanFilterContextProvider from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import useUser from 'hooks/fetcher/auth/useUser';
import { DetailUjiFetcherProvider } from 'hooks/fetcher/detail-uji/useDetailUji';
import { SummaryProvider } from 'hooks/fetcher/management-summary/useSummaryFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ManajemenSummaryPage() {
  const [title,setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)
  useEffect(() => {
    setTitle('Summary')
  })

  useEffect(() => {
    if(!isValidating){
      if(user){
        if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_KAL && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_UJI &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          setRender(true)
        }
      }
      if(error&& !user){
        router.replace("/")
      }
    }
  }, [user,error, isValidating])

  return(
    <>
      {loading ?
        <div className="">
          <h3>Loading...</h3>
        </div>
        :
        render &&
            <JenisPekerjaanFilterContextProvider>
              <SummaryProvider>
                <DateFilterUjiContextProvider>
                <InstitutionFilterContextProvider>
                  <div className="space-y-6">
                    <DetailUjiFetcherProvider>
                      <SummaryFilterSection/>
                    </DetailUjiFetcherProvider>
                    <SummaryMainSection/>
                  </div>
                </InstitutionFilterContextProvider>
                </DateFilterUjiContextProvider>
              </SummaryProvider>    
            </JenisPekerjaanFilterContextProvider>
    }
    </>
  )
}

ManajemenSummaryPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
}