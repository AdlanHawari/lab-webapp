import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import CaptionReg from 'components/small/typography/CaptionReg'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import React from 'react'
import NumberFormat from 'react-number-format'
import CalculatorPPN from 'utils/CalculatorPPN'

export default function PersetujuanPenawaranUji({data}) {
  return (
    <div className='block w-full pl-10 pr-32 space-y-3'>
        <Body3>
            Saya menyetujui penawaran untuk alat berikut
        </Body3>
        <div className="grid grid-cols-2 gap-y-3 py-3">
            <Body1 className="text-black-400">
                Jenis Uji
            </Body1>
            <Body2 className="text-black-500">
                {data.test_type}
            </Body2>
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
        </div> 
        <Body3>
            Dengan biaya
        </Body3>
        <div className="grid grid-cols-2 gap-y-3 py-3">
        <Body1 className="text-black-400">
            Biaya Uji Kesesuaian<br/>
            <CaptionReg className="italic">
                (Termasuk Biaya Setting + Akomodasi)
            </CaptionReg>
        </Body1>
        <Body2 className="text-black-500">
            <NumberFormat value={data.cost_detail.cost} displayType={'text'} thousandSeparator=',' prefix={'Rp'} />
        </Body2>
        <Body1 className="text-black-400">
            PPN 10%
        </Body1>
        <Body2 className="text-black-500  ">
            <NumberFormat value={CalculatorPPN(data.cost_detail.cost)} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 
        </Body2>
        <Body2 className="text-black-400  border-t border-grey-200 pt-2">
            Total
        </Body2>
        <div className="flex">
            <Body3 className="text-black-500 border-t border-grey-200 pt-2">
                <NumberFormat value={data.cost_detail.cost_with_ppn} displayType={'text'} thousandSeparator=',' prefix={'Rp'} />
            </Body3>
            </div>
        </div> 
    </div>
  )
}