import { Formik } from 'formik'
import React from 'react'

export default function FormEditUser({
    id,
    data,
    institutionList,
    submitState,
    setSubmitState,
    setreqSent
}) {
  return (
    <Formik
    initialValues={{
        name: data.name,
        role_id: "",
        position:"",
        email: "",
        institution_id: "",
        phone: "",
        password: "",
        password_confirmation: "",
    }}
    onSubmit={(values)=> {
        console.log(values)
    }}
    >

    </Formik>
  )
}
