import Button from 'components/small/button_fixed/Button'
import Body1 from 'components/small/typography/Body1'
import Body2 from 'components/small/typography/Body2'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { form_create_institution_id } from 'constants/FormUtils'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { createInstInitValues } from 'helper/initial-formik-values/CrateInstFormInitValues'
import React from 'react'
import * as Yup from 'yup'

export default function CreateInstitutionFormdepr({id}) {
  return (
    <Formik
    initialValues={createInstInitValues}
    validationSchema={CreateInstitutionForm(Yup)}
    onSubmit={(values)=> {
        console.log(values)
    }}
    >{formik =>{
        return <Form id={id}>
                    <div className="block bg-grey-100 border border-grey-400 space-y-3 rounded-xl p-5">
                        <Body2 className="text-black-400 pb-3.5">
                            Instansi Baru
                        </Body2>
                        <div className='flex items-center justify-between'>
                            <Body1 className="text-black-400">
                                Nama Instansi
                            </Body1>
                            <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Isi Nama Instansi"
                                />
                            <ErrorMessage name="name" component={ValidationMessage}/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <Body1 className="text-black-400">
                                Alamat Instansi
                            </Body1>
                            <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Isi Alamat Instansi"
                                />
                            <ErrorMessage name="address" component={ValidationMessage}/>
                            
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <Body1 className="text-black-400">
                                Email Instansi
                            </Body1>
                            <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Isi Email Instansi"
                                />
                            <ErrorMessage name="email" component={ValidationMessage}/>
                            
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <Body1 className="text-black-400">
                                No. Telp Instansi
                            </Body1>
                            <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="phone_number"
                                name="phone_number"
                                type="text"
                                placeholder="Isi No. Telp Instansi"
                                />
                            <ErrorMessage name="phone_number" component={ValidationMessage}/>
                            
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <Body1 className="text-black-400">
                                No. Hp Instansi
                            </Body1>
                            <div className="block">
                            <Field
                                className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                id="mobile_phone_number"
                                name="mobile_phone_number"
                                type="text"
                                placeholder="Isi No. Hp Instansi"
                                />
                            <ErrorMessage name="mobile_phone_number" component={ValidationMessage}/>
                            
                            </div>
                        </div>

                        <div className="flex w-full justify-end">

                            <Button 
                            className="bg-primary w-40" 
                            buttonStyle="primary_default" 
                            type="submit"
                            form={form_create_institution_id}>
                                Simpan Instansi
                            </Button>
                        </div>

                    </div>
                    
            </Form>}}

    </Formik>
  )
}
