import Body3 from 'components/small/typography/Body3'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { batalPermohonanUjiInitValues } from 'helper/initial-formik-values/BatalPermohonanUjiInitValues'
import BatalPermohonanUjiValidationSchema from 'helper/yup/BatalPermohonanUjiValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormCancelUji({
    id,
    data,
    submitState,
    setSubmitState,
    setreqSent
}) {

    const {cancelUji} = useDetailUji()
  return (
    <Formik
    initialValues={batalPermohonanUjiInitValues}
    validationSchema={BatalPermohonanUjiValidationSchema(Yup)}
    onSubmit={(values)=> {
        setSubmitState(true)
        console.log("delete", values)
        let formData = handleFormData(values)
        console.log(data.id)
        async function fetchData(){
            const responseCancel = await cancelUji(formData, data.id)

            console.log("responseCancel", responseCancel)
            if(responseCancel.header.response_code == 200){
                setreqSent(true)
            }
            else{
                setSubmitState(false)
            }
        }
        fetchData()
    }}
    >{formik => {
        return <Form id={id}>
            <div className="block divide-y divide-grey-200 pl-10 pr-32 space-y-3">
                <Body3>
                    Permohonan Uji dibatalkan dikarenakan:
                </Body3>
                <div className="block py-3">
                    <Field as="textarea"
                    className="form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300  h-36 placeholder:body1 placeholder:text-grey-500"
                    
                    name="remarks"
                    type="text"
                    placeholder="Isi dengan alasan pembatalan uji"
                    />
                    <ErrorMessage name="remarks" component={ValidationMessage}/>
                </div>
            </div>
            
        </Form>
    }}

    </Formik>
  )
}
