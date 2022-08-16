import DateFilter from 'components/base/filter/DateFilter'
import StatusFilter from 'components/base/filter/StatusFilter'
import { manajemenPengujiStatus } from 'constants/filter-status/ManajemenUjiStatus'
import React from 'react'

export default function ManajemenPengujiFilterSection() {
  return (
    <div className="block space-y-6">

        <div className="flex justify-between">
          <div className="">
              <DateFilter/>
          </div>
          
        </div>
        <StatusFilter
        filter={manajemenPengujiStatus}
        titleSpace="space-x-8" space="space-x-4"
        />
    </div>
  )
}
