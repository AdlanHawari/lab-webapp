import DisclosurePekerja from 'components/small/single_menu/disclosure/DisclosurePekerja';
import Title1 from 'components/small/typography/Title1';
import Title2Med from 'components/small/typography/Title2Med';
import { summary } from 'constants/ManajemenSummary'
import { subMenu } from 'constants/SubmenuManajemenUji';
import { userType } from 'constants/UserType';
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useInstitutionFilterContext } from 'hooks/context/filter-institution/InstitutionFilter';
import { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import useSummary from 'hooks/fetcher/management-summary/useSummary';
import { PersonnelProvider } from 'hooks/fetcher/personnel/usePersonnelFetcher';
import { useTitleContext } from 'hooks/TitleContext';
import { useRouter } from 'next/router';
import React from 'react'
import SummaryPersonnelStatus from './SummaryPersonnelStatus';

export default function SummaryMainSection() {
    const {jenisPekerjaanState, setjenisPekerjaanState}= useJenisPekerjaanFilterContext()
    const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
    const {institutionState} = useInstitutionFilterContext()
    const router =useRouter()
    const {loading, data,error,mutate} = useSummary(
        startDateFilter,
        endDateFilter,
        institutionState,
        jenisPekerjaanState
      );
     
      console.log(data)
    return (
    <div className="flex justify-between space-x-7">
            <ul className="grid grid-flow-row grid-cols-2 w-full h-full gap-9">
              {summary.map((item,index) => (

                <li key={index} className='bg-white rounded-2xl border border-grey-300 h-40 shadow'>
                    <div className="block pl-9 pt-9 space-y-4">
                      {loading &&
                      <h1>
                        loading
                      </h1>
                      }
                      {data &&
                        <h1>{data.data[item.key]}</h1>
                      }
                      <h3>
                        {item.title}
                      </h3>
                    </div>
                  </li>
              ))

              }
              
              
            </ul>

            <PersonnelProvider>
              <SummaryPersonnelStatus/>
            </PersonnelProvider>

        </div>
  )
}
