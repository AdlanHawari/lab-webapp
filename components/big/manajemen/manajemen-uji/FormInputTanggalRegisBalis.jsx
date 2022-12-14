import DatePickerInput from 'components/small/single_menu/DatePickerInput'
import Body3 from 'components/small/typography/Body3'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Form, Formik } from 'formik'
import { inputTanggalRegisBalisInitValues } from 'helper/initial-formik-values/InputTanggalRegisBalisInitValues'
import InputTanggalRegisBalisValidationSchema from 'helper/yup/InputTanggalRegisBalisValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormInputTanggalRegisBalis({
    id,
    data,
    submitState,
    setSubmitState,
    reqSent,
    setreqSent,
}) {
    const {updateTestApp, confirmTestApp} = useDetailUji()

  return (
    <Formik
    initialValues={inputTanggalRegisBalisInitValues}
    validationSchema={InputTanggalRegisBalisValidationSchema(Yup)}
    onSubmit={(values)=> {
        setSubmitState(true)
        let formData = handleFormData(values)

        async function fetchData(){
            const response = await updateTestApp(formData, data.id)
            if(response.header.response_code == 200){
                setreqSent(true)
            }
        }
        fetchData()
    }}
    >{formik => {
        return <Form id={id}>
            <div className="h-screen flex flex-col  w-full pl-10 pr-32">
                <Body3 className="text-black-400">
                    Isi dengan <strong>Tanggal Registrasi Balis</strong>
                </Body3>
                <div className="w-full">
                <DatePickerInput
                setFormikValue={formik.setFieldValue}
                idInput="balis_date"
                name="balis_date"
                onBlur={formik.handleBlur}
                />
                </div>
                <ErrorMessage name="balis_date" component={ValidationMessage}/>
            </div>
        </Form>
    }}
    </Formik>
  )
}