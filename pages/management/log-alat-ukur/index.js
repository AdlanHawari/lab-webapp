import BaseLayout from 'components/base/BaseLayout'
import LogAlatUkurFilterSection from 'components/big/manajemen/log-alat-ukur/LogAlatUkurFilterSection';
import LogAlatUkurMainSection from 'components/big/manajemen/log-alat-ukur/LogAlatUkurMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import useUser from 'hooks/fetcher/auth/useUser';
import { LogAlatUkurProvider } from 'hooks/fetcher/log-alat-ukur/useLogAlatUkurFetcher';
import { useTitleContext } from 'hooks/TitleContext';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function LogAlatUkurPage() {
  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)
  
  useEffect(() => {
    setTitle('Log');
  })

  useEffect(() => {
    
    // delay(1000)
    if(!isValidating){
      if(user){
        console.log("user", user)
        if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_KAL && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_UJI &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
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
    // else{
    //   router.replace("/")
    // }
  
  }, [user,error,isValidating])
  return (
    <>
  
    {loading ?
    <div className="">

      <h3>Loading...</h3>
    </div>
    :
    render &&
    // <div>LogAlatUkur</div>
    <LogAlatUkurProvider>
      <PageContextProvider>
        <DateFilterUjiContextProvider>
          <div className="flex flex-col  space-y-5">
            <LogAlatUkurFilterSection/>
            <LogAlatUkurMainSection/>      
          </div>
        </DateFilterUjiContextProvider>
      </PageContextProvider>
    </LogAlatUkurProvider>
    
    
  }
  </>
  )
}

LogAlatUkurPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }