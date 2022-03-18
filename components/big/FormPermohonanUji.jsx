import CustomComboBox from "components/small/single_menu/CustomComboBox";
import Body1 from "components/small/typography/Body1";
import { jenisAlatUkes } from "constants/jenis-alat/JenisAlatUkes";
import { jenisPekerjaan } from "constants/JenisPekerjaan";
import { Form, Formik, useFormik, useFormikContext } from "formik"
import * as Yup from 'yup'
import { useState, useEffect } from "react";
import { jenisAlatKalibrasi } from "constants/jenis-alat/JenisAlatKalibrasi";

export default function FormPermohonanUji() {
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
        quantity: Yup.number().min(1,"Minimal 1").required("Required"),
    })}
    onSubmit={ (values) => {
        console.log(values);
    }}
    >
    {/* <form onSubmit={formik.handleSubmit}> */}
    { 
    formik =>{
        return  <Form>
                <div className="block w-full pl-10 pr-32 space-y-3">
                    <div className='flex items-center justify-between'>
                        <Body1>
                            Jenis Pekerjaan
                        </Body1>
                        <div className="block">
                            <CustomComboBox 
                            selected={test_typeSelected}
                            setSelected={setTest_TypeSelected}
                            id="test_type"
                            name="test_type"
                            type="text"
                            // onChange={formik.handleChange}
                            // onChange={(e)=>{formik.setFieldValue('test_type',"mahmud")}}
                            onBlur={formik.handleBlur}
                            // value={formik.values.test_type}
                            placeholder="Pilih Jenis Uji" 
                            itemLists={jenisPekerjaan}/>
                            
                            {formik.touched.test_type && formik.errors.test_type ? 
                                <p className="text-error">{formik.errors.test_type}</p>
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1>
                            Jenis Alat
                        </Body1>
                        {/* <CustomComboBox itemLists={jenisAlatUkes}/> */}
                        <div className="block">

                            <CustomComboBox 
                                selected={typeSelected}
                                setSelected={setTypeSelected}
                                id="type"
                                name="type"
                                type="text"
                                disabled={test_typeSelected?false:true}
                                // onChange={formik.handleChange}
                                // onChange={(e)=>{formik.setFieldValue('test_type',"mahmud")}}
                                onBlur={formik.handleBlur}
                                // value={formik.values.test_type}
                                placeholder="Pilih Jenis Alat" 
                                itemLists={test_typeSelected == jenisPekerjaan[0] ?
                                    jenisAlatUkes
                                    :
                                    jenisAlatKalibrasi
                                }/>
                                
                                {formik.touched.type && formik.errors.type ? 
                                    <p className="text-error">{formik.errors.type}</p>
                                    :
                                    null
                                }
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1>
                            Merk Alat
                        </Body1>
                        <div className="block">
                            <input
                                id="brand"
                                name="brand"
                                type="text"
                                placeholder="Merk Alat"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.brand}
                                />
                            {formik.touched.brand && formik.errors.brand ? 
                                <p className="text-error">{formik.errors.brand}</p>
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1>
                            Tipe Alat
                        </Body1>
                        <div className="block">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Tipe Alat"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.brand}
                                />
                            {formik.touched.name && formik.errors.name ? 
                                <p className="text-error">{formik.errors.name}</p>
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1>
                            Kuantitas Alat
                        </Body1>
                        <div className="block">
                            <input
                                id="quantity"
                                name="quantity"
                                type="text"
                                placeholder="Kuantitas Alat"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantity}
                                />
                            {formik.touched.quantity && formik.errors.quantity ? 
                                <p className="text-error">{formik.errors.quantity}</p>
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Body1>
                            Keterangan Alat
                        </Body1>
                        <div className="block">
                            <input
                                id="description"
                                name="description"
                                type="number"
                                placeholder="Keterangan Alat"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                                />
                           
                        </div>
                    </div>


                </div>
                {/* <input
                id="test_type"
                name="test_type"
                type="text"
                placeholder="Jenis Uji"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.test_type}
                />
                {formik.touched.test_type && formik.errors.test_type ? 
                <p>{formik.errors.test_type}</p>
                :
                null
                } */}
            {/* </form> */}
        </Form>
    }}
    </Formik>
  )
}
