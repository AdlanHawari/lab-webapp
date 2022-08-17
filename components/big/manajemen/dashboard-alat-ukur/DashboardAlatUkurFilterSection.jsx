import { PlusIcon } from '@heroicons/react/outline'
import StatusFilter from 'components/base/filter/StatusFilter'
import { dashboardAlatUkurStatus, manajemenUjiStatus } from 'constants/filter-status/ManajemenUjiStatus'
import { useFormCreateAlatUkurContext } from 'hooks/context/form-create-alat-ukur/FormCreateAlatUkurContext'
import React from 'react'

export default function DashboardAlatUkurFilterSection() {

  const {setCreateAlatUkurPopUp} = useFormCreateAlatUkurContext()
  return (
    <div className="block space-y-6">
        <div className="flex justify-between">
          <div className="">
              
          </div>
          <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
          onClick={()=>setCreateAlatUkurPopUp(true)}
          >
              <PlusIcon className="h-6 w-6 cursor-pointer" aria-hidden="true"/>
              <p>
              Tambah Alat Ukur
              </p>
          </button>
          
        </div>

        <div className="flex justify-between">
        <StatusFilter 
        filter={dashboardAlatUkurStatus}
        titleSpace="space-x-8" space="space-x-4"
        />
        </div>
    </div>
  )
}
