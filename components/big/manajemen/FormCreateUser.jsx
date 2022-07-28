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

export default function FormCreateUser({id}) {
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
                <div className="block w-full pl-10 pr-32 space-y-3">
                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Nama User
                        </Body1>
                        <div className="block">
                          
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Role
                        </Body1>
                        {/* <CustomComboBox itemLists={jenisAlatUkes}/> */}
                        <div className="block">

                           
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Jabatan
                        </Body1>
                        <div className="block">
                           
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Instansi
                        </Body1>
                        <div className="block">
                          
                        </div>
                    </div>


                    <CreateInstitutionForm/>


                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Email
                        </Body1>
                        <div className="block">
                          
                        </div>
                    </div>
                    <div className='flex items-start justify-between'>
                        <Body1 className="text-black-400">
                            No.Hp
                        </Body1>
                        <div className="block">
                          
                        </div>
                    </div>
                    <div className='flex items-start justify-between'>
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
                           
                        </div>
                    </div>
                    <div className='flex items-start justify-between'>
                        <Body1 className="text-black-400">
                            Konfirmasi Password
                        </Body1>
                        <div className="block">
                            
                        </div>
                    </div>
                </div>
                
        </Form>
    }}
    </Formik>
  )
}

