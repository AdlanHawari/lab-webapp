import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import CaptionReg from 'components/small/typography/CaptionReg'
import React from 'react'
import SectionPaymentStep from './SectionPaymentStep'

export default function SectionFee() {
  return (
    <div className="py-4">      
        <h3>
            Biaya
        </h3> 
        <div className="grid grid-cols-2 gap-y-3 py-3">
            
            <Body1 className="text-black-400">
                Biaya Uji Kesesuaian<br/>
                <CaptionReg className="italic">
                    (Termasuk Biaya Setting + Akomodasi)
                </CaptionReg>
            </Body1>
            <Body2 className="text-black-500">
                Rp13.000.000
            </Body2>
            <Body1 className="text-black-400">
                PPN 10%
            </Body1>
            <Body2 className="text-black-500  ">
                Rp1.300.000
            </Body2>

            <Body2 className="text-black-400  border-t border-grey-200 pt-2">
                Total
            </Body2>
            <div className="flex">
                <Body3 className="text-black-500 border-t border-grey-200 pt-2">
                    Rp14.300.000
                </Body3>
            </div>
            <Body2 className="text-black-400">
                Status
            </Body2>
            <Body3 className="text-error">
                Belum Dibayar
            </Body3>
        </div>


        <div className="w-3/5 space-y-3">
            <SectionPaymentStep/>

                <button className="flex justify-between items-center w-full py-2 px-2.5 bg-primary rounded-xl shadow-sm">
            
                <Body2 className="text-white">
                    Bukti Pembayaran
                </Body2>
                <Body2 className="text-white underline underline-offset-2">
                    invoice_bni_3.pdf
                </Body2>
                
            </button>
        </div>
    </div>
  )
}
