import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import React from 'react'

export default function Section2({data}) {
  return (
    <>
    { data.tools.map((item,index)=>(

    <div key={index} className="grid grid-cols-2 gap-y-3 py-3">
                                                
        <Body1 className="text-black-400">
            Jenis Alat
        </Body1>
        <Body2 className="text-black-500">
            {item.name}
        </Body2>
        <Body1 className="text-black-400">
            Merk Alat
        </Body1>
        <Body2 className="text-black-500">
        {item.brand}
        </Body2>
        <Body1 className="text-black-400">
            Tipe Alat
        </Body1>
        <Body2 className="text-black-500">
            {item.type}
        </Body2>


        <Body1 className="text-black-400">
            Kuantitas
        </Body1>
        <Body2 className="text-black-500">
            {item.quantity}
        </Body2>


        <Body1 className="text-black-400">
            Keterangan
        </Body1>
        <Body2 className="text-black-500">
            Tambahan Alat:
            <ul className="list-disc list-inside">
                <li>Alat A - Kesesuaian 10 buah</li>
                <li>Alat B - Kesesuaian - 25 Buah</li>
            </ul>
        </Body2>
    </div>
    ))
    
    }
    </>
  )
}
