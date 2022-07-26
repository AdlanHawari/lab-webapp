import Button from "../button_fixed/Button";
import Body1 from "../typography/Body1";
import Body3 from "../typography/Body3";
import Title1 from "../typography/Title1";
import Title2Med from "../typography/Title2Med";
import { useEffect, useState } from "react";
import DetailModal from "components/big/DetailModal";
import { clientUjiStatus } from "constants/filter-status/ClientUjiStatus";
import { manajemenUjiStatus } from "constants/filter-status/ManajemenUjiStatus";
import { usePersPenawaranContext } from "hooks/context/form-persetujuan-penawaran/PersPenawaranFormContext";

import FormModal from "components/big/FormModal";
import { form_persetujuan_penawaran, form_pra_uji } from "constants/FormUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import PersetujuanPenawaranUji from "components/big/client/PersetujuanPenawaranUji";
import { useDetailUjiClientContext } from "hooks/context/detail-uji-client/DetailUjiClientContext";
import FormUploadDokumen from "components/big/client/FormUploadDokumen";
import { useDetailUji } from "hooks/fetcher/detail-uji/useDetailUji";
import { delay } from "utils/delay";
import Section1 from "components/big/detail-section/Section1";
import Section2 from "components/big/detail-section/Section2";
import SectionFee from "components/big/detail-section/SectionFee";
import SectionSchedule from "components/big/detail-section/SectionSchedule";
import FormPraUji from "components/big/client/FormPraUji";

import { jenisPekerjaan } from "constants/JenisPekerjaan";


export default function SmallCard({data, mutate}) {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const {
        persPenawaranOpen,
        setPersPenawaranOpen,
        formPraUjiOpen,
        setFormPraUjiOpen,
        uploadDokumenOpen, 
        setUploadDokumenOpen
    } = useDetailUjiClientContext()

    const detailUjiFetcher = useDetailUji()
    
    
    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setReqSent] = useState(false)

    useEffect(() => {
        if(reqSent){
            setPersPenawaranOpen(false)
            setReqSent(false)
            mutate()
        }
      
    
    }, [reqSent])
    
    
    
    

  return (
    <div className="block w-full border border-cardStrokes rounded-2xl p-5 space-y-5 bg-white">
        
        <div className="flex items-center space-x-6 divide-x divide-x-black-400 ">
            <div className="flex items-center space-x-6">

                <div className="title-5 text-black-400">
                    {data.test_type}
                </div>

                <div className="border border-primary-darken10 rounded-lg bg-primary-lighten10 px-2">
                    <Title1 className="text-primary-darken10">
                        {data.status_detail.client_value}
                    </Title1>
                </div>
            </div>
            <Title2Med className="text-black-400 pl-6">
                {data.quotation_no}
            </Title2Med>
        </div>

        

        <h3 className="text-black-500">
            {/* {data.TestApplicationTool[0]?.Tool.name} {data.TestApplicationTool[0]?.Tool.brand} - {data.TestApplicationTool[0]?.Tool.type} */}
            {/* Nama alat */}
            {data.tools[0].name} - {data.tools[0].brand} {data.tools[0].type}
            
        </h3>

        <div className="flex">
            <div className="Block w-2/3 space-y-2">
                <div className="flex items-center space-x-20 ">
                    <Body1 className="text-black-500">
                        Tanggal Pengujian
                    </Body1>
                    <Body3 className="text-black-500">
                        {/* 13 November 2021 */}
                        {/* {data.test_date} */}
                        Tanggal
                    </Body3>

                </div>
                <div className="flex space-x-28">
                    <Body1 className="text-black-500">
                        Kelengkapan
                        
                    </Body1>
                    <ul>
                        {/* {data.kelengkapan.map((item,index)=>(
                            <li key={index}>
                                <Body3 className="text-black-500">
                                    {item}
                                </Body3>
                            </li>

                        ))} */}
                    </ul>

                </div>

            </div>
            <div className="Block">
                <Body1 className="text-black-900">

                    Biaya Pengujian
                </Body1>
                <Body3 className="text-primary-darken10">

                    {/* Rp 2,000,000.- */}
                    {data.total_cost}
                </Body3>
            </div>

        </div>
        <div className="flex justify-end">
            <Button buttonStyle="primary_default" className="w-auto px-5 py-0.5"
            onClick={()=>setIsDetailOpen(true)}>
                Lihat Detail
            </Button>
        </div>

        {isDetailOpen &&
        //   <DetailUjiModal isOpen={isDetailOpen} setIsOpen={setIsDetailOpen}/>
          

            <DetailModal 
            title="Detail Uji" 
            isOpen={isDetailOpen} 
            setIsOpen={setIsDetailOpen}
            status={clientUjiStatus}
            current_status={data.status}
            data={data}
            //   status={manajemenUjiStatus}
            buttonSide = {
                <>
                
                {data.status==2 &&
                        <Button 
                        buttonStyle="primary_default"
                        onClick={()=> setPersPenawaranOpen(true)}
                        >
                            Konfirmasi Penawaran
                        </Button>
                }

                {data.status==3 &&
                    <div className="block space-y-4">
                        {data.test_type != jenisPekerjaan[1] &&

                            <Button 
                            buttonStyle="primary_default"
                            onClick={()=>setFormPraUjiOpen(true)}
                            >
                                Isi Form Pra-Uji
                            </Button>
                        }

                        <Button 
                        buttonStyle="secondary_default"
                        onClick={()=>setUploadDokumenOpen(true)}
                        >
                            Upload Dokumen
                        </Button>

                    </div>
                } 
                </>
            }
            >

                <Section1 data={data}/>
                                        
                <Section2 data={data}/>

                {data.status>1 &&
                <>
                    {data.status<5 &&
                        <SectionFee cost_detail={data.cost_detail} current_status={data.status}/>
                    }
                    
                    {data.status>4 &&

                        <SectionSchedule/>
                    }
                </>
                }

            </DetailModal>
        }

        {persPenawaranOpen &&
        // <PersetujuanPenawaranForm/>
        <FormModal
            title="Persetujuan Penawaran"
          bgColor="primary"
          isOpen={persPenawaranOpen}
          setIsOpen={setPersPenawaranOpen}
          buttonSide={
           <>
            <Button 
                className="bg-primary" 
                buttonStyle={submitState?"primary_disabled":"primary_default"}
                // buttonStyle="primary_default"
                // type="submit" 
                type="button" 
                disabled={submitState? true:false}
                onClick={async ()=>{
                    setSubmitState(true)
                    console.log("id", data.id)
                    const resp = await detailUjiFetcher.confirmTestApp(data.id)
                    // await delay(3000)
                    console.log("resp", resp)
                    if(resp.header.response_code == 200){

                        setSubmitState(false)
                        setReqSent(true)
                        // setPersPenawaranOpen(false)
                        // mutate()
                    }
                    // setReqSent(true)
                }}
                // form={}
                // form="ujibaru"
                >
                  { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                  Konfirmasi Penawaran
                </Button>
           </> 
          }
        >
            <PersetujuanPenawaranUji data={data}/>


        </FormModal> 
        }

        {formPraUjiOpen &&
            <FormModal
            title="Form Pra-Uji"
            bgColor="primary"
            isOpen={formPraUjiOpen}
            setIsOpen={setFormPraUjiOpen}
            buttonSide={
                <Button 
                    className="bg-primary" 
                    buttonStyle={submitState?"primary_disabled":"primary_default"}
                    // buttonStyle="primary_default"
                    // type="submit" 
                    type="button" 
                    disabled={submitState? true:false}
                    // form={}
                    // form="ujibaru"
                    >
                    { submitState &&
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                    }
                        Konfirmasi Form Pra Uji
                </Button>
            }
            >
                <FormPraUji id={form_pra_uji} data={data}/>
            </FormModal>

        }

        {uploadDokumenOpen &&
            <FormModal
            title="UploadDokumen"
            bgColor="primary"
            isOpen={uploadDokumenOpen}
            setIsOpen={setUploadDokumenOpen}
            buttonSide={
            <>
                <Button 
                    className="bg-primary" 
                    buttonStyle={submitState?"primary_disabled":"primary_default"}
                    // buttonStyle="primary_default"
                    // type="submit" 
                    type="button" 
                    disabled={submitState? true:false}
                    // form={}
                    // form="ujibaru"
                    >
                    { submitState &&
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                    }
                        Simpan Dokumen
                </Button>
            </> 
            }
            >
                <FormUploadDokumen/>   
            </FormModal>

        }
    
    </div>
  )
}


