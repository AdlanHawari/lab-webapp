import { PlusSmIcon } from '@heroicons/react/outline'
import Button from 'components/small/button_fixed/Button'
import InputFileUpload from 'components/small/single_menu/InputFileUpload'
import Body1 from 'components/small/typography/Body1'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, FieldArray, Form, Formik } from 'formik'
import { laporanHasilUjiInitValues } from 'helper/initial-formik-values/LaporanHasilUjiInitValues'
import LaporanHasilUjiValidationSchema from 'helper/yup/LaporanHasilUjiValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React, { useEffect, useState } from 'react'
import handleFormData from 'utils/HandleFormData'
import ObjectReducer from 'utils/ObjectReducer'
import RearrangeFileObject from 'utils/RearrangeFileObject'
import * as Yup from 'yup'

export default function FormLaporanHasilUji({
    id,
    data,
    setSubmitState,
    setreqSent,
}) {

    const { uploadLaporanHasilUji, confirmTestApp} = useDetailUji()
    const [storeFile, setStoreFile] = useState(false)
    const [confirm, setConfirm] = useState(false)

    useEffect(() => {
        if(storeFile && confirm){
            setreqSent(true)
        }
    }, [storeFile, confirm])

  return (
    <Formik
    initialValues={laporanHasilUjiInitValues}
    validationSchema={LaporanHasilUjiValidationSchema(Yup)}
    onSubmit={(values)=> {
        setSubmitState(true)
        const rearrangedFiles = RearrangeFileObject(values.additional_doc, "additional_doc_")
        const mandatoryValues = ObjectReducer(values, "additional_doc")
        const uploadValues = Object.assign(mandatoryValues, rearrangedFiles)
        let formData = handleFormData(uploadValues)
        async function fetchData(){
            const response = await uploadLaporanHasilUji(formData, data.id)
            const respConf = await confirmTestApp( data.id)
            if(response.header.response_code == 200){
                setStoreFile(true)
            }
            if(response.header.response_code != 200){
                alert(`Error upload: ${response.header.response_code}`)
            }
            if(respConf.header.response_code == 200){
                setConfirm(true)
            }
            if(respConf.header.response_code != 200){
                alert(`Error confirm: ${respConf.header.response_code}`)
            }
        }
        fetchData()
    }}
    >{formik => {
        return <Form id={id}>
            <div className="flex flex-col   w-full pl-10 pr-32">
                <div className="grid grid-cols-2 gap-y-3 py-3">
                    <Body1 className="text-black-400">
                        Laporan Hasil Uji
                    </Body1>
                    <div className="block">
                        <InputFileUpload
                            id="test_report"
                            name="test_report"
                            formikValue={formik.values.test_report}
                            setFormikValue={formik.setFieldValue}
                            accept="application/pdf"
                            placeholder="Upload Document"
                        />
                        <ErrorMessage name="test_report" component={ValidationMessage}/>
                    </div>
                </div>
                <FieldArray name="additional_doc">
                    {({ insert, remove, push }) => (
                        <div className="space-y-3 divide-y divide-grey-200">
                            <div className="space-y-3">
                                {formik.values.additional_doc.map((item,index)=> (
                                    <div key={index} className="grid grid-cols-2">
                                        {index<1 ?
                                            <Body1 className="text-black-400">
                                                Dokumen Uji
                                            </Body1>
                                            :
                                            <Body1 className="text-black-400">
                                            </Body1>
                                        }
                                        <InputFileUpload
                                            id={`additional_doc.${index}`}
                                            name={`additional_doc.${index}`}
                                            formikValue={formik.values.additional_doc[index]}
                                            setFormikValue={formik.setFieldValue}
                                            accept="application/pdf"
                                            placeholder="Upload Document"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="w-full flex justify-end py-3">
                                <Button 
                                className="w-auto px-4 py-2 flex items-center space-x-2" 
                                buttonStyle={formik.values.additional_doc.length<10?"primary_default": "primary_disabled"}
                                type="button"
                                onClick={()=> {
                                    formik.values.additional_doc.length<10&&
                                    push({})
                                }}
                                >
                                    <PlusSmIcon className="w-6" aria-hidden="true"/>
                                    Tambah Dokumen
                                </Button>
                            </div>
                        </div>
                    )}
                </FieldArray>
            </div>
        </Form>
    }}
    </Formik>
  )
}