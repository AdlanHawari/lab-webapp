import BaseLayout from 'components/base/BaseLayout';
import ManajemenUserFilterSection from 'components/big/manajemen/manajemen-user/ManajemenUserFilterSection';
import ManajemenUserMainSection from 'components/big/manajemen/manajemen-user/ManajemenUserMainSection';
import { ACCESS_CODE } from 'constants/Access_Code';
import RoleFilterContextProvider from 'hooks/context/filter-role/RoleFilter';
import ManajemenUserContextProvider from 'hooks/context/manajemen-user/ManajemenUserContext';
import PageContextProvider from 'hooks/context/pagination/PageContext';
import useUser from 'hooks/fetcher/auth/useUser';
import { SummaryProvider } from 'hooks/fetcher/management-summary/useSummaryFetcher';
import { ManajemenUserFetcherProvider } from 'hooks/fetcher/management-user/useManajemenUserFetcher';
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';

export default function ManajemenManajemenUserPage() {

  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating } = useUser()
  const [render, setRender] = useState(false)

  useEffect(() => {
    setTitle('Kelola User')
  })

  useEffect(() => {
    if(!isValidating){
      if(user){
        if(user.data.role.access_code != ACCESS_CODE.MANAGEMENT_KAL && user.data.role.access_code != ACCESS_CODE.MANAGEMENT_UJI && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_KAL && user.data.role.access_code != ACCESS_CODE.KEPALA_LAB_UJI &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
          router.replace("/")
        }
        else{
          setRender(true)
        }
      }
      if(error&& !user){
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
        <PageContextProvider>
          <RoleFilterContextProvider>
            <ManajemenUserContextProvider>
              <ManajemenUserFetcherProvider>
                <div className="block space-y-7">
                  <ManajemenUserFilterSection/>
                  <SummaryProvider>
                    <ManajemenUserMainSection/>
                  </SummaryProvider>
              </div>
              </ManajemenUserFetcherProvider>
            </ManajemenUserContextProvider>
          </RoleFilterContextProvider>
        </PageContextProvider>
    }
    </>
  )
}

ManajemenManajemenUserPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }

