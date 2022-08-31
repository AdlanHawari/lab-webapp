import BaseLayout from 'components/base/BaseLayout';
import DateFilter from 'components/base/filter/DateFilter';
import JenisPekerjaanFilter from 'components/base/filter/JenisPekerjaanFilter';
import SummaryFilterSection from 'components/big/manajemen/summary/SummaryFilterSection';
import SummaryMainSection from 'components/big/manajemen/summary/SummaryMainSection';
import Button from 'components/small/button_fixed/Button';
import CustomComboBox from 'components/small/single_menu/CustomComboBox';
import DisclosurePekerja from 'components/small/single_menu/disclosure/DisclosurePekerja';
import Title1 from 'components/small/typography/Title1';
import Title2Med from 'components/small/typography/Title2Med';
import { ACCESS_CODE } from 'constants/Access_Code';
import { jenisPekerjaan } from 'constants/JenisPekerjaan';
import { summary } from 'constants/ManajemenSummary';
import { revalidate_time } from 'constants/SSGRevalidateTime';
import { subMenu } from 'constants/SubmenuManajemenUji';
import DateFilterUjiContextProvider, { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import InstitutionFilterContextProvider from 'hooks/context/filter-institution/InstitutionFilter';
import JenisPekerjaanFilterContextProvider, { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import useUser from 'hooks/fetcher/auth/useUser';
import { DetailUjiFetcherProvider } from 'hooks/fetcher/detail-uji/useDetailUji';
import useSummary from 'hooks/fetcher/management-summary/useSummary';
import { SummaryProvider, useSummaryFetcher } from 'hooks/fetcher/management-summary/useSummaryFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ManajemenSummaryPage() {

  const [title,setTitle,subTitle,setSubtitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
    setTitle('Summary')
  })

  useEffect(() => {
    if(!isValidating){
      if(user){
        console.log("user", user)
        if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          setRender(true)
          // router.push("management/summary")
        }
      }
      if(error&& !user){
        console.log("error", error)
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

// export async function getStaticProps(){
//   const institutionsapi_route = '/institutions'
//   const summary = useSummaryFetcher()
//   const res = await summary.getInstitutions
//   const content = res

  
//   return {
//     props: {
//       institutions
//     },
//     revalidate: revalidate_time
//   }
// }

