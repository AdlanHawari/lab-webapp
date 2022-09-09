import InputFileUpload from 'components/small/single_menu/InputFileUpload'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { bapInitValues } from 'helper/initial-formik-values/BapInitValues'
import BapValidationSchema from 'helper/yup/BapValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React, { useEffect, useState } from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormBeritaAcaraPekerjaan({
    id,
    data,
    setSubmitState,
    setreqSent,
}) {

    const {createBAPReport, confirmTestApp} = useDetailUji()
    const [storeBAP, setStoreBAP] = useState(false)
    const [confirm, setConfirm] = useState(false)

    useEffect(() => {
        if(storeBAP && confirm){
            setreqSent(true)
        }
    }, [storeBAP, confirm])

  return (
    <Formik
    initialValues={bapInitValues}
    validationSchema={BapValidationSchema(Yup)}
    onSubmit={(values)=> {
        setSubmitState(true)
        let formData = handleFormData(values)

        async function fetchData(){
            const response = await createBAPReport(formData, data.id)
            const respConf = await confirmTestApp( data.id)
            if(response.header.response_code == 201){
                setStoreBAP(true)
            }
            if(respConf.header.response_code == 200){
                setConfirm(true)
            }
        }
        fetchData()
    }}
    >
        {formik => {
            return <Form id={id}>
                <div className="flex flex-col divide-y divide-grey-200  w-full pl-10 pr-32">
                    <div className="grid grid-cols-2 gap-y-3 py-3">
                        <Body1 className="text-black-400">
                            No. Surat Bap
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.test_report.bap_no ? 
                                data.test_report.bap_no
                            :
                            "-"
                            }
                        </Body2>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 py-3">
                        <Body1 className="text-black-400">
                            Nama Penguji
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.assignment_detail.tester.name}
                        </Body2>
                        <Body1 className="text-black-400">
                            Jabatan
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.assignment_detail.tester.position}
                        </Body2>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 py-3">
                        <Body1 className="text-black-400">
                            Jenis Pesawat/Ruang Lingkup
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.tools[0].tool.type}
                        </Body2>
                        <Body1 className="text-black-400">
                            Merk Alat
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.test_type==jenisPekerjaan[0]?data.tools[0].tool.brand:data.tools[0].tool_brand}
                        </Body2>
                        <Body1 className="text-black-400">
                            Tipe Alat
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.tools[0].tool_type}
                        </Body2>
                        <Body1 className="text-black-400">
                            Nomor Seri Generator
                        </Body1>
                        <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="generator_serial_number"
                                name="generator_serial_number"
                                type="text"
                                placeholder="Isi Input"
                                />
                            <ErrorMessage name="generator_serial_number" component={ValidationMessage}/>
                        </div>
                        <Body1 className="text-black-400">
                            Nomor Seri Wadah Tabung
                        </Body1>
                        <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="tube_container_serial_number"
                                name="tube_container_serial_number"
                                type="text"
                                placeholder="Isi Input"
                                />
                            <ErrorMessage name="tube_container_serial_number" component={ValidationMessage}/>
                        </div>
                        <Body1 className="text-black-400">
                            Nomor Seri Wadah Insersi
                        </Body1>
                        <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="insertion_tube_serial_number"
                                name="insertion_tube_serial_number"
                                type="text"
                                placeholder="Isi Input"
                                />
                            <ErrorMessage name="insertion_tube_serial_number" component={ValidationMessage}/>
                        </div>
                    </div>
                    <div className="block py-3 space-y-3">
                        <div className="grid grid-cols-2 gap-y-3 py-3">
                            <Body1 className="text-black-400">
                                Nama Instansi
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.user.institution.name}
                            </Body2>
                            <Body1 className="text-black-400">
                                Alamat Instansi
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.user.institution.address}
                            </Body2>
                            <Body1 className="text-black-400">
                                No. Telp Fax
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.user.institution.phone_number}
                            </Body2>
                        </div>
                        <div className="block">
                            <Body1 className="text-black-400">
                                Keterangan
                            </Body1>
                            <Field as="textarea"
                                className="h-16 placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="remarks"
                                name="remarks"
                                type="text"
                                placeholder="Isi input"
                                />
                            <ErrorMessage name="remarks" component={ValidationMessage}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 py-3">
                        <Body1 className="text-black-400">
                            Upload Berita Acara Fisik
                        </Body1>
                        <div className="block">
                            <InputFileUpload
                                id="bap"
                                name="bap"
                                formikValue={formik.values.bap}
                                setFormikValue={formik.setFieldValue}
                                accept="application/pdf"
                                placeholder="Upload Document"
                            />
                            <ErrorMessage name="bap" component={ValidationMessage}/>
                        </div>
                    </div>
                </div>
            </Form>
        }}
    </Formik>
  )
}