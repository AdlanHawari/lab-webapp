import QuickFilterSmaller from 'components/small/button_small/QuickFilterSmaller'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import React from 'react'

export default function Section1() {
  return (
    <div className="grid grid-cols-2 gap-y-3 py-3">
                                            
        <Body1 className="text-black-400">
            Nomor Surat Penawaran
        </Body1>
        <Body1 className="text-black-400">
        </Body1>
        <Body1 className="text-black-400">
            Tanggal Permohonan
        </Body1>
        <Body2 className="text-black-500">
            13 Juni 2021
        </Body2>
    
    
        <Body1 className="text-black-400">
            Nama Instansi
        </Body1>
        <Body2 className="text-black-500">
            RSU Aisyah Purworejo
        </Body2>
    
    
        <Body1 className="text-black-400">
            Alamat Instansi
        </Body1>
        <Body2 className="text-black-500">
        Jl. Mayjen Sutoyo No.113, Rw. VI, Sindurjan, Kec. Purworejo, Kabupaten Purworejo, Jawa Tengah 54113
        </Body2>
    
    
        <Body1 className="text-black-400">
            Status
        </Body1>
        <div className="">
            <QuickFilterSmaller className="bg-primary-lighten10 border-primary-darken10 text-primary-darken10">
                <Body2>
                    Pengajuan
                </Body2>
            </QuickFilterSmaller>
        </div>
    
    
        <Body1 className="text-black-400">
            Jenis Uji
        </Body1>
        <Body2 className="text-black-500">
            Uji Kesesuaian
        </Body2>
        
        
    </div>
  )
}
