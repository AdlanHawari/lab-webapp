import DateFilter from 'components/base/filter/DateFilter'
import StatusFilter from 'components/base/filter/StatusFilter'
import { clientUjiStatus } from 'constants/filter-status/ClientUjiStatus'
import { permohonanUjiStatus } from 'constants/filter-status/ManajemenUjiStatus'
import React from 'react'

export default function PermohonanUjiFilterSection() {
  return (
    <div className="block space-y-6">
         <div className="">
            <DateFilter/>
        </div>
        <StatusFilter 
        filter={permohonanUjiStatus}
        titleSpace="space-x-8" space="space-x-4"
        />
    </div>
  )
}
