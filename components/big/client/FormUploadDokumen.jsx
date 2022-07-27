import Body1 from 'components/small/typography/Body1'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { uploadDokumenClientInitValues } from 'helper/initial-formik-values/UploadDokumenClientInitValues'
import UploadDokumenClientValidationSchema from 'helper/yup/UploadDokumenClientValidationSchema'
import React from 'react'
import * as Yup from 'yup'

export default function FormUploadDokumen() {
  return (
    <Formik
    initialValues={uploadDokumenClientInitValues}
    validationSchema={UploadDokumenClientValidationSchema(Yup)}
    onSubmit={(values)=>{
        console.log(values)
    }}
    >
        <Form>
        
          <div className="grid grid-cols-2 gap-y-3 py-3 pl-10 pr-32">
            <Body1>
              NPWP
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="npwp"
                    name="npwp"
                    type="text"
                    
                    placeholder="NPWP"
                    />
                <ErrorMessage name="npwp" component={ValidationMessage}/>
            </div>
            <Body1>
              Bukti Pembayaran
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="invoice"
                    name="invoice"
                    type="text"
                    
                    placeholder="Bukti pembayaran"
                    />
                <ErrorMessage name="invoice" component={ValidationMessage}/>
            </div>
          </div>
            
        </Form>

    </Formik>
    
  )
}
