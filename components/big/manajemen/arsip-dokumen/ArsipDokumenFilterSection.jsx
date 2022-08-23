import DateFilter from 'components/base/filter/DateFilter'
import InstansiFilter from 'components/base/filter/InstansiFilter'
import JenisPekerjaanFilter from 'components/base/filter/JenisPekerjaanFilter'
import DocumentNoFilter from 'components/base/filter/DocumentNoFilter'

import useInstitutionsList from 'hooks/fetcher/management-summary/useInstitutionsList'
import React from 'react'

export default function ArsipDokumenFilterSection() {
  
  const {institutionLists, loading, error, mutate} = useInstitutionsList()
  return (
    <div className="flex items-center space-x-4">
      
      <DocumentNoFilter/>

      <div className="">

        <DateFilter/>
      </div>
      
      

      

      <div className='w-64'>

        {loading&&
          <p>loading...</p>
        }

        {institutionLists &&
          // institutionLists.length>0 &&
          <InstansiFilter itemLists={institutionLists.data}/>
        }
        
      </div>

      <div className='w-64'>
        <JenisPekerjaanFilter/>
      </div>

    </div>
  )
}
