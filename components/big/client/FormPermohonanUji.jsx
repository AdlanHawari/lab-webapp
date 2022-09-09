import CustomComboBox from "components/small/single_menu/CustomComboBox";
import Body1 from "components/small/typography/Body1";
import { jenisPekerjaan } from "constants/JenisPekerjaan";
import { ErrorMessage, Field, FieldArray, Form, Formik, useFormik, useFormikContext } from "formik"
import * as Yup from 'yup'
import { useState } from "react";
import FormPermohononanUjiValidationSchema from "helper/yup/FormPermohonanUjiValidationSchema";
import ValidationMessage from "components/small/validation_form/ValidationMessage";
import Button from "components/small/button_fixed/Button";
import { permohonanUjiInitVal, tool_details } from "helper/initial-formik-values/PermohonanUjiInitValues";
import { useClient } from "hooks/fetcher/useClient";
import handleFormData from "utils/HandleFormData";
import { XIcon } from "@heroicons/react/solid";
import JenisAlatDropDown from "components/small/single_menu/JenisAlatDropDown";
import useGetToolTypes from "hooks/fetcher/management-alat-ukur/useGetToolTypes";
import useGetToolsBrand from "hooks/fetcher/management-alat-ukur/useGetToolsBrand";
import BrandDropDown from "components/small/single_menu/BrandDropDown";
import SerialIDDropDown from "components/small/single_menu/SerialIDDropDown";

export default function FormPermohonanUji({
    id,
    submitState,
    setSubmitState,
    reqSent,
    setreqSent,
    errorMsg,
    setErrorMsg,
    setIsUjiOpen
    }) {
    
    const client = useClient()
    function rearrangeObject(obj){
        let result = {
            test_type: "",
            tool_type: "",
            tool_brand: "",
            tool_id: "",
            quantity: ""
        }
        result.test_type = obj.test_type
        obj.tools.map((tool, index)=>{
            if(result.tool_type.length>0){
                result.tool_type = result.tool_type + ","
            }
            result.tool_type = result.tool_type.concat(tool.type)

            if(result.tool_brand.length>0){
                result.tool_brand = result.tool_brand + ","
            }
            result.tool_brand = result.tool_brand.concat(tool.brand)
            
            if(result.tool_id.length>0){
                result.tool_id = result.tool_id + ","
            }
            result.tool_id = result.tool_id.concat(tool.tool_id)
            if(result.quantity.length>0){
                result.quantity = result.quantity + ","
            }
            result.quantity = result.quantity.concat(tool.quantity.toString())
        })
        return result
    }

    const tool_type_uji = useGetToolTypes("Uji Kesesuaian")
    const tool_type_kal = useGetToolTypes("Kalibrasi")
    const {tools, loading_toolbrand, error_toolbrand} = useGetToolsBrand()
    const [brandList, setBrandList] = useState([])
    
    return (
    <Formik
        initialValues={permohonanUjiInitVal}
        validationSchema={FormPermohononanUjiValidationSchema(Yup)}
        onSubmit={ (values) => {
            values.tools.map((item)=>{
                if(values.test_type==jenisPekerjaan[0]){
                    tools.data.map(tool=>{
                        if(tool.type==item.tool_name && tool.brand== item.brand && tool["serial/id"]==item.serial ){
                            item["tool_id"] = tool.id
                        }
                    })
                }
                if(values.test_type==jenisPekerjaan[1]){
                    tools.data.map(tool=>{
                        if(tool.type==item.tool_name){
                            item["tool_id"] = tool.id
                            item["tool_brand"] = tool.brand
                        }
                    })
                }
            })
            const arrangedObj = rearrangeObject(values)
            console.debug("arra", arrangedObj)
            let formData = handleFormData(arrangedObj)
            
            async function fetchData(){
                const response = await client.createPermohonanUji(formData)
                if(response.header.response_code==201){
                    setreqSent(true)
                }
                else{
                    setErrorMsg('Terjadi kesalahan')
                    setSubmitState(false)
                }
            }
            fetchData()
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
                                                    <div className="block w-96">
                                                            {tool_type_kal.tool_type && tool_type_uji.tool_type &&
                                                                <JenisAlatDropDown
                                                                itemLists={
                                                                    formik.values.test_type == jenisPekerjaan[0] ?
                                                                    tool_type_uji.tool_type
                                                                    :
                                                                    tool_type_kal.tool_type
                                                                }
                                                                disabled={formik.values.test_type?false:true}
                                                                id={`tools.${index}.tool_name`}
                                                                name={`tools.${index}.tool_name`}
                                                                formikName={`tools.${index}.tool_name`}
                                                                setFormikValue={formik.setFieldValue}
                                                                placeholder="Pilih Jenis Alat"
                                                                /> 
                                                            }
                                                            <ErrorMessage name={`tools.${index}.tool_name`} component={ValidationMessage}/>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <Body1>
                                                        Merk Alat
                                                    </Body1>
                                                        <div className="block w-96">
                                                            {formik.values.test_type == jenisPekerjaan[0] ? 
                                                                tools?.data &&
                                                                    <BrandDropDown
                                                                    data={tools.data}
                                                                    filter={formik.values.tools[index].tool_name}
                                                                    setFormikValue={formik.setFieldValue}
                                                                    formikName={`tools.${index}.brand`}
                                                                    placeholder="Pilih Merk Alat"
                                                                    name={`tools.${index}.brand`}
                                                                    id={`tools.${index}.brand`}
                                                                    disabled={formik.values.tools[index].tool_name?false:true}
                                                                    />
                                                                :
                                                                    <Field
                                                                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                                                    id={`tools.${index}.brand`}
                                                                    name={`tools.${index}.brand`}
                                                                    type="text"
                                                                    placeholder="Isi Merk Alat"
                                                                    /> 
                                                            }
                                                        <ErrorMessage name={`tools.${index}.brand`} component={ValidationMessage}/>
                                                    </div>
                                                </div>
                                                {formik.values.test_type == jenisPekerjaan[0] &&
                                                    <div className='flex items-center justify-between'>
                                                        <Body1>
                                                            Serial/ID
                                                        </Body1>
                                                        <div className="block w-96">
                                                        {tools?.data &&
                                                            <SerialIDDropDown
                                                            data={tools.data}
                                                            filterType={formik.values.tools[index].tool_name}
                                                            filterBrand={formik.values.tools[index].brand}
                                                            setFormikValue={formik.setFieldValue}
                                                            formikName={`tools.${index}.serial`}
                                                            placeholder="Pilih No. Seri/ID"
                                                            name={`tools.${index}.serial`}
                                                            id={`tools.${index}.serial`}
                                                            disabled={formik.values.tools[index].brand?false:true}
                                                            />
                                                        }
                                                            <ErrorMessage name={`tools.${index}.serial`} component={ValidationMessage}/>
                                                        </div>
                                                    </div>
                                                }
                                                <div className='flex items-center justify-between'>
                                                    <Body1>
                                                        Tipe Alat
                                                    </Body1>
                                                    <div className="block w-96">
                                                        <Field
                                                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                                            id={`tools.${index}.type`}
                                                            name={`tools.${index}.type`}
                                                            type="text"
                                                            placeholder="Isi Tipe Alat"
                                                            />
                                                        <ErrorMessage name={`tools.${index}.type`} component={ValidationMessage}/>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <Body1>
                                                        Kuantitas Alat
                                                    </Body1>
                                                    <div className="w-96 block">
                                                        <Field
                                                            className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
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
                        )}
                    </FieldArray>
                </div>
            </Form>
        }}
    </Formik>
  )
}