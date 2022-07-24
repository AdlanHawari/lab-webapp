import { Form, Formik } from 'formik'
import { uploadDokumenClientInitValues } from 'helper/initial-formik-values/UploadDokumenClientInitValues'
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
            
        </Form>

    </Formik>
    
  )
}
