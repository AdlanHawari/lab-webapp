import LogAlatUkurTable from 'components/base/table/LogAlatUkurTable';
import Pagination from 'components/small/pagination/Pagination';
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import useGetLogAlatUkur from 'hooks/fetcher/log-alat-ukur/useGetLogAlatUkur';
import React, { useEffect } from 'react'

export default function LogAlatUkurMainSection() {
    const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
    const {currentPage, setLastPage} = usePageContext();
    const {loading, error, data, mutate} = useGetLogAlatUkur(
      startDateFilter,
      endDateFilter,
      currentPage
    )
    useEffect(() => {
        if(data){
          setLastPage(data.header.total_page)
          console.log("data",data.data)
        }
      },[data, error])
    return (
        <div>
            {loading &&
            <h1>Loading</h1>
        }
        {data&&
        data.data.length>0 ?
            <LogAlatUkurTable data={data.data} mutate={mutate}/>
            // <div className="">huhu</div>
            :
            !loading&&
            <div className="relative w-full h-96 ">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                <h1>Belum ada data</h1>
            </div>
            </div>
        }
            {data && 
        data.data.length>0 ?
          <Pagination/>
          :
          !loading&&
          <></>
        
      }
        </div>
  )
}
