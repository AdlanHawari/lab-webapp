import BaseLayout from 'components/base/BaseLayout';
import LogSection from 'components/base/logsection/LogSection';
import LogFilterSection from 'components/big/log/LogFilterSection';
import LogMainSection from 'components/big/log/LogMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import { clientLogs } from 'constants/test_objects/clientLog';
import DateFilterUjiContextProvider from 'hooks/context/filter-date/DateFilterUjiContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import useUser from 'hooks/fetcher/auth/useUser';
import { LogProvider } from 'hooks/fetcher/log/useLogFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ManajemenLogPage() {
  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
  setTitle('Log')
  })

  useEffect(() => {
    if(!isValidating){
      if(user){
        console.log("user", user)
        if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          setRender(true)
          // router.push("management/summary")
        }
      }
      if(error&& !user){
        console.log("error", error)
        router.replace("/")
      }

    }
  }, [user,error, isValidating])


  return(
    <>
    {loading ?
      <div className="">

        <h3>Loading...</h3>
      </div>
      :
      render &&
        <LogProvider>
          <PageContextProvider>
            <DateFilterUjiContextProvider>
            <div className="flex flex-col  space-y-5">
              <LogFilterSection/>
              <LogMainSection/>

              {/* <LogSection/> */}
            </div>
            </DateFilterUjiContextProvider>
          </PageContextProvider>
        </LogProvider>
    }
    </>
  )
}

ManajemenLogPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

