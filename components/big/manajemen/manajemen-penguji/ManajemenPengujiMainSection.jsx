import ManajemenPengujiTable from 'components/base/table/ManajemenPengujiTable'
import Pagination from 'components/small/pagination/Pagination'
import { pengujiData } from 'constants/test_objects/penguji'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useStatusFilterContext } from 'hooks/context/filter-status/StatusContext';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import useManajemenPengujiSWR from 'hooks/fetcher/personnel/useManajemenPengujiSWR';
import React from 'react'

export default function ManajemenPengujiMainSection() {
  const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
  // const {statusFilter} = useStatusFilterContext();
  const {currentPage, setLastPage} = usePageContext();
  const {loading, data, mutate, error} = useManajemenPengujiSWR(
    startDateFilter,
    endDateFilter,
    currentPage,
    statusFilter,

  )

  return (
    <div className="pt-5 space-y-5">
      <ManajemenPengujiTable data={pengujiData}/>

      <Pagination/>
    </div>
  )
}