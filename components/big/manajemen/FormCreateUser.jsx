import CustomComboBox from "components/small/single_menu/CustomComboBox";
import Body1 from "components/small/typography/Body1";
import { jenisAlatUkes } from "constants/jenis-alat/JenisAlatUkes";
import { jenisPekerjaan } from "constants/JenisPekerjaan";
import { ErrorMessage, Field, Form, Formik, useFormik, useFormikContext } from "formik"
import * as Yup from 'yup'
import { useState, useEffect } from "react";
import { jenisAlatKalibrasi } from "constants/jenis-alat/JenisAlatKalibrasi";
import ValidationMessage from "components/small/validation_form/ValidationMessage";

export default function FormCreateUser({id}) {
    const [test_typeSelected, setTest_TypeSelected] = useState()
    const [typeSelected, setTypeSelected] = useState()
    
    
    return (
    <Formik
    
    initialValues= {{
        name: "",
        role_id: "",
        email: "",
        position: "",
        instance: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
    }}
    validationSchema={ Yup.object({
        name: Yup.string().required("Required"),
        role_id: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        position: Yup.string().required("Required"),
        instance: Yup.string().required("Required"),
        phone_number: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
        password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        // quantity: Yup
        //             .number("nomor")
        //             .min(1,"Minimal 1")
        //             .required("Required")
        //             .positive("oi")
        //             .integer("wew")
        //             .typeError('Required'),
    })}
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
                            <CustomComboBox 
                            // selected={test_typeSelected}
                            // setSelected={setTest_TypeSelected}
                            selected={formik.values.test_type}
                            setSelected={formik.setFieldValue}

                            id="test_type"
                            name="test_type"
                            type="text"
                            // onChange={formik.handleChange}
                            // onChange={(e)=>{formik.setFieldValue('test_type',"mahmud")}}
                            onBlur={formik.handleBlur}
                            // value={formik.values.test_type}
                            placeholder="Pilih Jenis Uji" 
                            itemLists={jenisPekerjaan}/>
                            <ErrorMessage name="test_type" component="p" className="text-error"/>
                            {/* {formik.touched.test_type && formik.errors.test_type ? 
                                <p className="text-error">{formik.errors.test_type}</p>
                                :
                                null
                            } */}
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Role
                        </Body1>
                        {/* <CustomComboBox itemLists={jenisAlatUkes}/> */}
                        <div className="block">

                            <CustomComboBox 
                                // selected={typeSelected}
                                // setSelected={setTypeSelected}
                                selected={formik.values.type}
                                setSelected={formik.setFieldValue}
                                id="type"
                                name="type"
                                type="text"
                                disabled={formik.values.test_type?false:true}
                                // onChange={formik.handleChange}
                                // onChange={(e)=>{formik.setFieldValue('test_type',"mahmud")}}
                                onBlur={formik.handleBlur}
                                // value={formik.values.test_type}
                                placeholder="Pilih Jenis Alat" 
                                itemLists={formik.values.test_type == jenisPekerjaan[0] ?
                                    jenisAlatUkes
                                    :
                                    jenisAlatKalibrasi
                                }/>
                                <ErrorMessage name="type" component="p" className="text-error"/>
                                {/* {formik.touched.type && formik.errors.type ? 
                                    <p className="text-error">{formik.errors.type}</p>
                                    :
                                    null
                                } */}
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Jabatan
                        </Body1>
                        <div className="block">
                            <Field
                                className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="position"
                                name="position"
                                type="text"
                                placeholder="Isi Jabatan"
                                />
                            {/* <ErrorMessage name="position" component="p" className="text-error"/> */}
                            <ErrorMessage name="position" component={ValidationMessage}/>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Instansi
                        </Body1>
                        <div className="block">
                            <Field
                                className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Isi Nama Alat"
                                />
                            <ErrorMessage name="name" component="p" className="text-error"/>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1 className="text-black-400">
                            Email
                        </Body1>
                        <div className="block">
                            <Field
                                className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="quantity"
                                name="quantity"
                                type="number"
                                placeholder="Isi Email"
                                />
                            <ErrorMessage name="quantity" component="p" className="text-error"/>
                        </div>
                    </div>
                    <div className='flex items-start justify-between'>
                        <Body1>
                            No.Hp
                        </Body1>
                        <div className="block">
                            <Field
                                className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="phone_number"
                                name="phone_number"
                                type="text"
                                placeholder="Isi Nomor Handphone"
                                />
                        </div>
                    </div>
                    <div className='flex items-start justify-between'>
                        <Body1 className="text-black-400">
                            Password
                        </Body1>
                        <div className="block">
                            <Field
                                className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="password"
                                name="password"
                                type="text"
                                placeholder="Isi Password"
                                />
                        </div>
                    </div>
                    <div className="caption-small text-black-300">
                        Password terdiri atas minimal 8 karakter dengan satu huruf kapital dan satu angka
                    </div>
                    <div className='flex items-start justify-between'>
                        <Body1 className="text-black-400">
                            Konfirmasi Password
                        </Body1>
                        <div className="block">
                            <Field
                                className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                placeholder="Konfirmasi Password"
                                />
                        </div>
                    </div>
                </div>
                
        </Form>
    }}
    </Formik>
  )
}

