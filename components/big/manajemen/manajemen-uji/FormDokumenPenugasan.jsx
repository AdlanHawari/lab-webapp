import { Formik } from 'formik'
import { dokumenPenugasanInitValues } from 'helper/initial-formik-values/DokumenPenugasanInitValues'
import DokumenPenugasanValidationSchema from 'helper/yup/DokumenPenugasanValidationSchema'
import React from 'react'
import * as Yup from 'yup'

export default function FormDokumenPenugasan() {
  return (
    <Formik
    initialValues={dokumenPenugasanInitValues}
    validationSchema={DokumenPenugasanValidationSchema(Yup)}
    onSubmit={(values)=>
        console.log(values)
    }>

    </Formik>
  )
}
