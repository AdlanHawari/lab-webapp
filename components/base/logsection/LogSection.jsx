import Pagination from 'components/small/pagination/Pagination';
import { paginator } from 'constants/test_objects/paginator';
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import useLog from 'hooks/fetcher/log/useLog';
import React, { useEffect } from 'react';
import DateFilter from '../filter/DateFilter';
import LogTable from '../table/LogTable';

export default function LogSection() {
  
  const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
  const {currentPage, setLastPage} = usePageContext();
  const {loading, error, data, mutate} = useLog(
    startDateFilter,
    endDateFilter,
    currentPage
  )

  // console.log("data",data.data)
  useEffect(() => {
    if(data){
      setLastPage(data.header.total_page)
      // console.log(data.header.total_page)
    }
  },[data, error])
  return (
    <div className="space-y-6">
      <div className="w-48">

        <DateFilter/>
      </div>

      {loading &&
        <h1>Loading</h1>
      }

      {data&&
        <LogTable data={data.data}/>
      }
      <Pagination/>
    </div>
  )
}
