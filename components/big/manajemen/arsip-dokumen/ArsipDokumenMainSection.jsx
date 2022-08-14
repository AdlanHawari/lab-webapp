import ArsipTable from 'components/base/table/ArsipTable'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext';
import { useInstitutionFilterContext } from 'hooks/context/filter-institution/InstitutionFilter';
import { useJenisPekerjaanFilterContext } from 'hooks/context/filter-jenisPekerjaan/JenisPekerjaanFilter';
import { usePageContext } from 'hooks/context/pagination/PageContext';
import React from 'react'
// import arsipData from 'constants/test_objects/arsipDokumen'

export default function ArsipDokumenMainSection() {
  const {jenisPekerjaanState, setjenisPekerjaanState}= useJenisPekerjaanFilterContext()
  const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
  const {institutionState} = useInstitutionFilterContext()
  const {currentPage, setLastPage} = usePageContext();
  return (
    <div>
      {/* <ArsipTable data={}/> */}
    </div>
  )
}
