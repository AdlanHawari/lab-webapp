import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { formPraUjiInitValues } from 'helper/initial-formik-values/FormPraUjiInitValues'
import FormPraUjiValidationSchema from 'helper/yup/FormPraUjiValidationSchema'
import React from 'react'
import DateFormatter from 'utils/DateFormatter'
import * as Yup from 'yup'

export default function FormPraUji({data, id}) {
    const {readable} = DateFormatter()
  return (
    <Formik
        initialValues={formPraUjiInitValues}
        validationSchema={FormPraUjiValidationSchema(Yup)}
        onSubmit={ (values) => 
            console.log(values)

        }
    >
        {formik => {
            return <Form id={id}>
                 <div className='block w-full pl-10 pr-32 space-y-3 divide-y divide-grey-200'>
                    <div className="">
                        <h3>Alat 1</h3>
                        <div className="grid grid-cols-2 gap-y-3 py-3">
                            <Body1 className="text-black-400">
                                Jenis Alat
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.tools[0].name}
                            </Body2>
                            <Body1 className="text-black-400">
                                Jenis Uji
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.test_type}
                            </Body2>
                        </div>
                        
                    </div>
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
                                    className="form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                    id="permit_holder"
                                    name="permit_holder"
                                    type="text"
                                    
                                    placeholder="Isi Pemegang Izin"
                                    />
                                {/* <ErrorMessage name="permit_holder" component={ValidationMessage}/> */}
                            </div>

                            <Body1 className="text-black-400">
                                Izin Pemanfaatan PPR No.
                            </Body1>
                            <div className="block">
                                <Field
                                    className="form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                    id="ppr_no"
                                    name="ppr_no"
                                    type="text"
                                    
                                    placeholder="Isi Izin Pemanfaatan PPR"
                                    />
                                {/* <ErrorMessage name="ppr_no" component={ValidationMessage}/> */}
                            </div>

                    </div>

                    <div className="">
                        <h3>Spesifikasi Alat</h3>
                        <div className="grid grid-cols-2 gap-y-3 py-3">
                            <Body1 className="text-black-400">
                                Merk Alat
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.tools[0].brand}
                            </Body2>
                            <Body1 className="text-black-400">
                                Tipe Alat
                            </Body1>
                            <Body2 className="text-black-500">
                                {data.tools[0].type}
                            </Body2>
                            
                            <Body1 className="text-black-400">
                                Buatan/Pabrik
                            </Body1>
                            <div className="block">
                                <Field
                                    className="form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                    id="manufactured"
                                    name="manufactured"
                                    type="text"
                                    
                                    placeholder="Isi Input"
                                    />
                                {/* <ErrorMessage name="manufactured" component={ValidationMessage}/> */}
                            </div>

                            <Body1 className="text-black-400">
                                No. Seri Kontrol Panel
                            </Body1>
                            <div className="block">
                                <Field
                                    className="form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                    id="control_panel_serial_no"
                                    name="control_panel_serial_no"
                                    type="text"
                                    
                                    placeholder="Isi Input"
                                    />
                                {/* <ErrorMessage name="control_panel_serial_no" component={ValidationMessage}/> */}
                            </div>

                            <Body1 className="text-black-400">
                                No. Seri Wadah Tabung
                            </Body1>
                            <div className="block">
                                <Field
                                    className="form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                    id="tube_container_serial_no"
                                    name="tube_container_serial_no"
                                    type="text"
                                    
                                    placeholder="Isi Input"
                                    />
                                {/* <ErrorMessage name="tube_container_serial_no" component={ValidationMessage}/> */}
                            </div>

                        </div>
                    </div>

                    <div className="">
                        <h3>Kolom Pertanyaan</h3>

                    </div>
                </div>

            </Form>

        }}

       
    </Formik>
  )
}
