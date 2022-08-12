import { PlusSmIcon } from '@heroicons/react/outline'
import Button from 'components/small/button_fixed/Button'
import InputFileUpload from 'components/small/single_menu/InputFileUpload'
import Body1 from 'components/small/typography/Body1'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Form, Formik } from 'formik'
import { laporanHasilUjiInitValues } from 'helper/initial-formik-values/LaporanHasilUjiInitValues'
import LaporanHasilUjiValidationSchema from 'helper/yup/LaporanHasilUjiValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React, { useEffect, useState } from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormLaporanHasilUji({
    id,
    data,
    submitState,
    setSubmitState,
    reqSent,
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
        console.log(values)
        let formData = handleFormData(values)

        async function fetchData(){
            const response = await uploadLaporanHasilUji(formData, data.id)
            const respConf = await confirmTestApp( data.id)
            console.log("upload",response)
            console.log("conf",respConf)
            if(response.header.response_code == 200){
                setStoreFile(true)
            }
            if(respConf.header.response_code == 200){
                setConfirm(true)
            }

        }

        fetchData()
    }}
    >{formik => {
        return <Form id={id}>
            <div className="flex flex-col divide-y divide-grey-200  w-full pl-10 pr-32">
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
                    <Body1 className="text-black-400">
                        Dokumen Pendukung 1
                    </Body1>
                    <div className="block">
                        <InputFileUpload
                            id="additional_doc"   
                            name="additional_doc"
                            formikValue={formik.values.additional_doc}
                            setFormikValue={formik.setFieldValue}
                            accept="application/pdf"
                            placeholder="Upload Document"
                        />
                        <ErrorMessage name="additional_doc" component={ValidationMessage}/>

                    </div>
                </div>
                <div className="w-full flex justify-end py-3">
                    <Button 
                    className="w-auto px-4 py-2 flex items-center space-x-2" 
                    buttonStyle="primary_default" 
                    type="button"
                    >
                        <PlusSmIcon className="w-6" aria-hidden="true"/>
                        Tambah Dokumen
                    </Button>

                </div>
            </div>
        </Form>
    }}

    </Formik>
  )
}
