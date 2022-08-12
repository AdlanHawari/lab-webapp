import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import React from 'react'
import SectionFormPraUji from './SectionFormPraUji'

export default function Section2({data}) {
    // const item = data.tools[0]
  return (
    <div className="py-3 block space-y-3">
    {/* { data.tools.map((item,index)=>( */}

    <div className="grid grid-cols-2  gap-y-3">
                                                
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
                            {item.name} - {item.brand} {item.type} - {item.quantity} buah
                            </li>
                        
                        // <li>Alat B - Kesesuaian - 25 Buah</li>
                    ))}
                </ul>
            </Body2>
        }
    </div>
    {/* ))
    
    } */}
    {data.status>3 &&
        <SectionFormPraUji data={data}/>
    }
    </div>
  )
}
