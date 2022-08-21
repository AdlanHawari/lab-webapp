import { MyLink } from 'components/general/MyLink'
import Body2 from 'components/small/typography/Body2'
import { DOCTYPE } from 'constants/DocType'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import Link from 'next/link'
import React from 'react'
import { SingleFileDownloader } from 'utils/FileDownloader'

export default function SectionPaymentProof({data, invoice}) {
  // const id = data.id
  const {downloadDoc} = useDetailUji()


  return (
      <button 
      className="flex justify-between items-center w-full py-2 px-2.5 bg-primary rounded-xl shadow-sm"
      onClick={()=> SingleFileDownloader(downloadDoc, data.id, DOCTYPE.INVOICE, invoice.file_name)}
      >
              
          <Body2 className="text-white">
              Bukti Pembayaran
          </Body2>
          <Body2 className="text-white underline underline-offset-2">
              {invoice.file_name}
          </Body2>
      </button>
  )
}
