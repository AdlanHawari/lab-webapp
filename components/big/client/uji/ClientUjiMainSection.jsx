import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormModal from 'components/big/FormModal'
import Button from 'components/small/button_fixed/Button'
import Pagination from 'components/small/pagination/Pagination'
import SmallCard from 'components/small/small_card/SmallCard'
import SmallCardSkeleton from 'components/small/small_card/SmallCardSkeleton'
import { form_permohonan_uji_id } from 'constants/FormUtils'
import DetailUjiClientContextProvider from 'hooks/context/detail-uji-client/DetailUjiClientContext'
import { useDateFilterUjiContext } from 'hooks/context/filter-date/DateFilterUjiContext'
import { useStatusFilterContext } from 'hooks/context/filter-status/StatusContext'
import { useFormCreateUjiClientContext } from 'hooks/context/form-createUji-client/FormCreateUjiClientContext'
import { usePageContext } from 'hooks/context/pagination/PageContext'
import usePermohonanUji from 'hooks/fetcher/usePermohonanUji'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import FormPermohonanUji from '../FormPermohonanUji'

export default function ClientUjiMainSection() {
  
    // const [isUjiOpen, setIsUjiOpen] = useState(false);
    const {createUjiPopUp, setCreateUjiPopUp} = useFormCreateUjiClientContext();
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


    useEffect(()=> {
        console.log("reqsent", reqSent)
        if(reqSent){
          
          setCreateUjiPopUp(false)
          mutate()
        }
      }, [reqSent])

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

    return (
    <>
    
    <div>

        <ul className="pt-5 space-y-5">
        {/* <SmallCardSkeleton/> */}

        {/* {clientUji.map((item,index)=>(
            <li key={index}>
            <SmallCard data={item}/>
            
            </li>
        ))} */}
        
        

        {loading &&
        // <h1>loading</h1>
        <>
            <SmallCardSkeleton/>
            <SmallCardSkeleton/>
            <SmallCardSkeleton/>
        </>
        }
        {
            data &&
            data.data.length>0?

            data.data.map((item,index)=>(
            <li key={index}>
                <DetailUjiClientContextProvider>
                    <SmallCard data={item}/>
                </DetailUjiClientContextProvider>
            </li>
            ))
            :
            !loading&&
            <div className="relative w-full h-96 ">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                <h1>Anda belum memiliki daftar pengajuan</h1>
            </div>
            </div>
        }

        
        </ul> 

        <Pagination/>
    </div>
    
    {createUjiPopUp &&
        // <PermohonanUjiModal isOpen={isUjiOpen} setIsOpen={setIsUjiOpen}/>
        <FormModal 
        title="Permohonan Uji"
        bgColor="primary"
        isOpen={createUjiPopUp}
        setIsOpen={setCreateUjiPopUp}
        
        buttonSide={
            <>
            <Button 
            className="bg-primary" 
            buttonStyle={submitState?"primary_disabled":"primary_default"}
            // buttonStyle="primary_default"
            type="submit" 
            disabled={submitState? true:false}
            form={form_permohonan_uji_id}
            // form="ujibaru"
            >
                { submitState &&
                <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                }
                Buat Permohonan Uji
            </Button>
            </>
        
        }
    >
        <FormPermohonanUji 
        id={form_permohonan_uji_id} 
        // id="ujibaru"
        submitState={submitState}
        setSubmitState={setSubmitState}
        reqSent={reqSent}
        setreqSent={setreqSent}
        errorMsg={errorMsg} 
        setErrorMsg={setErrorMsg}
        setIsUjiOpen={setCreateUjiPopUp}
        />
        </FormModal>
    }
    </>
  )
}
