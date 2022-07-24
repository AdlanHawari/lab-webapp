import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import CaptionReg from 'components/small/typography/CaptionReg'
import useFee from 'hooks/fetcher/detail-uji/useFee'
import React from 'react'
import NumberFormat from 'react-number-format'
import CalculatorPPN from 'utils/CalculatorPPN'
import SectionPaymentProof from './SectionPaymentProof'
import SectionPaymentStep from './SectionPaymentStep'

export default function SectionFee({cost_detail, current_status}) {
    
    return (
    <div className="py-4">      
        <h3>
            Biaya
        </h3> 
        <div className="grid grid-cols-2 gap-y-3 py-3">
            
            <Body1 className="text-black-400">
                Biaya Uji Kesesuaian<br/>
                <CaptionReg className="italic">
                    (Termasuk Biaya Setting + Akomodasi)
                </CaptionReg>
            </Body1>
            {/* <p className="font-bold text-lg text-banoo-white md:text-2xl font-spartan">
                    <NumberFormat value={content.currentPrice} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 

                </p> */}
            <Body2 className="text-black-500">
                {/* Rp13.000.000 */}
                
                <NumberFormat value={cost_detail.cost} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 
                
            </Body2>
            <Body1 className="text-black-400">
                PPN 10%
            </Body1>
            <Body2 className="text-black-500  ">
                <NumberFormat value={CalculatorPPN(cost_detail.cost)} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 
            </Body2>

            <Body2 className="text-black-400  border-t border-grey-200 pt-2">
                Total
            </Body2>
            <div className="flex">
                <Body3 className="text-black-500 border-t border-grey-200 pt-2">
                    {/* Rp14.300.000 */}
                    <NumberFormat value={cost_detail.cost_with_ppn} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 
                    
                </Body3>
            </div>
            <Body2 className="text-black-400">
                Status
            </Body2>
            {current_status<4&&
                <Body3 className="text-error">
                    Belum Dibayar
                </Body3>
            }
            {current_status==4&&
                <Body3 className="text-error">
                    Menunggu konfirmasi
                </Body3>
            }
        </div>


        <div className="w-3/5 space-y-3">
            <SectionPaymentStep/>
            {current_status==4 &&

                <SectionPaymentProof/>
            }
        </div>
    </div>
  )
}
