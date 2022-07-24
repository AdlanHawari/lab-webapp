import { Form, Formik } from 'formik'
import { buatPenawaranUjiInitValues } from 'helper/initial-formik-values/BuatPenawaranUjiInitValues'
import BuatPenawaranUjiValidationSchema from 'helper/yup/BuatPenawaranUjiValidationSchema'
import * as Yup from 'yup'
import React from 'react'

export default function FormBuatPenawaranUji({
  id
}) {
  return (
    <Formik
    initialValues={buatPenawaranUjiInitValues}
    validationSchema={BuatPenawaranUjiValidationSchema(Yup)}
    onSubmit={(values)=>{
      console.log(values)
    }}
    >
      <Form id={id}>

      </Form>
    </Formik>
  )
}
