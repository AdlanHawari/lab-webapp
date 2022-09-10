import Button from 'components/small/button_fixed/Button'
import InstansiDropDown from 'components/small/single_menu/InstansiDropDown'
import UserRoleDropDown from 'components/small/single_menu/UserRoleDropDown'
import Body1 from 'components/small/typography/Body1'
import CaptionReg from 'components/small/typography/CaptionReg'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { createUserInitValues } from 'helper/initial-formik-values/CreateUserInitValues'
import CreateInstValidationSchema from 'helper/yup/CreateInstValidationSchema'
import CreateUserValidationSchema from 'helper/yup/CreateUserValidationSchema'
import { useManajemenUserContext } from 'hooks/context/manajemen-user/ManajemenUserContext'
import { useManajemenUserFetcherContext } from 'hooks/fetcher/management-user/useManajemenUserFetcher'
import React from 'react'
import { useSWRConfig } from 'swr'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'
import CreateInstitutionForm from './CreateInstitutionForm'

export default function FormCreateUser({
    id,
    institutionList,
    submitState,
    setSubmitState,
    setreqSent
}) {
    const {
        createInstForm, 
        setCreateInstForm } = useManajemenUserContext()
    const {createInstitution, createUser} = useManajemenUserFetcherContext()
    const {mutate} = useSWRConfig()

  return (
    <Formik
    initialValues={createUserInitValues}
    validationSchema={createInstForm? CreateInstValidationSchema(Yup):CreateUserValidationSchema(Yup)}
    onSubmit={(values)=> {
        setSubmitState(true)
        async function createInstFunction(formData){
            const response = await createInstitution(formData)
            if(response.header.response_code==201){
                mutate('/institutions')
                setSubmitState(false)
                setCreateInstForm(false)
            }
            if(response.header.response_code==400){
                setSubmitState(false)
            }
            if(response.header.response_code==401){
                setSubmitState(false)
            }
            if(response.header.response_code==422){
                setSubmitState(false)
            }
        }
        
        async function createUserFunction(formData){
            const response = await createUser(formData)
            if(response.header.response_code==201){
                setreqSent(true)
            }
            if(response.header.response_code==400){
                setSubmitState(false)
            }
            if(response.header.response_code==401){
                setSubmitState(false)
            }
            if(response.header.response_code==422){
                setSubmitState(false)
            }
        }
        let sendValues = {}
        if(createInstForm){
            sendValues = values.institution_create
            let formData = handleFormData(sendValues)
            createInstFunction(formData)
        }
        else{
            sendValues = values.user_create
            let formData = handleFormData(sendValues)
            createUserFunction(formData)
        }
    }}

    >{formik => {
        return <Form id={id}>
            <div className="flex flex-col w-full pl-10 pr-32">
                <div className="grid grid-cols-2 gap-y-3 py-3">
                    <Body1 className="text-black-400">
                        Nama User
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="user_create.name"
                            name="user_create.name"
                            type="text"
                            placeholder="Isi Nama"
                            />
                        <ErrorMessage name="user_create.name" component={ValidationMessage}/>
                    </div>
                    <Body1 className="text-black-400">
                        Role
                    </Body1>
                    <div className="block">
                        <UserRoleDropDown
                        formikName="user_create.role_id"
                        setFormikValue={formik.setFieldValue}
                        onBlur={formik.handleBlur}
                        />
                        <ErrorMessage name="user_create.role_id" component={ValidationMessage}/>
                    </div>
                    <Body1 className="text-black-400">
                        Jabatan
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="user_create.position"
                            name="user_create.position"
                            type="text"
                            placeholder="Isi Nama"
                            />
                        <ErrorMessage name="user_create.position" component={ValidationMessage}/>
                    </div>
                    <Body1 className="text-black-400">
                        Instansi
                    </Body1>
                    <div className="block">
                        <InstansiDropDown
                        itemLists={institutionList}
                        formikName="user_create.institution_id"
                        setFormikValue={formik.setFieldValue}
                        bottomButton={
                            <Button
                            type="button"
                            className="bg-secondary text-white rounded-none hover:bg-secondary-darker20"
                            onClick={()=> setCreateInstForm(true)}
                            >
                                Buat Instansi Baru
                            </Button>
                        }
                        />
                    </div>
                </div>
                {createInstForm &&
                <CreateInstitutionForm 
                id={id} 
                setCreateInstForm={setCreateInstForm}
                submitState={submitState}
                setSubmitState={setSubmitState}
                />
                }
                <div className="grid grid-cols-2 gap-y-3 py-3">
                    <Body1 className="text-black-400">
                        Email
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="user_create.email"
                            name="user_create.email"
                            type="text"
                            placeholder="Isi Email"
                            />
                        <ErrorMessage name="user_create.email" component={ValidationMessage}/>
                    </div>
                    <Body1 className="text-black-400">
                        No.Hp
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="user_create.phone_number"
                            name="user_create.phone_number"
                            type="number"
                            placeholder="Isi Nomor Handphone"
                            />
                        <ErrorMessage name="user_create.phone_number" component={ValidationMessage}/>
                    </div>
                    <Body1 className="text-black-400">
                        Password<br/>
                        <CaptionReg className="italic">
                        Password terdiri atas minimal 8 karakter dengan satu huruf kapital dan satu angka
                        </CaptionReg>
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="user_create.password"
                            name="user_create.password"
                            type="password"
                            placeholder="Isi Password"
                            />
                        <ErrorMessage name="user_create.password" component={ValidationMessage}/>
                        
                    </div>

                    <Body1 className="text-black-400">
                        Konfirmasi Password
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="user_create.password_confirmation"
                            name="user_create.password_confirmation"
                            type="password"
                            placeholder="Isi Password"
                            />
                        <ErrorMessage name="user_create.password_confirmation" component={ValidationMessage}/>
                    </div>
                </div>
            </div>
        </Form>
    }}
    </Formik>
  )
}