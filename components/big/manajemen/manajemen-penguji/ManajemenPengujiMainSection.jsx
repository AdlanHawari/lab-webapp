import ManajemenPengujiTable from 'components/base/table/ManajemenPengujiTable'
import Pagination from 'components/small/pagination/Pagination'
import { pengujiData } from 'constants/test_objects/penguji'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useStatusFilterContext } from 'hooks/context/filter-status/StatusContext';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import useManajemenPengujiSWR from 'hooks/fetcher/personnel/useManajemenPengujiSWR';
import React, { useEffect } from 'react'

export default function ManajemenPengujiMainSection() {
  const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
  const {statusFilter} = useStatusFilterContext();
  const {currentPage, setLastPage} = usePageContext();
  const {loading, data, mutate, error} = useManajemenPengujiSWR(
    startDateFilter,
    endDateFilter,
    currentPage,
    statusFilter,

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
      data.data.length>0 ?
      // <ManajemenPengujiTable data={pengujiData}/>
      <ManajemenPengujiTable data={data.data}/>
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
