import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AlatUkurTable from 'components/base/table/AlatUkurTable'
import FormModal from 'components/big/FormModal'
import Button from 'components/small/button_fixed/Button'
import Pagination from 'components/small/pagination/Pagination'
import { form_create_alat_ukur_id } from 'constants/FormUtils'
import { useJenisAlatFilterContext } from 'hooks/context/filter-jenis-alat/JenisAlatFilter'
import { useStatusFilterContext } from 'hooks/context/filter-status/StatusContext'
import { useFormCreateAlatUkurContext } from 'hooks/context/form-create-alat-ukur/FormCreateAlatUkurContext'
import { usePageContext } from 'hooks/context/pagination/PageContext'
import useGetTools from 'hooks/fetcher/management-alat-ukur/useGetTools'
import React, { useEffect, useState } from 'react'
import FormCreateAlatBaru from './FormCreateAlatBaru'

export default function DashboardAlatUkurMainSection() {
  const {createAlatUkurPopUp, setCreateAlatUkurPopUp} = useFormCreateAlatUkurContext()

  const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);
    const {currentPage, setLastPage, setCurrentPage} = usePageContext();
    const {jenisAlatState, setJenisAlatState} = useJenisAlatFilterContext()
    const {statusFilter} = useStatusFilterContext();
    const {tools, loading, error, mutate} = useGetTools(
      "Uji Kesesuaian",
      jenisAlatState,
      currentPage,
      statusFilter
    )

    useEffect(()=> {
      // console.log("reqsent", reqSent)
      if(reqSent){
        setCurrentPage(1)
        setJenisAlatState("")
        setCreateAlatUkurPopUp(false)
        
        mutate()
      }
    }, [reqSent])

    useEffect(() => {
      if(tools){
        setLastPage(tools.header.total_page)
        // console.log("total",tools.header.total_page)
        console.log("datanya",tools.data)
      }
  },[tools])
    
    
  return (
    <>
      <div className="pt-5 space-y-5">
        {loading &&
          <h2>Loading</h2>
        }
        {tools &&
        tools.data.length>0 ?
          <AlatUkurTable data={tools.data} mutate={mutate}/>
          :
          !loading&&
          <div className="relative w-full h-96 ">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                <h1>Belum ada data</h1>
            </div>
          </div>
        }

        {tools && 
          tools.data.length>0 ?
            <Pagination/>
            :
            !loading&&
            <></>
          
        }
      </div>

    {createAlatUkurPopUp &&
      <FormModal
      title="Alat Ukur Baru"
      bgColor="primary"
      isOpen={createAlatUkurPopUp}
      setIsOpen={setCreateAlatUkurPopUp}
      buttonSide={
        <Button
        className="bg-primary" 
        buttonStyle={submitState?"primary_disabled":"primary_default"}
        // buttonStyle="primary_default"
        type="submit" 
        disabled={submitState? true:false}
        form={form_create_alat_ukur_id}
        >
            { submitState &&
            <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
            }
            Buat Alat Ukur Baru
        </Button>
    
    }
      >
        <FormCreateAlatBaru
        id={form_create_alat_ukur_id}
        submitState={submitState}
        setSubmitState={setSubmitState}
        reqSent={reqSent}
        setreqSent={setreqSent}
        />


      </FormModal>
    }

    </>
  )
}
