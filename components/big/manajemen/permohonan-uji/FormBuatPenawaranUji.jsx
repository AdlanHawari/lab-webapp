import { ErrorMessage, Field, Form, Formik } from 'formik'
import { buatPenawaranUjiInitValues } from 'helper/initial-formik-values/BuatPenawaranUjiInitValues'
import BuatPenawaranUjiValidationSchema from 'helper/yup/BuatPenawaranUjiValidationSchema'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import CaptionReg from 'components/small/typography/CaptionReg'
import NumberFormat from 'react-number-format'
import CalculatorPPN from 'utils/CalculatorPPN'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { usePermohonanUjiManajemenFetcher } from 'hooks/fetcher/permohonan-uji/usePermohonanUjiFetcher'
import handleFormData from 'utils/HandleFormData'
import { useDetailUjiClientContext } from 'hooks/context/detail-uji-client/DetailUjiClientContext'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import { delay } from 'utils/delay'
import { useManajemenPermohonanUjiContext } from 'hooks/context/permohonan-uji/PermohonanUjiContext'

export default function FormBuatPenawaranUji({
  id,
  data,
  submitState,
  setSubmitState,
  setreqSent
}) {

  const fetcher = useDetailUji()
  const {buatPenawaranPopUp, setBuatPenawaranPopUp} = useManajemenPermohonanUjiContext()
  // const [ppnCost, setPpnCost] = useState(null)
  // const [totalCost, setTotalCost] = useState(null)
  const [update, setUpdate] = useState(false)
  const [storePrice, setStorePrice] = useState(false)

  useEffect(() => {
    if(storePrice && update){
    //   console.log("submit done")
    setreqSent(true)
    // console.log("storePrice",storePrice)
    // console.log("update",update)

    }
  }, [storePrice, update])
  // useEffect(() => {
  //   // if(storePrice && update){
  //   //   console.log("submit done")
  //   //   setBuatPenawaranPopUp(false)
  //   console.log("storePrice",storePrice)
  //   console.log("update",update)

  //   // }
  // }, [update])
  
  
  return (
    <Formik
    initialValues={buatPenawaranUjiInitValues}
    validationSchema={BuatPenawaranUjiValidationSchema(Yup)}
    onSubmit={async (values)=>{
      setSubmitState(true)
      const finalValues = Object.assign(values, 
        {test_application_id: data.id}
        )
      console.log(finalValues)
      let formData = handleFormData(finalValues)
      const response = await fetcher.createPenawaranUji(formData)
      const resStat = await fetcher.confirmTestApp(data.id)
      // console.log("resp stat", response)
      console.log("resStat", resStat)
      console.log("respons", response)

      if(resStat.header.response_code==200){
        setUpdate(true)
        // delay(1500)
      }
      if(response.header.response_code==201){
        setStorePrice(true)
        // delay(1500)
        // const resStat = await fetcher.confirmTestApp(data.id)
        // if(resStat.header.response_code==201){
        //   console.log("resStat", resStat)
        //   setUpdate(true)
        //   // delay(1500)
        // }
        
        
      }
      
      else{
          // setErrorMsg('Terjadi kesalahan')
          setSubmitState(false)
      }
      }}
    >
      {formik => {
        return <Form id={id}>

        
        <div className="flex flex-col divide-y divide-grey-200  w-full pl-10 pr-32">
          <div className="grid grid-cols-2 gap-y-3 py-3">
            {/* <div className='flex items-center justify-between'> */}
              <Body1 className="text-black-400">
                  Nomor Surat
              </Body1>
              <div className="block">
                  <Field
                      className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                      id="invoice_number"
                      name="invoice_number"
                      type="text"
                      
                      placeholder="Masukkan nomor surat"
                      />
                  {/* <ErrorMessage name="invoice_number" component={ValidationMessage}/> */}
              </div>

            {/* </div> */}
              
              {/* <Body2 className="text-black-500">
                  {data.test_type}
              </Body2> */}
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
                    placeholder="Masukkan harga penawaran"
                    />
                {/* <ErrorMessage name="cost_offered" component={ValidationMessage}/> */}
            </div>
          {/* <Body2 className="text-black-500">
              
                  
              <NumberFormat value={data.cost_detail.cost} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 
                  
          </Body2> */}
            <Body1 className="text-black-400">
                PPN 10%
            </Body1>
            <Body2 className="text-black-500  ">
                {/* Rp1.300.000 */}
                <NumberFormat value={CalculatorPPN(formik.values.cost_offered)} displayType={'text'} thousandSeparator=',' prefix={'Rp'} /> 
            </Body2>

          <Body2 className="text-black-400  border-t border-grey-200 pt-2">
                Total
            </Body2>
          <div className="flex">
              <Body3 className="text-black-500 border-t border-grey-200 pt-2">
                  {/* Rp14.300.000 */}
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
