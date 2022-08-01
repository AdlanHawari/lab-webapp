import ManajemenujiTable from 'components/base/table/ManajemenujiTable'
import Pagination from 'components/small/pagination/Pagination'
import { manajemenUjiData } from 'constants/test_objects/manajemenUji'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useStatusFilterContext } from 'hooks/context/filter-status/StatusContext';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import { DetailUjiFetcherProvider } from 'hooks/fetcher/detail-uji/useDetailUji';
import usePermohonanUji from 'hooks/fetcher/usePermohonanUji';
import React, { useEffect } from 'react'

export default function ManajemenUjiMainSection() {
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
      statusFilter,
      "pengujian"

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
      <DetailUjiFetcherProvider>
        {/* <ManajemenujiTable data={manajemenUjiData}/> */}
        <ManajemenujiTable data={data.data} mutate={mutate}/>

      </DetailUjiFetcherProvider>
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
