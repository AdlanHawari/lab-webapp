import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import { formPraUjiInitValues } from 'helper/initial-formik-values/FormPraUjiInitValues'
import FormPraUjiValidationSchema from 'helper/yup/FormPraUjiValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import React, { useEffect, useState } from 'react'
import DateFormatter from 'utils/DateFormatter'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormPraUji({
    data, 
    id,
    setSubmitState,
    setReqSent
}) {
    const {readable} = DateFormatter()
    const [inputForm, setInputForm] = useState(false)
    const {confirmTestApp, inputFormPraUji} = useDetailUji()

    function rearrangeObject(obj, fullData){
        let result = {
            permit_holder: obj.permit_holder,
            ppr_no: obj.ppr_no,
            tool_id: "",
            manufactured: "",
            control_panel_serial_no: "",
            tube_container_serial_no: "",
            q1: obj.q1,
            q2: obj.q2,
            q3: obj.q3,
            q4: obj.q4,
            q5: obj.q5,
            q6: obj.q6,
            q7: obj.q7,
            q8: obj.q8
        }
        obj.tool_info.map((tool, index)=>{
            if(result.manufactured.length>0){
                result.manufactured = result.manufactured + ","
            }
            result.manufactured = result.manufactured.concat(tool.manufactured)
            
            if(result.control_panel_serial_no.length>0){
                result.control_panel_serial_no = result.control_panel_serial_no + ","
            }
            result.control_panel_serial_no = result.control_panel_serial_no.concat(tool.control_panel_serial_no)
            
            if(result.tube_container_serial_no.length>0){
                result.tube_container_serial_no = result.tube_container_serial_no + ","
            }
            result.tube_container_serial_no = result.tube_container_serial_no.concat(tool.tube_container_serial_no)

            if(result.tool_id.length>0){
                result.tool_id = result.tool_id + ","
            }
            result.tool_id = result.tool_id.concat(fullData.tools[index].id)
        })
        return result
    }

    useEffect(async () => {
        if(inputForm){
            if(data.documents.length>0 && data.documents[0].type == "NPWP" || data.documents.length>0 && data.documents[0].type == "INVOICE"){
                const resStat = await confirmTestApp(data.id)
                if(resStat.header.response_code==200){
                    setSubmitState(false)
                    setReqSent(true)
                  }
            }
            else{
                setSubmitState(false)
                setReqSent(true)
              }
        }
        
    }, [inputForm])

  return (
    <Formik
        initialValues={formPraUjiInitValues}
        validationSchema={FormPraUjiValidationSchema(Yup)}
        onSubmit={ (values) => {
            setSubmitState(true)
            const rearrangedValues = rearrangeObject(values, data)
            let formData = handleFormData(rearrangedValues)

            async function fetchData(){
                const response = await inputFormPraUji(formData, data.id)
                if(response.header.response_code==200){
                    setInputForm(true)
                }
            }
            fetchData()
        }
        }
    >
        {formik => {
            return <Form id={id}>
                 <div className='block w-full pl-10 pr-32 space-y-3 divide-y divide-grey-200'>
                    <div className="grid grid-cols-2 gap-y-3 py-3">
                        <Body1 className="text-black-400">
                            Nomor Surat
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.cost_detail.invoice_no}
                        </Body2>
                        <Body1 className="text-black-400">
                            Tanggal Permohonan
                        </Body1>
                        <Body2 className="text-black-500">
                            {readable(data.created_at)}
                        </Body2>
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
                            Telp/Fax
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.user.institution.phone_number}
                        </Body2>
                        <Body1 className="text-black-400">
                            Email
                        </Body1>
                        <Body2 className="text-black-500">
                            {data.user.institution.email}
                        </Body2>
                        <Body1 className="text-black-400">
                                Pemohon/Pemegang Izin
                            </Body1>
                            <div className="block">
                                <Field
                                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                    id="permit_holder"
                                    name="permit_holder"
                                    type="text"
                                    placeholder="Isi Pemegang Izin"
                                    />
                                <ErrorMessage name="permit_holder" component={ValidationMessage}/>
                            </div>
                            <Body1 className="text-black-400">
                                Izin Pemanfaatan PPR No.
                            </Body1>
                            <div className="block">
                                <Field
                                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                    id="ppr_no"
                                    name="ppr_no"
                                    type="text"
                                    placeholder="Isi Izin Pemanfaatan PPR"
                                    />
                                <ErrorMessage name="ppr_no" component={ValidationMessage}/>
                            </div>
                    </div>
                    <div className="py-3">
                        <h3 className='pb-4'>Spesifikasi Alat</h3>
                        <FieldArray name="tool_info">
                            {({insert, remove, push}) => (
                                <>
                                    {data.tools.map((item,index)=>(
                                        <div key={index} className="">
                                            <h3>Alat {index+1}</h3>
                                            <div className="grid grid-cols-2 gap-y-3 py-3">
                                                <Body1 className="text-black-400">
                                                    Jenis Alat
                                                </Body1>
                                                <Body2 className="text-black-500">
                                                    {item.tool.type}
                                                </Body2>
                                                <Body1 className="text-black-400">
                                                    Jenis Uji
                                                </Body1>
                                                <Body2 className="text-black-500">
                                                    {data.test_type}
                                                </Body2>
                                                <Body1 className="text-black-400">
                                                    Merk Alat
                                                </Body1>
                                                <Body2 className="text-black-500">
                                                    {data.test_type==jenisPekerjaan[0]?item.tool.brand:item.tool_brand}
                                                </Body2>
                                                <Body1 className="text-black-400">
                                                    Tipe Alat
                                                </Body1>
                                                <Body2 className="text-black-500">
                                                    {item.tool_type}
                                                </Body2>
                                                <Body1 className="text-black-400">
                                                    Buatan/Pabrik
                                                </Body1>
                                                <div className="block">
                                                    <Field
                                                        className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                                        id={`tool_info.${index}.manufactured`}
                                                        name={`tool_info.${index}.manufactured`}
                                                        type="text"
                                                        placeholder="Isi Input"
                                                        />
                                                    <ErrorMessage name={`tool_info.${index}.manufactured`} component={ValidationMessage}/>
                                                </div>
                                                <Body1 className="text-black-400">
                                                    No. Seri Kontrol Panel
                                                </Body1>
                                                <div className="block">
                                                    <Field
                                                        className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                                        id={`tool_info.${index}.control_panel_serial_no`}
                                                        name={`tool_info.${index}.control_panel_serial_no`}
                                                        type="text"
                                                        placeholder="Isi Input"
                                                        />
                                                    <ErrorMessage name={`tool_info.${index}.control_panel_serial_no`} component={ValidationMessage}/>
                                                </div>
                                                <Body1 className="text-black-400">
                                                    No. Seri Wadah Tabung
                                                </Body1>
                                                <div className="block">
                                                    <Field
                                                        className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                                        id={`tool_info.${index}.tube_container_serial_no`}
                                                        name={`tool_info.${index}.tube_container_serial_no`}
                                                        type="text"
                                                        placeholder="Isi Input"
                                                        />
                                                    <ErrorMessage name={`tool_info.${index}.tube_container_serial_no`} component={ValidationMessage}/>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </FieldArray>
                    </div>
                    <div className="block py-3 space-y-4">
                        <h3>Kolom Pertanyaan</h3>
                        <div className="block space-y-2">
                            <Body1 className="text-black-400">
                                Bagaimana Kondisi Listrik dan Daya Listrik?
                            </Body1>
                            <Field as="textarea"
                            className="form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300  h-36 placeholder:body1 placeholder:text-grey-500"
                            name="q1"
                            type="text"
                            placeholder="Masukkan jawaban anda"
                            />
                            <Body1 className="text-black-400">
                                Bagaimana Kondisi dari Fungsi Kolmator?
                            </Body1>
                            <div role="group" className='flex space-x-20'>
                                <label className='flex items-center space-x-3'>
                                    <Field type="radio" name="q2" value="Baik" />
                                    <Body2 className="text-black-500">
                                        Baik
                                    </Body2>
                                </label>
                                <label className='flex items-center space-x-3'>
                                    <Field type="radio" name="q2" value="Tidak Baik" />
                                    <Body2 className="text-black-500">
                                        Tidak Baik
                                    </Body2>
                                </label>
                            </div>
                            <Body1 className="text-black-400">
                                Bagaimana Kondisi dari Fungsi Tube/Tabung Sinar X?
                            </Body1>
                            <div role="group" className='flex space-x-20'>
                                <label className='flex items-center space-x-3'>
                                    <Field type="radio" name="q3" value="Baik" />
                                    <Body2 className="text-black-500">
                                        Baik
                                    </Body2>
                                </label>
                                <label className='flex items-center space-x-3'>
                                    <Field type="radio" name="q3" value="Tidak Baik" />
                                    <Body2 className="text-black-500">
                                        Tidak Baik
                                    </Body2>
                                </label>
                            </div>
                            <Body1 className="text-black-400">
                                Bagaimana Kondisi dari Fungsi Kontrol Panel?
                            </Body1>
                            <div role="group" className='flex space-x-20'>
                                <label className='flex items-center space-x-3'>
                                    <Field type="radio" name="q4" value="Baik" />
                                    <Body2 className="text-black-500">
                                        Baik
                                    </Body2>
                                </label>
                                <label className='flex items-center space-x-3'>
                                    <Field type="radio" name="q4" value="Tidak Baik" />
                                    <Body2 className="text-black-500">
                                        Tidak Baik
                                    </Body2>
                                </label>
                            </div>
                        </div>
                        <div className=" block space-y-3">
                            <Body2 className="text-black-400">Untuk Radiografi Umum</Body2>
                            <div className="block space-y-1">
                                <Body1 className="text-black-400">
                                    1.  Apakah sudah menggunakan ALC?
                                </Body1>
                                <div role="group" className='flex space-x-20'>
                                    <label className='flex items-center space-x-3'>
                                        <Field type="radio" name="q5" value="Ya" />
                                        <Body2 className="text-black-500">
                                            Ya
                                        </Body2>
                                    </label>
                                    <label className='flex items-center space-x-3'>
                                        <Field type="radio" name="q5" value="Tidak" />
                                        <Body2 className="text-black-500">
                                            Tidak
                                        </Body2>
                                    </label>
                                </div>
                            </div>
                            <div className="block space-y-1">
                                <Body1 className="text-black-400">
                                    2. Moda Pengaturan mA dan s (terpisah) atau mAs?
                                </Body1>
                                <div role="group" className='flex space-x-20'>
                                    <label className='flex items-center space-x-3'>
                                        <Field type="radio" name="q6" value="Terpisah" />
                                        <Body2 className="text-black-500">
                                            Terpisah
                                        </Body2>
                                    </label>
                                    <label className='flex items-center space-x-3'>
                                        <Field type="radio" name="q6" value="Tidak Terpisah" />
                                        <Body2 className="text-black-500">
                                            Tidak Terpisah
                                        </Body2>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="block space-y-3">
                            <Body2 className="text-black-400">Untuk Dental Intraoral</Body2>
                            <div className="block space-y-1">
                                <Body1 className="text-black-400">
                                    1.  Untuk alat Dental Intraoral, apakah tersedia kaset film radiografi dan pencuncian manual?
                                </Body1>
                                <div role="group" className='flex space-x-20'>
                                    <label className='flex items-center space-x-3'>
                                        <Field type="radio" name="q7" value="Ya" />
                                        <Body2 className="text-black-500">
                                            Ya
                                        </Body2>
                                    </label>
                                    <label className='flex items-center space-x-3'>
                                        <Field type="radio" name="q7" value="Tidak" />
                                        <Body2 className="text-black-500">
                                            Tidak
                                        </Body2>
                                    </label>
                                </div>
                            </div>
                            <div className="block space-y-1">
                                <Body1 className="text-black-400">
                                2.  Untuk alat Dental Intraoral, apabila tidak tersedia kaset film radiografi dan pencuncian manual, apakah memiliki akses ke klinik/RS terdekat untuk peminjaman kaset dan pencucian film?
                                </Body1>
                                <div role="group" className='flex space-x-20'>
                                    <label className='flex items-center space-x-3'>
                                        <Field type="radio" name="q8" value="Ya" />
                                        <Body2 className="text-black-500">
                                            Ya
                                        </Body2>
                                    </label>
                                    <label className='flex items-center space-x-3'>
                                        <Field type="radio" name="q8" value="Tidak" />
                                        <Body2 className="text-black-500">
                                            Tidak
                                        </Body2>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        }}
    </Formik>
  )
}