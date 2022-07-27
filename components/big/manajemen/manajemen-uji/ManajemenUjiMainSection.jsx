import ManajemenujiTable from 'components/base/table/ManajemenujiTable'
import Pagination from 'components/small/pagination/Pagination'
import { manajemenUjiData } from 'constants/test_objects/manajemenUji'
import React from 'react'

export default function ManajemenUjiMainSection() {
  return (
    <div className="pt-5 space-y-5">
      <ManajemenujiTable data={manajemenUjiData}/>

      <Pagination/>
    </div>
  )
}
