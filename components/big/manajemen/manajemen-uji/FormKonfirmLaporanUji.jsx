import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import FormModal from 'components/big/FormModal'
import Button from 'components/small/button_fixed/Button'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import { form_tolak_laporan_uji_id } from 'constants/FormUtils'
import { useKonfirmLaporanUjiContext } from 'hooks/context/manajemen-uji/KonfirmLaporanUjiContext'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React, { useEffect, useState } from 'react'
import FormTolakLaporanUji from './FormTolakLaporanUji'

export default function FormKonfirmLaporanUji({
    data,
    submitState,
    setSubmitState,
    reqSent,
    setreqSent,
    asPeers
}) {
    const {
        terimaPopUp,
        setTerimaPopUp,
        tolakPopUp,
        setTolakPopUp
    } = useKonfirmLaporanUjiContext()
    const [fileName, setFileName] = useState("")
    const {confirmTestApp} = useDetailUji()
    async function SetujuiLaporan(testAppId){
        setSubmitState(true)
        const resp = await confirmTestApp(testAppId)
        if(resp.header.response_code == 200){
            setreqSent(true)
        }
    }

    useEffect(() => {
        data.documents.map((item)=>{
            if(item.type=="TEST_REPORT"){
                setFileName(item.file_name)
            }
        })
    }, [])
    
  return (
    <>
        <div className="flex flex-col  w-full pl-10 pr-32">
            <div className="space-y-6">
                <h3 className='text-black-400'>
                    Konfirmasi laporan berikut sebagai { asPeers ? "Peers" : "Kepala LUK"}
                </h3>
                <button 
                className="flex justify-between items-center w-full py-2 px-2.5 bg-primary rounded-xl shadow-sm"
                >      
                    <Body2 className="text-white">
                        Laporan Uji
                    </Body2>
                    <Body2 className="text-white underline underline-offset-2">
                        {fileName}
                    </Body2>
                </button>
            </div>
        </div>
        {terimaPopUp &&
         <FormModal
         title="Terima Laporan"
         bgColor="primary"
         isOpen={terimaPopUp}
         setIsOpen={setTerimaPopUp}
         buttonSide={
            <Button
            buttonStyle={submitState?"primary_disabled":"primary_default"}
            disabled={submitState? true:false}
            type="button"
            onClick={()=> SetujuiLaporan(data.id)}
            >
                Setujui Laporan
            </Button>
         }>
            <div className="pl-10 pr-32 ">
                <div className="w-3/4 border-b border-grey-200 pb-3">
                    <Body3 className="text-black-500">
                        Saya menyetujui dokumen <strong className='text-primary'>{fileName}</strong> dari hasil uji kalibrasi
                    </Body3>
                </div>
            </div>
         </FormModal>
        }
        {tolakPopUp &&
         <FormModal
         title="Tolak Laporan"
         bgColor="warning"
         isOpen={tolakPopUp}
         setIsOpen={setTolakPopUp}
         buttonSide={
            <Button
            className={classNames(
                submitState?"text-grey-500 bg-grey-400":"bg-warning text-white"
                )}
            disabled={submitState? true:false}
            type="submit"
            form={form_tolak_laporan_uji_id}
            >
                { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                  }
                Tolak Laporan
            </Button>
         }>
            <FormTolakLaporanUji
            id={form_tolak_laporan_uji_id}
            fileName={fileName}
            data={data}
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