import { XCircleIcon } from '@heroicons/react/outline'
import DateFilter from 'components/base/filter/DateFilter'
import InstansiFilter from 'components/base/filter/InstansiFilter'
import JenisPekerjaanFilter from 'components/base/filter/JenisPekerjaanFilter'
import Button from 'components/small/button_fixed/Button'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext'
import { useInstitutionFilterContext } from 'hooks/context/filter-institution/InstitutionFilter'
import { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import useInstitutionsList from 'hooks/fetcher/management-summary/useInstitutionsList'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { SummaryDownloader } from 'utils/FileDownloader'

export default function SummaryFilterSection() {

  const {institutionLists, loading, error, mutate} = useInstitutionsList()
  const router = useRouter()
  const {jenisPekerjaanState, setjenisPekerjaanState}= useJenisPekerjaanFilterContext()
  const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
  const {institutionState, setInstitutionState} = useInstitutionFilterContext()
  const {downloadSummary} = useDetailUji()
  const [resetClicked, setResetClicked] = useState(false)

  // useEffect(() => {
  //   if(resetClicked){
  //     setResetClicked(false)
  //   }
  // }, [resetClicked])
  
  return (
    <div className="flex justify-between items-center">
        <div className='w-full flex items-center space-x-4'>
          <div className="">
            <DateFilter/>
          </div>
          <div className='w-64'>
            {loading&&
             <p>loading...</p>
            }
            {institutionLists &&
              <InstansiFilter itemLists={institutionLists.data}/>
            }
          </div>
          <div className='w-48'>
            <JenisPekerjaanFilter/>
          </div>
          {/* <div className="w-auto">
            <button className="flex items-center"
            onClick={()=>{
              // setInstitutionState(-1)
              // setjenisPekerjaanState("")
              setResetClicked(true)

            }}
            >
              <XCircleIcon className='w-8 text-grey-500' aria-hidden="true"/>
            </button>
          </div> */}
        </div>
        <div className="w-[7.5rem]">
          <Button buttonStyle="primary_default" className="w-full px-5 py-0.5"
          onClick={()=> SummaryDownloader(
            downloadSummary,
            `SIP-summary-dashboard.xlsx`, 
            startDateFilter, 
            endDateFilter, 
            institutionState, 
            jenisPekerjaanState
            )
          }
          >
              Download
          </Button>
        </div>
      </div>
  )
}