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
import { jenisPekerjaan } from 'constants/JenisPekerjaan';
import { summary } from 'constants/ManajemenSummary';
import { revalidate_time } from 'constants/SSGRevalidateTime';
import { subMenu } from 'constants/SubmenuManajemenUji';
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import InstitutionFilterContextProvider from 'hooks/context/filter-institution/InstitutionFilter';
import JenisPekerjaanFilterContextProvider, { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import useSummary from 'hooks/fetcher/management-summary/useSummary';
import { SummaryProvider, useSummaryFetcher } from 'hooks/fetcher/management-summary/useSummaryFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ManajemenSummaryPage() {

  const [title,setTitle,subTitle,setSubtitle] = useTitleContext();
  
  useEffect(() => {
    setTitle('Summary')
  })

  return(
    <JenisPekerjaanFilterContextProvider>
      <SummaryProvider>
        <InstitutionFilterContextProvider>

          <div className="space-y-6">
            
            <SummaryFilterSection/>

            <SummaryMainSection/>
          </div>
        </InstitutionFilterContextProvider>
      </SummaryProvider>    
    </JenisPekerjaanFilterContextProvider>
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

