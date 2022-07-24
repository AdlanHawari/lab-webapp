import PermohonanUjiTable from 'components/base/table/PermohonanUjiTable'
import Pagination from 'components/small/pagination/Pagination';
import { permohonanUjiData } from 'constants/test_objects/permohonanUji'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useStatusFilterContext } from 'hooks/context/filter-status/StatusContext';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import usePermohonanUji from 'hooks/fetcher/usePermohonanUji';
import React, { useEffect } from 'react'

export default function PermohonanUjiMainSection() {
  
    const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
    const {statusFilter} = useStatusFilterContext();
    const {currentPage, setLastPage} = usePageContext();
    const { loading,
        error,
        data,
        mutate} = usePermohonanUji(
          startDateFilter,
          endDateFilter,
          currentPage,
          statusFilter
    
        )

        useEffect(() => {
            if(data){
              setLastPage(data.header.total_page)
              console.log("datanya",data.data)
            }
        },[data])
  
    return (
      <div className="pt-5 space-y-5">
        {loading &&
            <h2>Loading</h2>
        }
        {data &&
            data.data.length>0 &&
            <PermohonanUjiTable data={data.data}/>
        }

        <Pagination/>
    </div>
  )
}
