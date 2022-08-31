import { data } from 'autoprefixer'
import DatePickerInput from 'components/small/single_menu/DatePickerInput'
import JenisAlatDropDown from 'components/small/single_menu/JenisAlatDropDown'
import Body1 from 'components/small/typography/Body1'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { createAlatUkurInitValues } from 'helper/initial-formik-values/CreateAlatUkurInitValues'
import { useAlatUkurFetcher } from 'hooks/fetcher/management-alat-ukur/useAlatUkurFetcher'
import useGetToolTypes from 'hooks/fetcher/management-alat-ukur/useGetToolTypes'
import React from 'react'
import DateFormatter from 'utils/DateFormatter'
import handleFormData from 'utils/HandleFormData'

export default function FormEditAlat({
    id,
    data,
    submitState,
    setSubmitState,
    reqSent,
    setreqSent,
}) {

    const {readable} = DateFormatter()

    function formEntry(values){
        let updatedVal = {}
        for (let [key, value] of Object.entries(values)) {
            if(key !="tool_type" && key !="calibration_date"){
              if(value != ""){
                updatedVal[key] = value
              }
            }
            else{
              if(key == "tool_type" && values.tool_type != data.type){
                  updatedVal[key]=value
              }
              if(key == "calibration_date" && values.calibration_date){
                  updatedVal[key]=value
              }
            //   if(key == "calibration_date" && values.calibration_date != readable(data.calibration_date)){
            //       updatedVal[key]=value
            //   }
            }
        }
        return updatedVal
    }

    const {tool_type} = useGetToolTypes()
    const {editTool} = useAlatUkurFetcher()
    
  return (
    <Formik
    initialValues={createAlatUkurInitValues}
    onSubmit={(values)=>{
        // console.log("before",values)
        const finalValues = formEntry(values)
        // console.log("after",finalValues)

        async function fetchData(form, id){
            const response = await editTool(form,id )
            console.log("response", response)
            if(response.header.response_code==200){
                // setSubmitState(false)
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

        if(Object.keys(finalValues).length === 0 && finalValues.constructor === Object){
            console.log("no change")
            // setEmptyVal(true)
        }
        else{
            setSubmitState(true)
            
            let formData = handleFormData(finalValues)
            console.log(finalValues)
            fetchData(formData, data.id)
        }

    }}
    >{formik=>{
        return <Form id={id}>
    <div className="block h-screen w-full pl-10 pr-32 space-y-3">
        <div className="grid grid-cols-2 gap-y-3 py-3">
            <Body1 className="text-black-400">
                Alat
            </Body1>
            <div className="block">
                {tool_type &&
                <>
                    <JenisAlatDropDown
                    itemLists={tool_type}
                    formikName="tool_type"
                    setFormikValue={formik.setFieldValue}
                    placeholder="Pilih Jenis Alat"
                    initValue={data.type}
                    />
                    <ErrorMessage name="tool_type" component={ValidationMessage}/>
                </>
                }
            </div>
            <Body1 className="text-black-400">
                Merk Alat
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="brand"
                    name="brand"
                    type="text"
                    placeholder={data.brand}
                    />
                <ErrorMessage name="brand" component={ValidationMessage}/>

            </div>
            <Body1 className="text-black-400">
                No. Seri/ID
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="serial_id"
                    name="serial_id"
                    type="text"
                    placeholder={data["serial/id"]}
                    />
                <ErrorMessage name="serial_id" component={ValidationMessage}/>

            </div>
            <Body1 className="text-black-400">
                Tanggal Kalibrasi
            </Body1>
            <div className="block">
                <DatePickerInput
                setFormikValue={formik.setFieldValue}
                id="calibration_date"
                name="calibration_date"
                onBlur={formik.handleBlur}/>
                <ErrorMessage name="calibration_date" component={ValidationMessage}/>

            </div>
            <Body1 className="text-black-400">
                Interval Kalibrasi (dalam tahun)
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="interval"
                    name="interval"
                    type="text"
                    placeholder="Isi Interval Kalibrasi"
                    />
                <ErrorMessage name="interval" component={ValidationMessage}/>

            </div>
        </div>
    </div>

        </Form>
    }}
    </Formik>
  )
}
