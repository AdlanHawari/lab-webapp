import SectionFormPraUji from 'components/big/detail-section/SectionFormPraUji'
import DatePickerInput from 'components/small/single_menu/DatePickerInput'
import PersonnelComboBox from 'components/small/single_menu/PersonnelComboBox'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Form, Formik } from 'formik'
import { formPemilhanJadwalPengujiInitValues } from 'helper/initial-formik-values/FormPemilihanJadwalPengujiInitValues'
import FormPemilihanJadwalPengujiValidationSchema from 'helper/yup/FormPemilihanJadwalPengujiValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import usePersonnelStatus from 'hooks/fetcher/personnel/usePersonnelStatus'
import React, { useEffect, useState } from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormEditJadwalPenguji({
    id,
    data,
    submitState,
    setSubmitState,
    setreqSent

}) {
    // const [update, setUpdate] = useState(false)
    // const [storeData, setStoreData] = useState(false)
    const {personnel, loading, error} = usePersonnelStatus()
    const {updateAssignment} = useDetailUji()
// console.log("init", data)
    useEffect(() => {
        if(personnel){
            console.log("personnel", personnel.data)
        }
    
    }, [personnel])

  return (
    <Formik
    initialValues={formPemilhanJadwalPengujiInitValues}
    // validationSchema={FormPemilihanJadwalPengujiValidationSchema(Yup)}
    onSubmit={(values)=>{
        console.log(values)
        // async function fetchData(values){
        //     const finalValues = Object.assign(values, 
        //         {test_application_id: data.id}
        //         )
        //     console.log(finalValues)
        //     let formData = handleFormData(finalValues)
        //     const response = await createTestAssignment(formData)
        //     console.log("respons", response)
        //     if(response.header.response_code==200){
        //         setStoreData(true)
        //     }
        // }

        // fetchData(values)
    }}
    >{formik => {
        return <Form id={id}>
            <div className="h-screen flex flex-col divide-y divide-grey-200  w-full pl-10 pr-32">
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
                        Jenis Uji
                    </Body1>
                    <Body2 className="text-black-500">
                        {data.test_type}
                    </Body2>
                </div>
                <div className="block py-3 space-y-3">
                    <div className="grid grid-cols-2 gap-y-3">
                        <Body1 className="text-black-400">
                            Jenis Alat
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.tools[0].tool.type}
                        </Body2>
                        <Body1 className="text-black-400">
                            Merk Alat
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.tools[0].tool.brand}
                        </Body2>
                        <Body1 className="text-black-400">
                            Tipe Alat
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.tools[0].tool_type}
                        </Body2>
                    </div>
                    <SectionFormPraUji data={data}/>
                </div>

                <div className="block py-3">
                    <Body3 className="text-black-400">
                        Jadwal &amp; Penguji
                    </Body3>
                    <div className="grid grid-cols-2 gap-y-3 py-3">
                        <Body1 className="text-black-400">
                            Jadwal Pengujian
                        </Body1>
                        <div className="block">
                            <DatePickerInput
                            setFormikValue={formik.setFieldValue}
                            id="test_date"
                            name="test_date"
                            onBlur={formik.handleBlur}
                            />
                            
                            <ErrorMessage name="test_date" component={ValidationMessage}/>
                        </div>

                        <Body1 className="text-black-400">
                            Nama Penguji
                        </Body1>
                        <div className="block">
                           
                        {personnel &&
                        <>
                            <PersonnelComboBox
                            // selected={formik.values.tester_user_id}
                            setFormikValue={formik.setFieldValue}
                            id = "tester_user_id"
                            name="tester_user_id"
                            type="text"
                            onBlur={formik.handleBlur}
                            placeholder="Pilih Personil"
                            itemLists={personnel.data}
                            initValue={data.assignment_detail.tester}
                            />
                            <ErrorMessage name="tester_user_id" component={ValidationMessage}/>
                        </>

                        }
                        </div>
                    </div>


                </div>

            </div>

        </Form>
    }}
    </Formik>
  )
}
