import { PlusIcon } from "@heroicons/react/solid";
import BaseLayout from "components/base/BaseLayout"
import DateFilter from "components/base/filter/DateFilter";
import StatusFilter from "components/base/filter/StatusFilter";
import FormPermohonanUji from "components/big/client/FormPermohonanUji";
import PermohonanUjiModal from "components/big/client/PermohonanUjiModal";
import FormModal from "components/big/FormModal";
import Button from "components/small/button_fixed/Button";
import SmallCard from "components/small/small_card/SmallCard";
import SmallCardSkeleton from "components/small/small_card/SmallCardSkeleton";
import { clientUjiStatus } from "constants/filter-status/ClientUjiStatus";
import { form_permohonan_uji_id } from "constants/FormUtils";
import { clientUji } from "constants/test_objects/clientUji";
import { useTitleContext } from "hooks/TitleContext";
import { useEffect, useState } from "react";

export default function ClientUjiPage() {
  const [title, setTitle] = useTitleContext();
  const [isUjiOpen, setIsUjiOpen] = useState(false);
  // const router = useRouter
  // console.log(clientLogs)
  useEffect(() => {
    setTitle('Uji')
  })
  return(
    // <div className="flex flex-col divide-y divide-grey-200 space-y-5">
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
          <StatusFilter filter={clientUjiStatus}/>
        </div>

        <ul className="pt-5 space-y-5">
          {/* <SmallCardSkeleton/> */}

          {clientUji.map((item,index)=>(
            <li key={index}>
              <SmallCard data={item}/>
              
            </li>
          ))}
         
        </ul> 
        

        

        {isUjiOpen &&
          // <PermohonanUjiModal isOpen={isUjiOpen} setIsOpen={setIsUjiOpen}/>
          <FormModal 
          title="Permohonan Uji"
          bgColor="primary"
          isOpen={isUjiOpen}
          setIsOpen={setIsUjiOpen}
          
          buttonSide={
       

              <>
                <Button className="bg-primary" buttonStyle="primary_default" type="submit" form={form_permohonan_uji_id}>
                Buat Permohonan Uji
                </Button>
              </>
            
          }
      >
            <FormPermohonanUji id={form_permohonan_uji_id}/>
          </FormModal>
        }

    </div>
  )
}

ClientUjiPage.getLayout = function getLayout(page) {
    return (
        <BaseLayout>{page}</BaseLayout>
    )
  }