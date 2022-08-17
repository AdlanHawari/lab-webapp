import BaseLayout from 'components/base/BaseLayout'
import DashboardAlatUkurFilterSection from 'components/big/manajemen/dashboard-alat-ukur/DashboardAlatUkurFilterSection';
import DashboardAlatUkurMainSection from 'components/big/manajemen/dashboard-alat-ukur/DashboardAlatUkurMainSection';
import StatusFilterContextProvider from 'hooks/context/filter-status/StatusContext';
import FormCreateAlatUkurContextProvider from 'hooks/context/form-create-alat-ukur/FormCreateAlatUkurContext';
import { useTitleContext } from 'hooks/TitleContext';
import React, { useEffect } from 'react'

export default function DashboardAlatUkurPage() {
  const [title,setTitle, subTitle,setSubtitle] = useTitleContext();

  useEffect(() => {
    setTitle('Manajemen Alat Ukur')
    })


  return (
    <>
      <StatusFilterContextProvider>
        <FormCreateAlatUkurContextProvider>  
          <div className="flex flex-col space-y-5">
            <DashboardAlatUkurFilterSection/>
            <DashboardAlatUkurMainSection/>
          </div>
        </FormCreateAlatUkurContextProvider>
      </StatusFilterContextProvider>
    </>

    
  )
}

DashboardAlatUkurPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
