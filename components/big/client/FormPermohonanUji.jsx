import CustomComboBox from "components/small/single_menu/CustomComboBox";
import Body1 from "components/small/typography/Body1";
import { jenisAlatUkes } from "constants/jenis-alat/JenisAlatUkes";
import { jenisPekerjaan } from "constants/JenisPekerjaan";
import { ErrorMessage, Field, FieldArray, Form, Formik, useFormik, useFormikContext } from "formik"
import * as Yup from 'yup'
import { useState, useEffect } from "react";
import { jenisAlatKalibrasi } from "constants/jenis-alat/JenisAlatKalibrasi";
import FormPermohononanUjiValidationSchema from "helper/yup/FormPermohonanUjiValidationSchema";
import ValidationMessage from "components/small/validation_form/ValidationMessage";
import Button from "components/small/button_fixed/Button";
import { permohonanUjiInitVal, tool_details } from "helper/initial-formik-values/PermohonanUjiInitValues";
import { useClient } from "hooks/fetcher/useClient";
import handleFormData from "utils/HandleFormData";
import { XIcon } from "@heroicons/react/solid";

export default function FormPermohonanUji({id}) {
    const [test_typeSelected, setTest_TypeSelected] = useState()
    const [typeSelected, setTypeSelected] = useState()
    
    const client = useClient()
    const [submitState, setSubmitState] = useState(false)
    const [reqSent, setreqSent] = useState(false);

    function rearrangeObject(obj){
        let result = {
            test_type: "",
            type: "",
            brand: "",
            tool_name: "",
            quantity: ""
        }
        result.test_type = obj.test_type
        // result.tool_name = obj.tools[0].tool_name
        obj.tools.map((tool, index)=>{
            if(result.brand.length>0){
                result.brand = result.brand + ","
            }
            result.brand = result.brand.concat(tool.brand)
            
            if(result.type.length>0){
                result.type = result.type + ","
            }
            result.type = result.type.concat(tool.type)
            
            if(result.tool_name.length>0){
                result.tool_name = result.tool_name + ","
            }
            result.tool_name = result.tool_name.concat(tool.tool_name)
            
            if(result.quantity.length>0){
                result.quantity = result.quantity + ","
            }
            result.quantity = result.quantity.concat(tool.quantity.toString())
            
        }
            // result.brand = result.type.concat(tool.brand)
            
            // result.brand = result.brand + "," + tool.brand
        )
        
        // console.log("obj",obj)
        // console.log("result", result)
        return result
    }
    
    
    
    
    return (
    // <Formik
    
    // initialValues= {{
    //     test_type: "",
    //     type: "",
    //     brand: "",
    //     tool_name: "",
    //     quantity: null
    // }}
    // validationSchema={ FormPermohononanUjiValidationSchema(Yup)}
    // onSubmit={ (values) => {
    //     console.log(values);
    // }}
    // >
    // {/* <form onSubmit={formik.handleSubmit}> */}
    // { 
    // formik =>{
    //     return  <Form id={id}>
    //             <div className="block w-full pl-10 pr-32 space-y-3">
    //                 <div className='flex items-center justify-between'>
    //                     <Body1>
    //                         Jenis Pekerjaan
    //                     </Body1>
    //                     <div className="block">
    //                         <CustomComboBox 
    //                         // selected={test_typeSelected}
    //                         // setSelected={setTest_TypeSelected}
    //                         selected={formik.values.test_type}
    //                         setSelected={formik.setFieldValue}

    //                         id="test_type"
    //                         name="test_type"
    //                         type="text"
    //                         // onChange={formik.handleChange}
    //                         // onChange={(e)=>{formik.setFieldValue('test_type',"mahmud")}}
    //                         onBlur={formik.handleBlur}
    //                         // value={formik.values.test_type}
    //                         placeholder="Pilih Jenis Uji" 
    //                         itemLists={jenisPekerjaan}/>
    //                         <ErrorMessage name="test_type" component={ValidationMessage}/>
    //                         {/* <ErrorMessage name="test_type" component="p" className="text-error"/> */}
    //                         {/* {formik.touched.test_type && formik.errors.test_type ? 
    //                             <p className="text-error">{formik.errors.test_type}</p>
    //                             :
    //                             null
    //                         } */}
    //                     </div>
    //                 </div>
    //                 <div className='flex items-center justify-between'>
    //                     <Body1>
    //                         Jenis Alat
    //                     </Body1>
    //                     {/* <CustomComboBox itemLists={jenisAlatUkes}/> */}
    //                     <div className="block">

    //                         <CustomComboBox 
    //                             // selected={typeSelected}
    //                             // setSelected={setTypeSelected}
    //                             selected={formik.values.type}
    //                             setSelected={formik.setFieldValue}
    //                             id="type"
    //                             name="type"
    //                             type="text"
    //                             disabled={formik.values.test_type?false:true}
    //                             // onChange={formik.handleChange}
    //                             // onChange={(e)=>{formik.setFieldValue('test_type',"mahmud")}}
    //                             onBlur={formik.handleBlur}
    //                             // value={formik.values.test_type}
    //                             placeholder="Pilih Jenis Alat" 
    //                             itemLists={formik.values.test_type == jenisPekerjaan[0] ?
    //                                 jenisAlatUkes
    //                                 :
    //                                 jenisAlatKalibrasi
    //                             }/>
    //                             <ErrorMessage name="type" component={ValidationMessage}/>
    //                             {/* {formik.touched.type && formik.errors.type ? 
    //                                 <p className="text-error">{formik.errors.type}</p>
    //                                 :
    //                                 null
    //                             } */}
    //                     </div>
    //                 </div>
    //                 <div className='flex items-center justify-between'>
    //                     <Body1>
    //                         Merk Alat
    //                     </Body1>
    //                     <div className="block">
    //                         <Field
    //                             className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
    //                             id="brand"
    //                             name="brand"
    //                             type="text"
    //                             placeholder="Isi Merk Alat"
    //                             />
    //                         <ErrorMessage name="brand" component={ValidationMessage}/>
    //                     </div>
    //                 </div>
    //                 <div className='flex items-center justify-between'>
    //                     <Body1>
    //                         Tipe Alat
    //                     </Body1>
    //                     <div className="block">
    //                         <Field
    //                             className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
    //                             id="tool_name"
    //                             name="tool_name"
    //                             type="text"
    //                             placeholder="Isi Nama Alat"
    //                             />
    //                         <ErrorMessage name="tool_name" component={ValidationMessage}/>
    //                     </div>
    //                 </div>
    //                 <div className='flex items-center justify-between'>
    //                     <Body1>
    //                         Kuantitas Alat
    //                     </Body1>
    //                     <div className="block">
    //                         <Field
    //                             className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
    //                             id="quantity"
    //                             name="quantity"
    //                             type="number"
    //                             placeholder="Isi Kuantitas Alat"
    //                             />
    //                         <ErrorMessage name="quantity" component={ValidationMessage}/>
    //                     </div>
    //                 </div>

    //                 <div className="w-full flex justify-end">
    //                     <Button className="w-32 hover:bg-secondary-darker10 hover:border-white hover:text-white" buttonStyle="secondary_default" type="button">
    //                         Tambah alat
    //                     </Button>

    //                 </div>
    //                 {/* <div className='flex items-start justify-between'>
    //                     <Body1>
    //                         Keterangan
    //                     </Body1>
    //                     <div className="block">
    //                         <Field as="textarea"
    //                             className="w-96 h-36 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
    //                             id="description"
    //                             name="description"
    //                             type="text"
    //                             placeholder="Isi Keterangan"
    //                             />
    //                     </div>
    //                 </div> */}
    //             </div>
                
    //     </Form>
    // }}
    // </Formik>

    <Formik
        initialValues={permohonanUjiInitVal}
        validationSchema={FormPermohononanUjiValidationSchema(Yup)}
        onSubmit={async (values) => {
            // console.log(rearrangeObject(values))
            setSubmitState(true)
            const arrangedObj = rearrangeObject(values)
            let formData = handleFormData(arrangedObj)
            
            const response = await client.createPermohonanUji(formData)
            if(response.header.response_code==201){
                setreqSent(true)
                setSubmitState(false)
                setErrorMsg('')
            }
            else{
                setErrorMsg('Terjadi kesalahan')
                setSubmitState(false)
            }
            
            console.log("respon", response)

        }}

    >
        {formik => {
            return <Form id={id}>
                <div className="block w-full pl-10 pr-32 space-y-3">
                    <div className='flex items-center justify-between'>
                        <Body1>
                             Jenis Pekerjaan
                         </Body1>
                         <div className="block">
                             <CustomComboBox
                            selected={formik.values.test_type}
                            setSelected={formik.setFieldValue}

                            id="test_type"
                            name="test_type"
                            type="text"
                            onBlur={formik.handleBlur}
                            
                            placeholder="Pilih Jenis Uji" 
                            itemLists={jenisPekerjaan}/>
                            <ErrorMessage name="test_type" component={ValidationMessage}/>
                            
                        </div>
                    </div>

                    <FieldArray name="tools">
                        {({ insert, remove, push }) => (
                            <div className="space-y-4">
                                {formik.values.tools.length > 0 && 
                                    formik.values.tools.map((tool, index) => (
                                        <div key={index} className=" pb-4 border border-grey-300 rounded-xl ">
                                            <div className="flex justify-end">
                                                {index>0 &&
                                                <button 
                                                className="flex w-8 h-8 items-center justify-center py-2 px-2 bg-error hover:bg-error-dark rounded-lg"
                                                type="button"
                                                onClick={()=> remove(index)}>
                                                    <XIcon className="w-4 h-5 text-white " aria-hidden="true"/>
                                                </button>
                                                }

                                            </div>

                                            <div className="space-y-3 px-4 py-4">

                                                <div className='flex items-center justify-between'>
                                                    <Body1>
                                                        Jenis Alat
                                                    </Body1>
                                                    <div className="block">

                                                        <CustomComboBox
                                                            // selected={formik.values.type}
                                                            selected={tool.type}
                                                            setSelected={formik.setFieldValue}
                                                            id={`tools.${index}.type`}
                                                            name={`tools.${index}.type`}
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
                                                            <ErrorMessage name={`tools.${index}.type`} component={ValidationMessage}/>
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
                                                            id={`tools.${index}.brand`}
                                                            name={`tools.${index}.brand`}
                                                            type="text"
                                                            placeholder="Isi Merk Alat"
                                                            />
                                                        <ErrorMessage name={`tools.${index}.brand`} component={ValidationMessage}/>
                                                    </div>
                                                </div>


                                                <div className='flex items-center justify-between'>
                                                    <Body1>
                                                        Tipe Alat
                                                    </Body1>
                                                    <div className="block">
                                                        <Field
                                                            className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                                            id={`tools.${index}.tool_name`}
                                                            name={`tools.${index}.tool_name`}
                                                            type="text"
                                                            placeholder="Isi Nama Alat"
                                                            />
                                                        <ErrorMessage name={`tools.${index}.tool_name`} component={ValidationMessage}/>
                                                    </div>
                                                </div>


                                                <div className='flex items-center justify-between'>
                                                    <Body1>
                                                        Kuantitas Alat
                                                    </Body1>
                                                    <div className="block">
                                                        <Field
                                                            className="w-96 border-none focus:ring-0 py-2 px-3 text-sm leading-5 text-gray-900 rounded-lg shadow-md"
                                                            id={`tools.${index}.quantity`}
                                                            name={`tools.${index}.quantity`}
                                                            type="number"
                                                            placeholder="Isi Kuantitas Alat"
                                                            />
                                                        <ErrorMessage name={`tools.${index}.quantity`} component={ValidationMessage}/>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            

                                        </div>
                                    ))
                                }

                                 <div className="w-full flex justify-end">
                                     <Button 
                                     className="w-32 hover:bg-primary-darken10 hover:border-white hover:text-white" 
                                     buttonStyle="secondary_default" 
                                     type="button"
                                     onClick={()=> push(tool_details)}>
                                         Tambah alat
                                     </Button>

                                 </div>
                            </div>
                        )
                        }

                    </FieldArray>
                </div>

            </Form>
        }}

    </Formik>
  )
}
