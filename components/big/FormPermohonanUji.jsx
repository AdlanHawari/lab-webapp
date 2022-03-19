import CustomComboBox from "components/small/single_menu/CustomComboBox";
import Body1 from "components/small/typography/Body1";
import { jenisAlatUkes } from "constants/jenis-alat/JenisAlatUkes";
import { jenisPekerjaan } from "constants/JenisPekerjaan";
import { ErrorMessage, Field, Form, Formik, useFormik, useFormikContext } from "formik"
import * as Yup from 'yup'
import { useState, useEffect } from "react";
import { jenisAlatKalibrasi } from "constants/jenis-alat/JenisAlatKalibrasi";

export default function FormPermohonanUji({id}) {
    const [test_typeSelected, setTest_TypeSelected] = useState()
    const [typeSelected, setTypeSelected] = useState()
    // const formik = useFormik({
    //     initialValues: {
    //         test_type: "",
    //         brand: "",
    //         name: "",
    //         type: "",
    //         quantity: null,
    //         description: ""
    //     },
    //     validationSchema: Yup.object({
    //         test_type: Yup.string().required("Required"),
    //         brand: Yup.string().required("Required"),
    //         name: Yup.string().required("Required"),
    //         type: Yup.string().required("Required"),
    //         quantity: Yup.number().min(1,"Minimal 1").required(),
    //         // description: Yup.string(),
    //     }),
    //     onSubmit: (values) => {
    //         console.log(values);
    //     }
    // })const AutoSubmitToken = () => {
   // Grab values and submitForm from context
//    const { values, setFieldValue } = useFormikContext();
//    useEffect(() => {
//      // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
     
    //  console.log('uji',selected)
//     //  console.log('value test_type',values.test_type)
    // }, []);
    
    return (
    <Formik
    
    initialValues= {{
        test_type: "",
        type: "",
        brand: "",
        name: "",
        quantity: null,
        description: ""
    }}
    validationSchema={ Yup.object({
        test_type: Yup.string().required("Required"),
        type: Yup.string().required("Required"),
        brand: Yup.string().required("Required"),
        name: Yup.string().required("Required"),
        quantity: Yup.number().min(1,"Minimal 1").required("Required").positive().integer(),
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
                        <Body1>
                            Jenis Pekerjaan
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
                        <Body1>
                            Jenis Alat
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
                        <Body1>
                            Merk Alat
                        </Body1>
                        <div className="block">
                            <Field
                                className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="brand"
                                name="brand"
                                type="text"
                                placeholder="Isi Merk Alat"
                                />
                            <ErrorMessage name="brand" component="p" className="text-error"/>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1>
                            Tipe Alat
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
                        <Body1>
                            Kuantitas Alat
                        </Body1>
                        <div className="block">
                            <Field
                                className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="quantity"
                                name="quantity"
                                type="number"
                                placeholder="Isi Kuantitas Alat"
                                />
                            <ErrorMessage name="quantity" component="p" className="text-error"/>
                        </div>
                    </div>
                    <div className='flex items-start justify-between'>
                        <Body1>
                            Keterangan
                        </Body1>
                        <div className="block">
                            <Field as="textarea"
                                className="w-96 h-36 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                id="description"
                                name="description"
                                type="text"
                                placeholder="Isi Keterangan"
                                />
                        </div>
                    </div>
                </div>
                
        </Form>
    }}
    </Formik>
  )
}
