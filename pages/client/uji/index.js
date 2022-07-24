import BaseLayout from "components/base/BaseLayout"
import ClientUjiFilterSection from "components/big/client/uji/ClientUjiFilterSection";
import ClientUjiMainSection from "components/big/client/uji/ClientUjiMainSection";
import DateFilterUjiContextProvider, { useDateFilterUjiContext } from "hooks/context/filter-date/DateFilterUjiContext";
import StatusFilterContextProvider, { useStatusFilterContext } from "hooks/context/filter-status/StatusContext";
import FormCreateUjiClientContextProvider from "hooks/context/form-createUji-client/FormCreateUjiClientContext";
import PageContextProvider, { usePageContext } from "hooks/context/pagination/PageContext";
import { ClientProvider } from "hooks/fetcher/useClient";
import { useTitleContext } from "hooks/TitleContext";
import { useEffect, useState } from "react";

export default function ClientUjiPage() {


  const [title, setTitle] = useTitleContext();
  
  useEffect(() => {
    setTitle('Uji');
})

  return(
    <StatusFilterContextProvider>
      <PageContextProvider>
        <ClientProvider>
          <DateFilterUjiContextProvider>
            <FormCreateUjiClientContextProvider>
              <div className="flex flex-col divide-y divide-grey-200 space-y-5">
                
                <ClientUjiFilterSection/>

                <ClientUjiMainSection/>
            
              </div>
            </FormCreateUjiClientContextProvider>
          </DateFilterUjiContextProvider>
        </ClientProvider>

      </PageContextProvider>
    </StatusFilterContextProvider>
    
  )
}

ClientUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }