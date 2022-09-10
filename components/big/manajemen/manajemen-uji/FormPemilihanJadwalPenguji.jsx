import SectionFormPraUji from 'components/big/detail-section/SectionFormPraUji'
import DatePickerInput from 'components/small/single_menu/DatePickerInput'
import PersonnelComboBox from 'components/small/single_menu/PersonnelComboBox'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import Body3 from 'components/small/typography/Body3'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import { ErrorMessage, Form, Formik } from 'formik'
import { formPemilhanJadwalPengujiInitValues } from 'helper/initial-formik-values/FormPemilihanJadwalPengujiInitValues'
import FormPemilihanJadwalPengujiValidationSchema from 'helper/yup/FormPemilihanJadwalPengujiValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import usePersonnelStatus from 'hooks/fetcher/personnel/usePersonnelStatus'
import React, { useEffect, useState } from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormPemilihanJadwalPenguji({
    id,
    data,
    submitState,
    setSubmitState,
    setreqSent

}) {
    const [update, setUpdate] = useState(false)
    const [storeData, setStoreData] = useState(false)
    const {personnel, loading, error} = usePersonnelStatus()
    const {createTestAssignment, confirmTestApp} = useDetailUji()

    useEffect(() => {
        if(storeData && update){
        setreqSent(true)
        }
      }, [storeData, update])
  return (
    <Formik
    initialValues={formPemilhanJadwalPengujiInitValues}
    validationSchema={FormPemilihanJadwalPengujiValidationSchema(Yup)}
    onSubmit={(values)=>{
        async function fetchData(values){
            const finalValues = Object.assign(values, 
                {test_application_id: data.id}
                )
            let formData = handleFormData(finalValues)
            const response = await createTestAssignment(formData)
            const resStat = await confirmTestApp(data.id)
            
            if(resStat.header.response_code==200){
                setUpdate(true)
            }
            if(response.header.response_code==201){
                setStoreData(true)
            }
            if(resStat.header.response_code!=200 && response.header.response_code!=201){
                setSubmitState(false)
            }
        }
        fetchData(values)
    }}
    >{formik => {
        return <Form id={id}>
            <div className="min-h-screen flex flex-col divide-y divide-grey-200  w-full pl-10 pb-10 pr-32">
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
                            {data.test_type==jenisPekerjaan[0]?data.tools[0].tool.brand:data.tools[0].tool_brand}
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
                            setFormikValue={formik.setFieldValue}
                            id = "tester_user_id"
                            name="tester_user_id"
                            type="text"
                            onBlur={formik.handleBlur}
                            placeholder="Pilih Personil"
                            itemLists={personnel.data}
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