import ManajemenPengujiTable from 'components/base/table/ManajemenPengujiTable'
import Pagination from 'components/small/pagination/Pagination'
import { pengujiData } from 'constants/test_objects/penguji'
import React from 'react'

export default function ManajemenPengujiMainSection() {
  return (
    <div className="pt-5 space-y-5">
      <ManajemenPengujiTable data={pengujiData}/>

      <Pagination/>
    </div>
  )
}
