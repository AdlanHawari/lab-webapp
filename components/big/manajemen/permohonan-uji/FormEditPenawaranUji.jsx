
import { Field, Form, Formik } from 'formik'
import { buatPenawaranUjiInitValues } from 'helper/initial-formik-values/BuatPenawaranUjiInitValues'
import React  from 'react'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import CaptionReg from 'components/small/typography/CaptionReg'
import NumberFormat from 'react-number-format'
import CalculatorPPN from 'utils/CalculatorPPN'
import handleFormData from 'utils/HandleFormData'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'

export default function FormEditPenawaranUji({
  id,
  data,
  setSubmitState,
  setreqSent
}) {

  const fetcher = useDetailUji()

  function formEntry(values){
    let updatedVal = {}
    for (let [key, value] of Object.entries(values)) {
        if(value && value != ""){
        updatedVal[key] = value
        }
    }
    return updatedVal
}
  
  return (
    <Formik
    initialValues={buatPenawaranUjiInitValues}
    onSubmit={(values)=>{
      const updatedVal = formEntry(values)
      async function fetchData(formData){
          const response = await fetcher.editPenawaranUji(formData, data.id)
          if(response.header.response_code==200){
            setreqSent(true)
          }
          else{
              setSubmitState(false)
          }
        }

        if(Object.keys(updatedVal).length === 0 && updatedVal.constructor === Object){
            console.log("no change")
        }
        else{
            setSubmitState(true)
            console.log(updatedVal)
            let formData = handleFormData(updatedVal)
            fetchData(formData)
            }
      }}
    >
      {formik => {
        return <Form id={id}>
        <div className="flex flex-col divide-y divide-grey-200  w-full pl-10 pr-32">
          <div className="grid grid-cols-2 gap-y-3 py-3">
              <Body1 className="text-black-400">
                  Nomor Surat
              </Body1>
              <Body2 className="text-black-500">
              {data.cost_detail.invoice_no}
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
          <div className="grid grid-cols-2 gap-y-3 py-3">
            <Body3 className="text-black-400">
              Nilai Harga Penawaran
                <br/>
                <CaptionReg className="italic">
                    (Harga Uji + Biaya Setting + Akomodasi)
                </CaptionReg>
            </Body3>
            <div className="block">
                <Field
                    className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                    id="cost_offered"
                    name="cost_offered"
                    type="number"
                    placeholder={data.cost_detail.cost}
                    />
            </div>
            <Body1 className="text-black-400">
                PPN 10%
            </Body1>
            <Body2 className="text-black-500  ">
                <NumberFormat value={CalculatorPPN(formik.values.cost_offered)} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 
            </Body2>
          <Body2 className="text-black-400  border-t border-grey-200 pt-2">
                Total
            </Body2>
          <div className="flex">
              <Body3 className="text-black-500 border-t border-grey-200 pt-2">
                  <NumberFormat value={formik.values.cost_offered + CalculatorPPN(formik.values.cost_offered)} displayType={'text'} thousandSeparator=',' prefix={'Rp'} />
              </Body3>
              </div>
          </div> 
      </div>
    </Form>
    }}
    </Formik>
  )
}