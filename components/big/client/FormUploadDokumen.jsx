
import { UploadIcon } from '@heroicons/react/outline'
import Body1 from 'components/small/typography/Body1'
import Title3Med from 'components/small/typography/Title3Med'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import { ErrorMessage, Form, Formik } from 'formik'
import { uploadDokumenClientInitValues } from 'helper/initial-formik-values/UploadDokumenClientInitValues'
import UploadDokumenClientValidationSchema from 'helper/yup/UploadDokumenClientValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React, { useEffect, useRef, useState } from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormUploadDokumen({
  data, 
  id,
  setSubmitState,
  setReqSent
}) {
  const npwpInputRef = useRef()
  const invoiceInputRef = useRef()
  const {confirmTestApp ,uploadDokumenPraUji} = useDetailUji()
  const [uploaded, setUploaded] = useState(false)

  useEffect(async () => {
    if(uploaded){
      if(data.test_type == jenisPekerjaan[1] || data.permit_holder){
        const resStat = await confirmTestApp(data.id)
        if(resStat.header.response_code==200){
          setSubmitState(false)
          setReqSent(true)
        }
      }
      else{
        setSubmitState(false)
        setReqSent(true)
      }
    }
  }, [uploaded])

  return (
    <Formik
    initialValues={uploadDokumenClientInitValues}
    validationSchema={UploadDokumenClientValidationSchema(Yup)}
    onSubmit={async (values)=>{
        setSubmitState(true)
        let formData = handleFormData(values)
        const response = await uploadDokumenPraUji(formData, data.id)
        if(response.header.response_code==200){
          setUploaded(true)
      }
    }}
    >
      {formik => {
        return <Form id={id}>
          <div className="grid grid-cols-2 gap-y-3 py-3 pl-10 pr-32">
            <Body1 className="text-black-400">
              NPWP
            </Body1>
            <div className="block">
              <input
                ref={npwpInputRef}
                className="hidden"
                id='npwp'
                name='npwp'
                type="file"
                accept="application/pdf"
                onChange={(event)=> {
                  const file = event.target.files[0]
                  if(file){
                    formik.setFieldValue("npwp", file)
                  }
                }}
                />
                <div className="w-full flex justify-between form-input px-2.5 py-1 rounded-xl text-xs  border-solid border-2 border-grey-300">
                  <Title3Med className={formik.values.npwp? "text-black-400" : "text-grey-400"}>
                    {formik.values.npwp?
                      formik.values.npwp.name
                      :
                      "Upload NPWP"
                    }
                  </Title3Med>
                  <button 
                  type='button'
                  onClick={(event)=> {
                    event.preventDefault();
                    npwpInputRef.current.click() 
                  }}
                  >
                    <UploadIcon className="w-4 text-grey-500" aria-hidden="true"/>
                  </button>
                </div>
                <ErrorMessage name="npwp" component={ValidationMessage}/>
            </div>
            <Body1 className="text-black-400">
              Bukti Pembayaran
            </Body1>
            <div className="block">
              <input
              ref={invoiceInputRef}
              className="hidden"
              id='invoice'
              name='invoice'
              type="file"
              accept="application/pdf"
              onChange={(event)=> {
                const file = event.target.files[0]
                if(file){
                  formik.setFieldValue("invoice", file)
                }
              }}
              />
              <div className="w-full flex justify-between form-input px-2.5 py-1 rounded-xl text-xs  border-solid border-2 border-grey-300">
              <Title3Med className={formik.values.invoice? "text-black-400" : "text-grey-400"}>
                {formik.values.invoice?
                  formik.values.invoice.name
                  :
                  "Upload Bukti Pembayaran"
                }
              </Title3Med>
                <button 
                type='button'
                onClick={(event)=> {
                  event.preventDefault();
                  invoiceInputRef.current.click() 
                }}
                >
                  <UploadIcon className="w-4 text-grey-500" aria-hidden="true"/>
                </button>
              </div>
                <ErrorMessage name="invoice" component={ValidationMessage}/>
            </div>
          </div>
        </Form>
      }}
    </Formik>
  )
}