import ErrorModal from 'components/big/ErrorModal'
import InstansiDropDown from 'components/small/single_menu/InstansiDropDown'
import UserRoleDropDown from 'components/small/single_menu/UserRoleDropDown'
import Body1 from 'components/small/typography/Body1'
import Body3 from 'components/small/typography/Body3'
import CaptionReg from 'components/small/typography/CaptionReg'
import ValidationMessage from 'components/small/validation_form/ValidationMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import EditUserValidationSchema from 'helper/yup/EditUserValidationSchema'
import { useDetailUji } from 'hooks/fetcher/detail-uji/useDetailUji'
import { useManajemenUserFetcherContext } from 'hooks/fetcher/management-user/useManajemenUserFetcher'
import React, { useEffect, useRef, useState } from 'react'
import handleFormData from 'utils/HandleFormData'
import * as Yup from 'yup'

export default function FormEditUser({
    id,
    data,
    institutionList,
    submitState,
    setSubmitState,
    setreqSent
}) {


    function formEntry(values){
        let updatedVal = {}
        for (let [key, value] of Object.entries(values)) {
            if(key !="role_id" && key !="institution_id"){
              if(value != ""){
                updatedVal[key] = value
              }
            }
            else{
              if(key == "role_id" && values.role_id != data.role_id){
                  updatedVal[key]=value
              }
              if(key == "institution_id" && values.institution_id != data.institution_id){
                  updatedVal[key]=value
              }
            }
        }
        return updatedVal
    }

    const [emptyVal, setEmptyVal] = useState(false)

    const {editUser} = useManajemenUserFetcherContext()
    

  return (
    <>
    <Formik
    initialValues={{
        name: "",
        role_id: "",
        position:"",
        email: "",
        institution_id: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
    }}
    validationSchema={EditUserValidationSchema(Yup)}
    onSubmit={(values)=> {
        
        // console.log("finalValues", finalValues)
        const finalValues = formEntry(values)

        async function fetchData(form){
            const response = await editUser(form)
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
            fetchData(formData)
        }

        
    }}
    >{formik=>{
      return <Form id={id}>
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
                    placeholder={data.name}
                    />
                {/* <ErrorMessage name="user_create.name" component={ValidationMessage}/> */}
                
            </div>

            <Body1 className="text-black-400">
                Role
            </Body1>
            <div className="block">
                <UserRoleDropDown
                formikName="role_id"
                setFormikValue={formik.setFieldValue}
                onBlur={formik.handleBlur}
                initValue={data.role}
                />
                {/* <ErrorMessage name="role_id" component={ValidationMessage}/> */}
            </div>

            <Body1 className="text-black-400">
                Jabatan
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="position"
                    name="position"
                    type="text"
                    placeholder={data.position}
                    />
                {/* <ErrorMessage name="user_create.position" component={ValidationMessage}/> */}
                
            </div>

            <Body1 className="text-black-400">
                Instansi
            </Body1>
            <div className="block">
                <InstansiDropDown
                itemLists={institutionList}
                formikName="institution_id"
                setFormikValue={formik.setFieldValue}
                initValue={data.institution}
                />
                
            </div>

            <Body1 className="text-black-400">
                Email
            </Body1>
            <div className="block">
                <Field
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="email"
                    name="email"
                    type="text"
                    placeholder={data.email}
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
                    type="text"
                    placeholder={data.phone}
                    />
                <ErrorMessage name="phone_number" component={ValidationMessage}/>
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
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ganti Password Baru"
                    />
                <ErrorMessage name="password" component={ValidationMessage}/>
                
            </div>

            <Body1 className="text-black-400">
                Konfirmasi Password
            </Body1>
            <div className="block">
                <Field
                    // ref={passConfRef}
                    className="placeholder:text-grey-500 form-input w-full py-1 px-2 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Konfirmasi Password"
                    />
                <ErrorMessage name="password_confirmation" component={ValidationMessage}/>
                
            </div>
          </div>
        </div>

      </Form>
    }}

    </Formik>

    {/* {emptyVal &&
        <ErrorModal
        confirmButton
        bgColor="warning"
        isOpen={emptyVal}
        setIsOpen={setEmptyVal}
        >
            <div className="block pb-10 text-center">
                <Body3 className="text-black-400">Tidak ada data yang diubah</Body3>
            </div>


        </ErrorModal>
    } */}
    </>
  )
}
