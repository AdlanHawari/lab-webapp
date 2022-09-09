import DateFilter from 'components/base/filter/DateFilter'
import StatusFilter from 'components/base/filter/StatusFilter'
import { manajemenUjiStatus } from 'constants/filter-status/ManajemenUjiStatus'
import React from 'react'

export default function ManajemenUjiFilterSection() {
  return (
    <div className="block space-y-6">
        <div className="flex justify-between">
          <div className="">
              <DateFilter/>
          </div>
        </div>
        <StatusFilter 
        filter={manajemenUjiStatus}
        titleSpace="space-x-8" space="space-x-4"
        />
    </div>
  )
}