import InputFileUpload from 'components/small/single_menu/InputFileUpload'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { dokumenPenugasanInitValues } from 'helper/initial-formik-values/DokumenPenugasanInitValues'
import DokumenPenugasanValidationSchema from 'helper/yup/DokumenPenugasanValidationSchema'
import React from 'react'
import ObjectReducer from 'utils/ObjectReducer'
import * as Yup from 'yup'

export default function FormDokumenPenugasan({
    id,
    data
}) {
  return (
    <Formik
    initialValues={dokumenPenugasanInitValues}
    validationSchema={DokumenPenugasanValidationSchema(Yup)}
    onSubmit={(values)=>{

        const alatKeluarValues = {
            assignment_no: data.assignment_detail.assignment_no,
            tools_brought: values.tools_brought
        }

        const uploadValues = ObjectReducer(values,tools_brought)
        console.log("form1", uploadValues)
        console.log("form2", alatKeluarValues)
    }
    }>
        {formik => {
            return <Form id={id}>

                <div className="flex flex-col divide-y divide-grey-200  w-full pl-10 pr-32">
                    <div className="block py-3">
                        <Body3 className="text-black-400">
                            Nomor Surat Tugas
                        </Body3>
                        <div className="grid grid-cols-2 gap-y-3 py-3">
                            <Body1 className="text-black-400">
                                Nomor Surat Tugas
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.assignment_detail.assignment_no}
                            </Body2>
                        </div>
                        <Body3 className="pt-3 text-black-400">
                            Jadwal &amp; Penguji
                        </Body3>
                        <div className="grid grid-cols-2 gap-y-3 py-3">
                            <Body1 className="text-black-400">
                                Akomodasi
                            </Body1>
                            <div className="block">
                                <InputFileUpload
                                 id="accommodation"
                                 name="accommodation"
                                 formikValue={formik.values.accommodation}
                                 setFormikValue={formik.setFieldValue}
                                 accept="application/pdf"
                                 placeholder="Upload Document"
                                />
                                <ErrorMessage name="accommodation" component={ValidationMessage}/>
                                
                            </div>
                            <Body1 className="text-black-400">
                                Transportasi
                            </Body1>
                            <div className="block">
                                <InputFileUpload
                                 id="transportation"
                                 name="transportation"
                                 formikValue={formik.values.transportation}
                                 setFormikValue={formik.setFieldValue}
                                 accept="application/pdf"
                                 placeholder="Upload Document"
                                />
                                <ErrorMessage name="transportation" component={ValidationMessage}/>

                            </div>
                            <Body1 className="text-black-400">
                                Dokumen Uji
                            </Body1>
                            <div className="block">
                                <InputFileUpload
                                    id="test_documentation"
                                    name="test_documentation"
                                    formikValue={formik.values.test_documentation}
                                    setFormikValue={formik.setFieldValue}
                                    accept="application/pdf"
                                    placeholder="Upload Document"
                                />
                                <ErrorMessage name="test_documentation" component={ValidationMessage}/>

                            </div>
                        </div>
                    </div>
                    <div className="block py-3">
                        <Body3 className="text-black-400">
                            Lapor Alat Keluar
                        </Body3>
                        <div className="grid grid-cols-2 gap-y-3 py-3">
                            <Body1 className="text-black-400">
                                Alat Keluar
                            </Body1>
                            <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="tools_brought"
                                name="tools_brought"
                                type="text"
                                placeholder="Tulis alat yang dibawa"
                                />
                            <ErrorMessage name="tools_brought" component={ValidationMessage}/>

                            </div>
                            
                        </div>

                    </div>
                </div>
            </Form>

        }}

    </Formik>
  )
}
