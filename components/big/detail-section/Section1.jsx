import QuickFilterSmaller from 'components/small/button_small/QuickFilterSmaller'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import RoleDetector from 'utils/RoleDetector'
import UrlSplitter from 'utils/UrlSplitter'

export default function Section1({data}) {
    const route = useRouter()
    console.log(route)
    const a = UrlSplitter(route.pathname)
    const role = a[1]
    console.log()
  return (
    <div className="grid grid-cols-2 gap-y-3 py-3">
                                            
        <Body1 className="text-black-400">
            Nomor Surat Penawaran
        </Body1>
        <Body1 className="text-black-400">
            {data.invoice_no}
        </Body1>
        <Body1 className="text-black-400">
            Tanggal Permohonan
        </Body1>
        <Body2 className="text-black-500">
            {format(new Date(data.created_at), 'dd MMMM yyyy')}
        </Body2>
    
    
        <Body1 className="text-black-400">
            Nama Instansi
        </Body1>
        <Body2 className="text-black-500">
            {data.user.institution.name}
        </Body2>
    
    
        <Body1 className="text-black-400">
            Alamat Instansi
        </Body1>
        <Body2 className="text-black-500">
        {data.user.institution.address}
        </Body2>
    
    
        <Body1 className="text-black-400">
            Status
        </Body1>
        <div className="">
            <QuickFilterSmaller className="bg-primary-lighten10 border-primary-darken10 text-primary-darken10">
                <Body2>
                    {data.status_detail[`${role}_value`]}
                </Body2>
            </QuickFilterSmaller>
        </div>
    
    
        <Body1 className="text-black-400">
            Jenis Uji
        </Body1>
        <Body2 className="text-black-500">
            {data.test_type}
        </Body2>
        
        
    </div>
  )
}
