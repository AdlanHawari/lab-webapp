import { PlusIcon } from '@heroicons/react/solid'
import DateFilter from 'components/base/filter/DateFilter'
import StatusFilter from 'components/base/filter/StatusFilter'
import { clientUjiStatus } from 'constants/filter-status/ClientUjiStatus'
import { useFormCreateUjiClientContext } from 'hooks/context/form-createUji-client/FormCreateUjiClientContext'
import React from 'react'
export default function ClientUjiFilterSection() {

  const {setCreateUjiPopUp} = useFormCreateUjiClientContext();
  return (
    <div className="block space-y-6">
        <div className="flex justify-between">
          <div className="">
              <DateFilter/>
          </div>
          <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
          onClick={()=>setCreateUjiPopUp(true)}>
              <PlusIcon className="h-6 w-6 cursor-pointer" aria-hidden="true"/>
              <p>
              Buat Permohonan Uji
              </p>
          </button>
        </div>
        <StatusFilter 
        filter={clientUjiStatus}
        />
    </div>
  )
}