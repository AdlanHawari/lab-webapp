import { PlusSmIcon } from '@heroicons/react/solid'
import Button from 'components/small/button_fixed/Button'
import InputFileUpload from 'components/small/single_menu/InputFileUpload'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import { dokumenPenugasanInitValues } from 'helper/initial-formik-values/DokumenPenugasanInitValues'
import DokumenPenugasanValidationSchema from 'helper/yup/DokumenPenugasanValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React, { useEffect, useState } from 'react'
import handleFormData from 'utils/HandleFormData'
import ObjectReducer from 'utils/ObjectReducer'
import RearrangeFileObject from 'utils/RearrangeFileObject'
import * as Yup from 'yup'

export default function FormDokumenPenugasan({
    id,
    data,
    submitState,
    setSubmitState,
    reqSent,
    setreqSent,
}) {

    const { uploadDokumenPenugasan, updateAssignment } = useDetailUji()

    const [upload, setUpload] = useState(false)
    const [updateAlat, setUpdateAlat] = useState(false)

    useEffect(() => {
    
        if(upload && updateAlat){
            setreqSent(true)
        }
    
    }, [upload, updateAlat])
    

  return (
    <Formik
    initialValues={dokumenPenugasanInitValues}
    // validationSchema={DokumenPenugasanValidationSchema(Yup)}
    onSubmit={(values)=>{
        setSubmitState(true)
        // console.log(values)

        // function ReArrangeFileObject(filesValues, varName){
        //     var assignDocs = {}
    
        //     filesValues.map((item,index)=>{
        //         const no = index+1
        //         const key = varName+no
        //         assignDocs[key] = item
        //     })

        //     return assignDocs
        // }

        const alatKeluarValues = {
            assignment_no: data.assignment_detail.assignment_no,
            tools_brought: values.tools_brought
        }

        const reducedValues = ObjectReducer(values,"tools_brought")
        const mandatoryValues = ObjectReducer(reducedValues, "assignment_doc")
        

        const rearrangedFiles = RearrangeFileObject(reducedValues.assignment_doc, "assignment_doc_")
        // console.log("files", filesValues)
        const uploadValues = Object.assign(mandatoryValues, rearrangedFiles)

        

        // console.log("rearrangedFiles", rearrangedFiles)
        
        console.log("form1", uploadValues)
        console.log("assId", data.assignment_id)
        console.log("form2", alatKeluarValues)

        let uploadFormData = handleFormData(uploadValues)
        let alatKeluarFormData = handleFormData(alatKeluarValues)

        async function fetchData(){
            const responseUpload = await uploadDokumenPenugasan(uploadFormData, data.id)
            const responseAlatKeluar = await updateAssignment(alatKeluarFormData, data.assignment_id)

            console.log("responseUpload", responseUpload)
            console.log("responseAlatKeluar", responseAlatKeluar)

            if(responseUpload.header.response_code == 200){
                setUpload(true)
            }

            if(responseAlatKeluar.header.response_code == 200){
                setUpdateAlat(true)
            }
        } 

        fetchData()

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
                            {/* <Body1 className="text-black-400">
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

                            </div> */}
                            

                        </div>

                        <FieldArray name="assignment_doc">
                            {({ insert, remove, push }) => (
                                <div className="space-y-3 ">
                                    {formik.values.assignment_doc.map((item,index)=> (
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
                                                id={`assignment_doc.${index}`}
                                                name={`assignment_doc.${index}`}
                                                formikValue={formik.values.assignment_doc[index]}
                                                setFormikValue={formik.setFieldValue}
                                                accept="application/pdf"
                                                placeholder="Upload Document"
                                            />
                                        </div>
                                    ))}

                                    <div className="w-full flex justify-end py-3">
                                        <Button 
                                        className="w-auto px-4 py-2 flex items-center space-x-2" 
                                        buttonStyle={formik.values.assignment_doc.length<10?"primary_default": "primary_disabled"}
                                        type="button"
                                        onClick={()=> {
                                            formik.values.assignment_doc.length<10&&
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


                        {/* <div className="w-full flex justify-end py-3">
                            <Button 
                            className="w-auto px-4 py-2 flex items-center space-x-2" 
                            buttonStyle="primary_default" 
                            type="button"
                            >
                                <PlusSmIcon className="w-6" aria-hidden="true"/>
                                Tambah Dokumen
                            </Button>

                        </div> */}
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
