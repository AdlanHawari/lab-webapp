import { SearchIcon } from '@heroicons/react/outline'
import { useDocNumberFilterContext } from 'hooks/context/filter-docNumber/DocumentNumberFilter'
import React from 'react'

export default function DocumentNoFilter() {

  const {docNumState, setDocNumState} = useDocNumberFilterContext()
  return (
    <div className="items-center flex">
      <div className='relative'>
          <input
          value={docNumState}
          onChange={e => setDocNumState(e.target.value)}
          className="border border-grey-300 shadow-sm inline-flex w-full px-3 py-2 text-sm font-medium text-grey-700 rounded-xl hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary"
          placeholder='Cari No. Surat'
          />
          <div className=" absolute inset-y-0 right-0 pr-3">
            <div className="flex items-center h-full ">
              <SearchIcon className='w-4' aria-hidden="true"/>
            </div>
          </div>
      </div>

    </div>
  )
}
