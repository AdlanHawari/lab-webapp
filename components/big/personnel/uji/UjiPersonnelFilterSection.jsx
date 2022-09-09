import DateFilter from 'components/base/filter/DateFilter'
import StatusFilter from 'components/base/filter/StatusFilter'
import { personelUjiStatus } from 'constants/filter-status/PersonelUjiStatus'
import React from 'react'

export default function UjiPersonnelFilterSection() {
  return (
    <div className="block space-y-6">
        <div className="flex justify-between">
          <div className="">
              <DateFilter/>
          </div>
        </div>
        <StatusFilter 
        filter={personelUjiStatus}
        />
    </div>
  )
}