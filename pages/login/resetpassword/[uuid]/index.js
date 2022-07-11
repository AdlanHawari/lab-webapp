import { useState } from "react";
import LoginLayout from "/components/auth/LoginLayout"
import Body1 from "/components/small/typography/Body1"
import Button from "/components/small/button_fixed/Button";
import Input from "/components/small/input/Input";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ChangePassValidationSchema from "helper/yup/ChangePassValidationSchema";
import * as Yup from 'yup'
import ValidationMessage from "components/small/validation_form/ValidationMessage";
import { useAuth } from "hooks/useAuth";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import handleFormData from "utils/HandleFormData";
import { MyLink } from "components/general/MyLink";

export default function ResetPassPage() {
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmpassword] = useState('');
    const [reqSent, setreqSent] = useState(false);
    const [submitState, setSubmitState] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const auth = useAuth()

    const router = useRouter()
    const { uuid } = router.query
    // console.log("uuid", uuid)
    return (
        <>
        <h1 className="pb-3.5">Ubah Password</h1>
        {!reqSent ?
        <Body1>Ubah password anda. Gunakan minimal 8 karakter, 1 huruf kapital dan 1 angka.</Body1>
        :
        <Body1>Password berhasil diubah</Body1>
        }

        {/* <form className="pt-11 pb-3 block space-y-8" action="">

            <div className="space-y-2.5">
                <Input  type="password" placeholder="Masukkan Password Baru" id="password" state={password} setState={setPassword}/>
                <Input  type="password" placeholder="Konfirmasi Password Baru" id="confirm_password" state={confirm_password} setState={setConfirmpassword}/>

            </div>
            
            <Button buttonStyle="primary_default"
            disabled={false}
            onClick={(e)=>setreqSent(!reqSent)}
            >Ubah Password</Button>
        </form> */}
        {!reqSent ?
        <Formik
        initialValues={{
            new_password: "",
            confirmPassword: ""
        }}
        validationSchema= {ChangePassValidationSchema(Yup)}
        onSubmit={ async (values)=> {

            setSubmitState(true)
            let formData = handleFormData(values)
            console.log(values)
            let uuid_pass
            if(uuid){
                uuid_pass = uuid
            }

            const response = await auth.changePass(formData, uuid_pass)
            
            console.log(response)

            if(response.header.response_code==200){
                setSubmitState(false)
                setErrorMsg('')
                setreqSent(true)
            }
            if(response.header.response_code==404){
                // setreqSent(true)
                setErrorMsg(response.status)
                setSubmitState(false)
            }
        }}
        >
            <Form className="pt-11 pb-3 block space-y-8">
                <div>
                    {errorMsg &&
                        <ValidationMessage className="mb-4">
                            {errorMsg}
                        </ValidationMessage>
                    }


                    <Field
                    className="form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="new_password"
                    name="new_password"
                    type="password"
                    placeholder="Masukkan password anda"
                    />

                    <ErrorMessage name="password" component={ValidationMessage}/>
                </div>
                
                <div>

                    <Field
                    className="form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Ketik ulang password"
                    />

                    <ErrorMessage name="confirmPassword" component={ValidationMessage}/>
                </div>
                
                <Button 
                type="submit" 
                disabled={submitState? true:false}
                buttonStyle={submitState?"primary_disabled":"primary_default"}
                >
                    { submitState &&
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
                    
                    }
                Ubah Password
                </Button>
            </Form>
        </Formik>
        
        :
        <div className="pt-10">
            <MyLink href='/login'>
                <p className="underline text-sm text-primary hover:text-secondary">
                Kembali ke halaman login
                </p>
            </MyLink>
        </div>
        }
            
        </>
    )
}


ResetPassPage.getLayout = function getLayout(page) {
    return (
        <LoginLayout>{page}</LoginLayout>
    )
  }
