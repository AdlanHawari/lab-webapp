import SectionPaymentProof from 'components/big/detail-section/SectionPaymentProof'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'

export default function FormKonfirmPembayaranUji({
    data
}) {
    const [invoice, setInvoice] = useState({})

    useEffect(() => {
        if(data.documents.length>0){
            
            data.documents.map((item,index)=>{
                if(item.type=="INVOICE"){
                    setInvoice(item)
                }
            })
        }
    
    })

    useEffect(() => {
      console.log(invoice)
    }, [invoice])

  return (
    <div className="flex flex-col divide-y divide-grey-200  w-full pl-10 pr-32">
        <div className="grid grid-cols-2 gap-y-3 py-3">
            <Body1 className="text-black-400">
                Nomor Surat
            </Body1>
            <Body2 className="text-black-500">
                {data.cost_detail.invoice_no}
            </Body2>
            <Body1 className="text-black-400">
                  Jenis Alat
              </Body1>
              <Body2 className="text-black-500">
                {data.tools[0].name}
              </Body2>
              <Body1 className="text-black-400">
                  Merk Alat
              </Body1>
              <Body2 className="text-black-500">
                {data.tools[0].brand}
              </Body2>
              <Body1 className="text-black-400">
                  Tipe Alat
              </Body1>
              <Body2 className="text-black-500">
                  {data.tools[0].type}
              </Body2>
        </div>

        <div className="block py-3">
            <Body3 className="text-black-500">
            Verifikasi bahwa pembayaran berikut telah dilakukan dan uji lanjut ke tahap penjadwalan?
            </Body3>
            <div className="grid grid-cols-2 gap-y-3 py-3">
                <Body2 className="text-black-400">
                    Total
                </Body2>
                <Body3 className="text-black-500">
                {/* Rp14.300.000 */}
                <NumberFormat value={data.cost_detail.cost_with_ppn} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 
                
                </Body3>
            </div>

            <div className="w-3/5 space-y-3">
                <SectionPaymentProof invoice={invoice}/>
            </div>


        </div>

    </div>
  )
}
