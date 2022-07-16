import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlusIcon } from "@heroicons/react/solid";
import BaseLayout from "components/base/BaseLayout"
import DateFilter from "components/base/filter/DateFilter";
import StatusFilter from "components/base/filter/StatusFilter";
import FormPermohonanUji from "components/big/client/FormPermohonanUji";
import PermohonanUjiModal from "components/big/client/PermohonanUjiModal";
import FormModal from "components/big/FormModal";
import Button from "components/small/button_fixed/Button";
import Pagination from "components/small/pagination/Pagination";
import SmallCard from "components/small/small_card/SmallCard";
import SmallCardSkeleton from "components/small/small_card/SmallCardSkeleton";
import { clientUjiStatus } from "constants/filter-status/ClientUjiStatus";
import { form_permohonan_uji_id } from "constants/FormUtils";
import { clientUji } from "constants/test_objects/clientUji";
import { useDateFilterUjiContext } from "hooks/context/filter-date/DateFilterUjiContext";
import { useStatusFilterContext } from "hooks/context/filter-status/StatusContext";
import { usePageContext } from "hooks/context/pagination/PageContext";
import { useAuth } from "hooks/fetcher/auth/useAuth";
import { ClientProvider } from "hooks/fetcher/useClient";
import usePermohonanUji from "hooks/fetcher/usePermohonanUji";
import { useTitleContext } from "hooks/TitleContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClientUjiPage() {


  const [title, setTitle] = useTitleContext();
  const [isUjiOpen, setIsUjiOpen] = useState(false);
  const {currentPage, setLastPage} = usePageContext();
  const {statusFilter} = useStatusFilterContext();
  const {startDateFilter, endDateFilter} =  useDateFilterUjiContext();
  const [submitState, setSubmitState] = useState(false)
  const [reqSent, setreqSent] = useState(false);
   const [errorMsg, setErrorMsg] = useState("")

  const router = useRouter()
  const { loading,
    error,
    data,
    mutate} = usePermohonanUji(
      startDateFilter,
      endDateFilter,
      currentPage,
      statusFilter

    )
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Uji');
    if(!data && !error){
      mutate()
    }
    
    
    // getUji();
  })

  // useEffect(()=> {
  //   console.log("reqsent", reqSent)
  //   if(reqSent){
      
  //     setIsUjiOpen(false)
  //     // mutate()
  //   }
  // }, [reqSent])

  

  useEffect(() => {
    if(data){
      setLastPage(data.header.total_page)
      // console.log(data.header.total_page)
    }
    
    if(error){
      console.log("error",error)
      console.log("data pas error",data)
      mutate(null)
      router.replace("/")
      // mutate()
    }
    console.log("perm uji", data)

  },[data, error])

  return(
    
      <ClientProvider>
      
      <div className="flex flex-col divide-y divide-grey-200 space-y-5">
        <div className="block space-y-6">

          <div className="flex justify-between">
            <div className="">
              <DateFilter/>
            </div>
            <button className="flex items-center space-x-2 bg-primary button-base text-white px-5 py-2 rounded-xl"
            onClick={()=>setIsUjiOpen(true)}>
              <PlusIcon className="h-6 w-6 cursor-pointer" aria-hidden="true"/>
              <p>
                Buat Permohonan Uji
              </p>
            </button>
          </div>
          <StatusFilter 
          filter={clientUjiStatus}
          // onClick={()=>}
          />
        </div>

        <div>

          <ul className="pt-5 space-y-5">
            {/* <SmallCardSkeleton/> */}

            {/* {clientUji.map((item,index)=>(
              <li key={index}>
                <SmallCard data={item}/>
                
              </li>
            ))} */}
            
          

            {loading &&
            <h1>loading</h1>
            }
            {
              data &&
              data.data.length>0?

              data.data.map((item,index)=>(
                <li key={index}>
                  <SmallCard data={item}/>
                </li>
              ))
              :
              <div className="relative w-full h-96 ">
                <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <h1>Anda belum memiliki daftar pengajuan</h1>
                </div>
              </div>
            }

          
          </ul> 

          <Pagination/>
        </div>
        
        {isUjiOpen &&
          // <PermohonanUjiModal isOpen={isUjiOpen} setIsOpen={setIsUjiOpen}/>
          <FormModal 
          title="Permohonan Uji"
          bgColor="primary"
          isOpen={isUjiOpen}
          setIsOpen={setIsUjiOpen}
          
          buttonSide={
       

              <>
                <Button 
                className="bg-primary" 
                buttonStyle={submitState?"primary_disabled":"primary_default"}
                type="submit" 
                disabled={submitState? true:false}
                form={form_permohonan_uji_id}>
                  { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                  Buat Permohonan Uji
                </Button>
              </>
            
          }
      >
            <FormPermohonanUji id={form_permohonan_uji_id} 
            submitState={submitState}
            setSubmitState={setSubmitState}
            reqSent={reqSent}
            setreqSent={setreqSent}
            errorMsg={errorMsg} 
            setErrorMsg={setErrorMsg}
            setIsUjiOpen={setIsUjiOpen}
            />
          </FormModal>
        }

    
    </div>
    </ClientProvider>
  )
}

ClientUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }