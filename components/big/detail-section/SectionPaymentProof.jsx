import { MyLink } from 'components/general/MyLink'
import Body2 from 'components/small/typography/Body2'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import Link from 'next/link'
import React from 'react'

export default function SectionPaymentProof({data, invoice}) {
  // const id = data.id
  const {downloadDoc} = useDetailUji()

  async function downloadFile(id, docType){
      const file = await downloadDoc(id, docType)
    //   console.log("respdown",urlFile)
        const urlFile =  window.URL.createObjectURL(file);
        console.log("url", urlFile)
        // window.open(urlFile)
      const tempLink = document.createElement('a');
      tempLink.href = urlFile;
      tempLink.setAttribute('download', "file.pdf");
      tempLink.click();

  }

  return (
      <button 
      className="flex justify-between items-center w-full py-2 px-2.5 bg-primary rounded-xl shadow-sm"
      onClick={()=> downloadFile(data.id, "invoice")}
      >
              
          <Body2 className="text-white">
              Bukti Pembayaran
          </Body2>
          <Body2 className="text-white underline underline-offset-2">
              {/* invoice_bni_3.pdf */}
              {invoice.file_name}
          </Body2>
          
      </button>
  )
}
