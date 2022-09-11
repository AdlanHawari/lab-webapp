import DatePickerInput from 'components/small/single_menu/DatePickerInput'
import JenisAlatDropDown from 'components/small/single_menu/JenisAlatDropDown'
import JenisUjiDropDown from 'components/small/single_menu/JenisUjiDropdown'
import Body1 from 'components/small/typography/Body1'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { createAlatUkurInitValues } from 'helper/initial-formik-values/CreateAlatUkurInitValues'
import CreateAlatUkurBaruValidationSchema from 'helper/yup/CreateAlatUkurBaruValidationSchema'
import { useAlatUkurFetcher } from 'hooks/fetcher/management-alat-ukur/useAlatUkurFetcher'
import useGetToolTypes from 'hooks/fetcher/management-alat-ukur/useGetToolTypes'
import React from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormCreateAlatBaru({
    id,
    submitState,
    setSubmitState,
    reqSent,
    setreqSent,
}) {
    const {tool_type} = useGetToolTypes("Uji Kesesuaian")
    const {createAlat} = useAlatUkurFetcher()
    
  return (
    <Formik
    initialValues={createAlatUkurInitValues}
    validationSchema={CreateAlatUkurBaruValidationSchema(Yup)}
    onSubmit={(values)=> {
        setSubmitState(true)
        let formData = handleFormData(values)

        async function fetchData(){
            const resp = await createAlat(formData)
            if(resp.header.response_code == 201){
                setreqSent(true)
            }
            else{
                setSubmitState(false)
                alert(`Error response ${resp.header.response_code}`)
            }
        }
        fetchData()
    }}
    >{formik=>{
        return <Form id={id}>
            <div className="block h-screen w-full pl-10 pr-32 space-y-3">
                <div className="grid grid-cols-2 gap-y-3 py-3">
                    <Body1 className="text-black-400">
                        Jenis Uji
                    </Body1>
                    <div className="block">
                        <JenisUjiDropDown
                        setFormikValue={formik.setFieldValue}
                        formikName="test_type"
                        />
                        
                        <ErrorMessage name="test_type" component={ValidationMessage}/>
                    </div>
                    <Body1 className="text-black-400">
                        Alat
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="tool_type"
                            name="tool_type"
                            type="text"
                            placeholder="Isi jenis alat"
                            />
                        <ErrorMessage name="tool_type" component={ValidationMessage}/>
                    
                        {/* {tool_type &&
                        <>
                            <JenisAlatDropDown
                            itemLists={tool_type}
                            formikName="tool_type"
                            setFormikValue={formik.setFieldValue}
                            placeholder="Pilih Jenis Alat"
                            />
                            <ErrorMessage name="tool_type" component={ValidationMessage}/>
                        </>
                        } */}
                    </div>
                    <Body1 className="text-black-400">
                        Merk Alat
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="brand"
                            name="brand"
                            type="text"
                            placeholder="Isi merk alat"
                            />
                        <ErrorMessage name="brand" component={ValidationMessage}/>
                    </div>
                    <Body1 className="text-black-400">
                        No. Seri/ID
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="serial_id"
                            name="serial_id"
                            type="text"
                            placeholder="Isi Nomor Seri"
                            />
                        <ErrorMessage name="serial_id" component={ValidationMessage}/>

                    </div>
                    <Body1 className="text-black-400">
                        Tanggal Kalibrasi
                    </Body1>
                    <div className="block">
                        <DatePickerInput
                        setFormikValue={formik.setFieldValue}
                        idInput="calibration_date"
                        name="calibration_date"
                        onBlur={formik.handleBlur}
                        />
                        <ErrorMessage name="calibration_date" component={ValidationMessage}/>
                    </div>
                    <Body1 className="text-black-400">
                        Interval Kalibrasi (dalam tahun)
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="interval"
                            name="interval"
                            type="text"
                            placeholder="Isi Interval Kalibrasi"
                            />
                        <ErrorMessage name="interval" component={ValidationMessage}/>
                    </div>
                </div>
            </div>
        </Form>
    }}
    </Formik>
  )
}