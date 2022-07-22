import Body2 from 'components/small/typography/Body2'
import React from 'react'

export default function SectionPaymentProof() {
  return (
    <button className="flex justify-between items-center w-full py-2 px-2.5 bg-primary rounded-xl shadow-sm">
            
        <Body2 className="text-white">
            Bukti Pembayaran
        </Body2>
        <Body2 className="text-white underline underline-offset-2">
            invoice_bni_3.pdf
        </Body2>
        
    </button>
  )
}
