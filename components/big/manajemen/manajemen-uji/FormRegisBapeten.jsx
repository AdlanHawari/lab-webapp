import Body3 from 'components/small/typography/Body3'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { inputNoRegisBalisInitValues } from 'helper/initial-formik-values/InputNoRegisBalisInitValues'
import NoRegisBalisValidationSchema from 'helper/yup/NoRegisBalisValidationSchema'
import React from 'react'
import * as Yup from 'yup'

export default function FormRegisBapeten({
    id,
    data,
    submitState,
    setSubmitState,
    reqSent,
    setreqSent,
}) {
  return (
    <Formik
    initialValues={inputNoRegisBalisInitValues}
    validationSchema={NoRegisBalisValidationSchema(Yup)}
    onSubmit={(values)=> {
        console.log(values)
    }}
    >
        <Form id={id}>
            <div className="flex flex-col space-y-3  w-full pl-10 pr-32">
                <Body3 className="text-black-400">
                    Isi dengan <strong>Nomor Registrasi Bapeten</strong>
                </Body3>
                <div className="block">
                  <Field
                      className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                      id="bapeten_no"
                      name="bapeten_no"
                      type="text"
                      
                      placeholder="No. Registrasi Balis"
                      />
                  <ErrorMessage name="bapeten_no" component={ValidationMessage}/>
              </div>

            </div>

        </Form>

    </Formik>
  )
}
