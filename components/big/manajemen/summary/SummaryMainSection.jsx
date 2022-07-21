import DisclosurePekerja from 'components/small/single_menu/disclosure/DisclosurePekerja';
import Title1 from 'components/small/typography/Title1';
import Title2Med from 'components/small/typography/Title2Med';
import { summary } from 'constants/ManajemenSummary'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useInstitutionFilterContext } from 'hooks/context/filter-institution/InstitutionFilter';
import { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import useSummary from 'hooks/fetcher/management-summary/useSummary';
import { useTitleContext } from 'hooks/TitleContext';
import { useRouter } from 'next/router';
import React from 'react'

export default function SummaryMainSection() {
    const [title,setTitle,subTitle,setSubtitle] = useTitleContext();
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
            <div className="block w-96 p-9 bg-white border border-grey-300 rounded-2xl shadow divide-y divide-grey-300">
              
              <div className="flex justify-between pb-4">
                <h3>Status Pekerja</h3>
                <button onClick={()=>{
                  setSubtitle(subMenu.PENGUJI)
                  router.push("/manajemen/manajemen-uji"
                )}}>
                  <Title1 className="text-primary">Lihat Semua</Title1>
                </button>
              </div>
              <div className="block py-4 space-y-1">
                <Title2Med>Active</Title2Med>
                <DisclosurePekerja bgButton="bg-primary"/>
                <DisclosurePekerja bgButton="bg-primary"/>

              </div>
              <div className="block py-4 space-y-1">
                <Title2Med>Standby</Title2Med>
                <DisclosurePekerja bgButton="bg-secondary"/>
                <DisclosurePekerja bgButton="bg-secondary"/>
                
              </div>
                
            </div>
        </div>
  )
}
