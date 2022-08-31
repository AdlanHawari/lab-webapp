import BaseLayout from 'components/base/BaseLayout'
import DashboardAlatUkurFilterSection from 'components/big/manajemen/dashboard-alat-ukur/DashboardAlatUkurFilterSection';
import DashboardAlatUkurMainSection from 'components/big/manajemen/dashboard-alat-ukur/DashboardAlatUkurMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import JenisAlatFilterContextProvider from 'hooks/context/filter-jenis-alat/JenisAlatFilter';
import StatusFilterContextProvider from 'hooks/context/filter-status/StatusContext';
import FormCreateAlatUkurContextProvider from 'hooks/context/form-create-alat-ukur/FormCreateAlatUkurContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import useUser from 'hooks/fetcher/auth/useUser';
import { AlatUkurFetcherProvider } from 'hooks/fetcher/management-alat-ukur/useAlatUkurFetcher';
import { useTitleContext } from 'hooks/TitleContext';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function DashboardAlatUkurPage() {
  const [title,setTitle, subTitle,setSubtitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
    setTitle('Manajemen Alat Ukur')
    })
  
    useEffect(() => {
      // console.log("entering client uji")
      // delay(1000)
      if(!isValidating){
        if(user){
          console.log("user", user)
          if(user.data.role.access_code != ACCESS_CODE.CLIENT &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
            router.replace("/")
          }
          else{
            setRender(true)
          }
        }
    
        if(error&& !user){
          console.log("error", error)
          router.replace("/")
        }

      }
    
    }, [user,error, isValidating])
    


  return (
    <>
  
    {loading ?
    <div className="">

      <h3>Loading...</h3>
    </div>
    :
    render &&
    <AlatUkurFetcherProvider>
      <PageContextProvider>

        <StatusFilterContextProvider>
          <FormCreateAlatUkurContextProvider>  
            <JenisAlatFilterContextProvider>

              <div className="flex flex-col space-y-5">
                <DashboardAlatUkurFilterSection/>
                <DashboardAlatUkurMainSection/>
              </div>
            </JenisAlatFilterContextProvider>
          </FormCreateAlatUkurContextProvider>
        </StatusFilterContextProvider>

      </PageContextProvider>
    </AlatUkurFetcherProvider>
    }
    </>

    
  )
}

DashboardAlatUkurPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }
