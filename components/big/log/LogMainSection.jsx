import LogTable from 'components/base/table/LogTable';
import Pagination from 'components/small/pagination/Pagination';
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import useLog from 'hooks/fetcher/log/useLog';
import React, { useEffect } from 'react'

export default function LogMainSection() {
    const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
  const {currentPage, setLastPage} = usePageContext();
  const {loading, error, data, mutate} = useLog(
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
        <LogTable data={data.data} mutate={mutate}/>
        // <div className="">huhu</div>
      }
        <Pagination/>
    </div>
  )
}
