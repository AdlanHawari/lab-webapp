import DateFilter from 'components/base/filter/DateFilter'
import InstansiFilter from 'components/base/filter/InstansiFilter'
import JenisPekerjaanFilter from 'components/base/filter/JenisPekerjaanFilter'
import Button from 'components/small/button_fixed/Button'
import useInstitutionsList from 'hooks/fetcher/management-summary/useInstitutionsList'
import React from 'react'

export default function SummaryFilterSection() {

  const {institutionLists, loading, error, mutate} = useInstitutionsList()
  
  return (
    <div className="flex justify-between items-center">

        <div className='w-full flex items-center space-x-4'>
          
          <div className="">
            <DateFilter/>
          </div>

          <div className='w-72'>
            {institutionLists ?
              <InstansiFilter itemLists={institutionLists}/>
            :
            loading &&
            <p>loading...</p>
            }
            
          </div>
          {/* <div>
            <input
            className=" inline-flex justify-start w-72 px-3 py-2 text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary"
            id="brand"
            name="brand"
            type="text"
            placeholder="Nama PT"/>
          </div> */}

          <div className='w-72'>
            <JenisPekerjaanFilter/>
          </div>

          

          {/* <div className=''>
            <input
            className=" inline-flex justify-start w-72 px-3 py-2 text-sm font-medium text-grey-700 bg-white border border-grey-300 rounded-xl shadow-sm hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-secondary"
            id="brand"
            name="brand"
            type="text"
            placeholder="Nama PT"/>
          </div> */}


        </div>


        <div className="w-[7.5rem]">
          <Button buttonStyle="primary_default" className="w-full px-5 py-0.5">
              Export
          </Button>
        </div>

      </div>
  )
}
