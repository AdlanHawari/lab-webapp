import { PlusIcon } from '@heroicons/react/outline'
import JenisAlatFilter from 'components/base/filter/JenisAlatFilter'
import StatusFilter from 'components/base/filter/StatusFilter'
import { dashboardAlatUkurStatus } from 'constants/filter-status/ManajemenUjiStatus'
import { useJenisAlatFilterContext } from 'hooks/context/filter-jenis-alat/JenisAlatFilter'
import { useFormCreateAlatUkurContext } from 'hooks/context/form-create-alat-ukur/FormCreateAlatUkurContext'
import { usePageContext } from 'hooks/context/pagination/PageContext'
import useGetToolTypes from 'hooks/fetcher/management-alat-ukur/useGetToolTypes'
import React, { useEffect } from 'react'

export default function DashboardAlatUkurFilterSection() {
  const {setCreateAlatUkurPopUp} = useFormCreateAlatUkurContext()
  const {tool_type, loading, error } = useGetToolTypes(
    // "Uji Kesesuaian"
  )
  const {jenisAlatState, setJenisAlatState} = useJenisAlatFilterContext()
  const {currentPage, setCurrentPage} = usePageContext();

  useEffect(() => {
    setCurrentPage(1)
    }, [jenisAlatState]
  )

  return (
    <div className="block space-y-6">
        <div className="flex justify-between">
          <div className="w-96">
            {tool_type&&
              <JenisAlatFilter
                itemLists={tool_type}
              />
            }
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