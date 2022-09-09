import BaseLayout from "components/base/BaseLayout"
import ClientUjiFilterSection from "components/big/client/uji/ClientUjiFilterSection";
import ClientUjiMainSection from "components/big/client/uji/ClientUjiMainSection";
import { ACCESS_CODE } from "constants/Access_Code";
import DateFilterUjiContextProvider from "hooks/context/filter-date/DateFilterUjiContext";
import StatusFilterContextProvider from "hooks/context/filter-status/StatusContext";
import FormCreateUjiClientContextProvider from "hooks/context/form-createUji-client/FormCreateUjiClientContext";
import PageContextProvider from "hooks/context/pagination/PageContext";
import useUser from "hooks/fetcher/auth/useUser";
import { DetailUjiFetcherProvider } from "hooks/fetcher/detail-uji/useDetailUji";
import { ClientProvider } from "hooks/fetcher/useClient";
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClientUjiPage() {
  const [title, setTitle] = useTitleContext();
  const router = useRouter()
  const { user, loading,error, isValidating} = useUser()
  const [render, setRender] = useState(false)
  useEffect(() => {
    setTitle('Uji');
  })

  useEffect(() => {
    console.log("entering client uji")
    if(!isValidating){
      if(user){
        if(user.data.role.access_code != ACCESS_CODE.CLIENT &&  user.data.role.access_code != ACCESS_CODE.ADMIN){
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
    <StatusFilterContextProvider>
      <PageContextProvider>
        <ClientProvider>
          <DateFilterUjiContextProvider>
            <FormCreateUjiClientContextProvider>
              <div className="flex flex-col divide-y divide-grey-200 space-y-5">
                <ClientUjiFilterSection/>
                <DetailUjiFetcherProvider>
                  <ClientUjiMainSection/>
                </DetailUjiFetcherProvider>
              </div>
            </FormCreateUjiClientContextProvider>
          </DateFilterUjiContextProvider>
        </ClientProvider>
      </PageContextProvider>
    </StatusFilterContextProvider>
    }
  </>
  )
}

ClientUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }