import Body3 from 'components/small/typography/Body3'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { tolakLaporanUjiInitValues } from 'helper/initial-formik-values/TolakLaporanUjiInitValues'
import TolakLaporanUjiValidationSchema from 'helper/yup/TolakLaporanUjiValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormTolakLaporanUji({
    id,
    fileName,
    data,
    setSubmitState,
    setreqSent
}) {

    const {tolakLaporanUji}= useDetailUji()

  return (
    <Formik
    initialValues={tolakLaporanUjiInitValues}
    validationSchema={TolakLaporanUjiValidationSchema(Yup)}
    onSubmit={(values)=> {
        setSubmitState(true)
        // console.log(values)
        // console.log("id", data.id)
        let formData = handleFormData(values)

        async function fetchData(){
            const responseReject = await tolakLaporanUji(formData, data.id)

            console.log("responseReject", responseReject)
            if(responseReject.header.response_code == 201){
                setreqSent(true)
            }
        }
        fetchData()
    }}
    >{formik=> {    
        return <Form id={id}>
            <div className="block divide-y divide-grey-200 pl-10 pr-32 space-y-3">
                <div className="w-3/4">
                    <Body3 className="text-black-500">
                        Saya menyetujui dokumen <strong className='text-primary'>{fileName}</strong> dari hasil uji kalibrasi
                    </Body3>
                </div>
                <div className="block py-3">
                    <Field as="textarea"
                    className="form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300  h-36 placeholder:body1 placeholder:text-grey-500"
                    
                    name="decline_remarks"
                    type="text"
                    placeholder="Isi dengan alasan penolakan dokumen"
                    />
                    <ErrorMessage name="decline_remarks" component={ValidationMessage}/>
                </div>
            </div>

        </Form>
    }
    }

    </Formik>
  )
}
