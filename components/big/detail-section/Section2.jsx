import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import React from 'react'
import SectionFormPraUji from './SectionFormPraUji'

export default function Section2({data}) {
  return (
    <div className="py-3 block space-y-3">
    <div className="grid grid-cols-2  gap-y-3">    
        <Body1 className="text-black-400">
            Jenis Alat
        </Body1>
        <Body2 className="text-black-500">
            {data.tools[0].tool.type}
        </Body2>
        <Body1 className="text-black-400">
            Merk Alat
        </Body1>
        <Body2 className="text-black-500">
            {data.test_type==jenisPekerjaan[0]?data.tools[0].tool.brand:data.tools[0].tool_brand}
        </Body2>
        <Body1 className="text-black-400">
            Tipe Alat
        </Body1>
        <Body2 className="text-black-500">
            {data.tools[0].tool_type}
        </Body2>
        <Body1 className="text-black-400">
            Kuantitas
        </Body1>
        <Body2 className="text-black-500">
            {data.tools[0].quantity}
        </Body2>
        <Body1 className="text-black-400">
            Keterangan
        </Body1>
        {data.tools.length>1 &&
            <Body2 className="text-black-500">
                Tambahan Alat:
                <ul className="list-disc list-inside">
                    {
                    data.tools.map((item,index)=>(
                        index>0 &&
                            <li key={index}>
                                {item.tool.type} - {data.test_type==jenisPekerjaan[0]?item.tool.brand:item.tool_brand} {item.tool_type} - {item.quantity} buah
                            </li>
                    ))}
                </ul>
            </Body2>
        }
    </div>
    {data.status>3 &&
      data.permit_holder &&
        <SectionFormPraUji data={data}/>
    }
    </div>
  )
}