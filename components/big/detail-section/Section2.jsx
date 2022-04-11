import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import React from 'react'

export default function Section2() {
  return (
    <div className="grid grid-cols-2 gap-y-3 py-3">
                                                
        <Body1 className="text-black-400">
            Jenis Alat
        </Body1>
        <Body2 className="text-black-500">
            Radiografi Umum
        </Body2>
        <Body1 className="text-black-400">
            Merk Alat
        </Body1>
        <Body2 className="text-black-500">
            Yangzou
        </Body2>
        <Body1 className="text-black-400">
            Tipe Alat
        </Body1>
        <Body2 className="text-black-500">
            Type YZ 100C
        </Body2>


        <Body1 className="text-black-400">
            Kuantitas
        </Body1>
        <Body2 className="text-black-500">
            5
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
  )
}
