import CustomComboBox from "components/small/single_menu/CustomComboBox";
import Body1 from "components/small/typography/Body1";
import { jenisAlatUkes } from "constants/jenis-alat/JenisAlatUkes";
import { jenisPekerjaan } from "constants/JenisPekerjaan";
import { ErrorMessage, Field, Form, Formik, useFormik, useFormikContext } from "formik"
import * as Yup from 'yup'
import { useState, useEffect } from "react";
import { jenisAlatKalibrasi } from "constants/jenis-alat/JenisAlatKalibrasi";
import ValidationMessage from "components/small/validation_form/ValidationMessage";
import { createUserInitValues } from "helper/initial-formik-values/CreateUserInitValues";
import CreateUserValidationSchema from "helper/yup/CreateUserValidationSchema";
import CaptionReg from "components/small/typography/CaptionReg";
import Body2 from "components/small/typography/Body2";
import Button from "components/small/button_fixed/Button";
import CreateInstitutionForm from "./manajemen-user/CreateInstitutionForm";
import UserRoleDropDown from "components/small/single_menu/UserRoleDropDown";
import InstansiDropDown from "components/small/single_menu/InstansiDropDown";

export default function FormCreateUser({
    id,
    institutionList
}) {
    const [test_typeSelected, setTest_TypeSelected] = useState()
    const [typeSelected, setTypeSelected] = useState()
    
    
    return (
    <Formik
    
    initialValues= {createUserInitValues}
    validationSchema={CreateUserValidationSchema(Yup)}
    onSubmit={ (values) => {
        console.log(values);
    }}
    >
    {/* <form onSubmit={formik.handleSubmit}> */}
    { 
    formik =>{
        return  <Form id={id}>
            <div className="flex flex-col w-full pl-10 pr-32">
                <div className="grid grid-cols-2 gap-y-3 py-3">
                    
                    <Body1 className="text-black-400">
                        Nama User
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Isi Nama"
                            />
                        <ErrorMessage name="name" component={ValidationMessage}/>
                        
                    </div>
                    
                    
                    <Body1 className="text-black-400">
                        Role
                    </Body1>
                    {/* <CustomComboBox itemLists={jenisAlatUkes}/> */}
                    <div className="block">
                        <UserRoleDropDown
                        formikName="role_id"
                        setFormikValue={formik.setFieldValue}
                        onBlur={formik.handleBlur}
                            
                        />
                        

                        
                    </div>
                    
                    
                    <Body1 className="text-black-400">
                        Jabatan
                    </Body1>
                    <div className="block">
                        
                    </div>
                
                
                    <Body1 className="text-black-400">
                        Instansi
                    </Body1>
                    <div className="block">
                        <InstansiDropDown
                        itemLists={institutionList}
                        formikName="institution_id"
                        setFormikValue={formik.setFieldValue}
                        />
                        
                    </div>
                    
                </div>

                <CreateInstitutionForm/>
                <div className="grid grid-cols-2 gap-y-3 py-3">


                
                    <Body1 className="text-black-400">
                        Email
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Isi Email"
                            />
                        <ErrorMessage name="email" component={ValidationMessage}/>
                    </div>
                
                
                    <Body1 className="text-black-400">
                        No.Hp
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="phone_number"
                            name="phone_number"
                            type="number"
                            placeholder="Isi Nomor Handphone"
                            />
                        <ErrorMessage name="phone_number" component={ValidationMessage}/>
                    </div>
                
                
                    {/* <Body1 className="text-black-400">
                        Password
                    </Body1> */}
                    <Body1 className="text-black-400">
                        Password<br/>
                        <CaptionReg className="italic">
                        Password terdiri atas minimal 8 karakter dengan satu huruf kapital dan satu angka
                        </CaptionReg>
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Isi Password"
                            />
                        <ErrorMessage name="password" component={ValidationMessage}/>
                        
                    </div>
                
                
                    <Body1 className="text-black-400">
                        Konfirmasi Password
                    </Body1>
                    <div className="block">
                        <Field
                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            placeholder="Isi Password"
                            />
                        <ErrorMessage name="password_confirmation" component={ValidationMessage}/>
                        
                    </div>
                
                </div>
              </div>  
        </Form>
    }}
    </Formik>
  )
}

