import { data } from 'autoprefixer'
import FormModal from 'components/big/FormModal'
import Body2 from 'components/small/typography/Body2'
import { useKonfirmLaporanUjiContext } from 'hooks/context/manajemen-uji/KonfirmLaporanUjiContext'
import React from 'react'

export default function FormKonfirmLaporanUji({
    id,
    data,
    submitState,
    setSubmitState,
    reqSent,
    setreqSent,
}) {

    const {
        terimaPopUp,
        setTerimaPopUp,
        tolakPopUp,
        setTolakPopUp
    } = useKonfirmLaporanUjiContext()
  return (
    <>
        <div className="flex flex-col  w-full pl-10 pr-32">
            <div className="space-y-6">
                <h3 className='text-black-400'>
                    Konfirmasi laporan berikut sebagai Kepala LUK
                </h3>
                {data.documents.map((item,index)=>(
                    item.type=="TEST_REPORT" &&
            
                        <button 
                        className="flex justify-between items-center w-full py-2 px-2.5 bg-primary rounded-xl shadow-sm"
                        // onClick={()=> downloadFile(data.id, "invoice")}
                        >
                                
                            <Body2 className="text-white">
                                Laporan Uji
                            </Body2>
                            <Body2 className="text-white underline underline-offset-2">
                                {item.file_name}
                                {/* {invoice.file_name} */}
                            </Body2>
                            
                        </button>

                ))}
            </div>

        </div>
        {terimaPopUp &&
         <FormModal
         title="Terima Laporan"
         bgColor="primary"
         isOpen={terimaPopUp}
         setIsOpen={setTerimaPopUp}
         buttonSide={<>
         </>
         }>

         </FormModal>

        }

        {tolakPopUp &&
         <FormModal
         title="Tolak Laporan"
         bgColor="warning"
         isOpen={tolakPopUp}
         setIsOpen={setTolakPopUp}
         buttonSide={<>
         </>
         }>

         </FormModal>

        }
    </>
  )
}
