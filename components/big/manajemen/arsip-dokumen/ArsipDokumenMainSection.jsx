import ArsipTable from 'components/base/table/ArsipTable'
import Pagination from 'components/small/pagination/Pagination';
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useDocNumberFilterContext } from 'hooks/context/filter-docNumber/DocumentNumberFilter';
import { useInstitutionFilterContext } from 'hooks/context/filter-institution/InstitutionFilter';
import { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import { DetailUjiFetcherProvider } from 'hooks/fetcher/detail-uji/useDetailUji';
import usePermohonanUji from 'hooks/fetcher/usePermohonanUji';
import React, { useEffect } from 'react'
// import arsipData from 'constants/test_objects/arsipDokumen'

export default function ArsipDokumenMainSection() {
  const {jenisPekerjaanState, setjenisPekerjaanState}= useJenisPekerjaanFilterContext()
  const {docNumState, setDocNumState} = useDocNumberFilterContext()
  const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
  const {institutionState} = useInstitutionFilterContext()
  const {currentPage, setLastPage} = usePageContext();
  const { loading,
    error,
    data,
    mutate} = usePermohonanUji(
      startDateFilter,
      endDateFilter,
      currentPage,
      "",
      "",
      {
        doc_number: docNumState,
        test_type: jenisPekerjaanState
      }
    )

    // useEffect(() => {
    //   console.log("docnum", docNumState)
    
    // }, [docNumState])
    

    useEffect(() => {
      if(data){
        setLastPage(data.header.total_page)
        console.log(data.header.total_page)
      }
      
      // if(error){
      //   console.log("error",error)
      //   console.log("data pas error",data)
      //   mutate(null)
      //   router.replace("/")
      //   // mutate()
      // }
      console.log("perm uji", data)
  
    },[data, error])
  return (
    <div className="pt-5 space-y-5">
      {loading &&
        <h2>Loading</h2>
      }
      {data &&
      data.data.length>0 ?
      <DetailUjiFetcherProvider>
        <ArsipTable data={data.data}/>
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
