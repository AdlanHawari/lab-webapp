import ManajemenujiTable from 'components/base/table/ManajemenujiTable'
import { manajemenUjiData } from 'constants/test_objects/manajemenUji'
import React from 'react'

export default function UjiPersonnelMainSection() {
  return (
    <div className="pt-5 space-y-5">
        <ManajemenujiTable data={manajemenUjiData}/>
    
    </div>
  )
}
