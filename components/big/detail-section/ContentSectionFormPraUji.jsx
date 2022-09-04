import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import React from 'react'

export default function ContentSectionFormPraUji({data}) {
  return (
    <div className='bg-white px-6 py-3 border border-grey-300 rounded-xl'>
        <div className='block space-y-3 divide-y divide-grey-200'>
            <div className="grid grid-cols-2 gap-y-3 py-3">
                <Body1 className="text-black-400">
                    Pemohon/Pemegang Izin
                </Body1>
                <Body2 className="text-black-500">
                    {data.permit_holder}
                </Body2>
                <Body1 className="text-black-400">
                    Izin Pemanfaatan PPR No.
                </Body1>
                <Body2 className="text-black-500">
                    {data.ppr_no}
                </Body2>
            </div>
            <div className="block py-3">
                <h3 className='pb-4'>Spesifikasi Alat</h3>
                {data.tools.map((item,index)=>(
                    <div key={index} className="">
                        <h3>Alat {index+1}</h3>
                        <div className="grid grid-cols-2 gap-y-3 py-3">
                            <Body1 className="text-black-400">
                                Jenis Alat
                            </Body1>
                            <Body2 className="text-black-500">
                                {item.tool.type}
                            </Body2>
                            <Body1 className="text-black-400">
                                Jenis Uji
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.test_type}
                            </Body2>
                        
                    
                            <Body1 className="text-black-400">
                                Merk Alat
                            </Body1>
                            <Body2 className="text-black-500">
                                {/* {item.tool.brand} */}
                                {data.test_type==jenisPekerjaan[0]?item.tool.brand:item.tool_brand}
                            </Body2>
                            <Body1 className="text-black-400">
                                Tipe Alat
                            </Body1>
                            <Body2 className="text-black-500">
                                {item.tool_type}
                            </Body2>
                            
                            <Body1 className="text-black-400">
                                Buatan/Pabrik
                            </Body1>
                            <Body2 className="text-black-500">
                                {item.manufactured}
                            </Body2>

                            <Body1 className="text-black-400">
                                No. Seri Kontrol Panel
                            </Body1>
                            <Body2 className="text-black-500">
                                {item.control_panel_serial}
                            </Body2>

                            <Body1 className="text-black-400">
                                No. Seri Wadah Tabung
                            </Body1>
                            <Body2 className="text-black-500">
                                {item.tube_container_serial}
                            </Body2>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}
