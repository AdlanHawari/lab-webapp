import { summary } from 'constants/ManajemenSummary'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useInstitutionFilterContext } from 'hooks/context/filter-institution/InstitutionFilter';
import { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import useSummary from 'hooks/fetcher/management-summary/useSummary';
import { PersonnelProvider } from 'hooks/fetcher/personnel/usePersonnelFetcher';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import SummaryPersonnelStatus from './SummaryPersonnelStatus';

export default function SummaryMainSection() {
    const {jenisPekerjaanState}= useJenisPekerjaanFilterContext()
    const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
    const {institutionState} = useInstitutionFilterContext()
    const router =useRouter()
    const {loading, data,error,mutate} = useSummary(
        startDateFilter,
        endDateFilter,
        institutionState,
        jenisPekerjaanState
      );
      useEffect(() => {
        if(error){
          mutate(null)
          router.replace("/")
        }
      },[data, error])
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
              ))}
            </ul>
            <PersonnelProvider>
              <SummaryPersonnelStatus/>
            </PersonnelProvider>
        </div>
  )
}