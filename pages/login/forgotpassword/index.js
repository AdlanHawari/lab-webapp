import { useState } from "react";
import LoginLayout from "/components/auth/LoginLayout"
import Body1 from "/components/small/typography/Body1";
import Button from "/components/small/button_fixed/Button";
import { MyLink } from "components/general/MyLink";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import ForgetPassValidationSchema from 'helper/yup/ForgetPassValidationSchema'
import handleFormData from "utils/HandleFormData";
import ValidationMessage from "components/small/validation_form/ValidationMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "hooks/fetcher/auth/useAuth";

export default function ForgotPassPage() {
    const auth = useAuth()
    const [submitState, setSubmitState] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [reqSent, setreqSent] = useState(false);

    return (
        <>
            <h1 className="pb-3.5">Lupa Password</h1>
            <Body1 className="">
                {!reqSent ?
                "Masukkan Email yang anda gunakan di bawah ini, kami akan mengirimkan link untuk merubah password."
                :
                "Terimakasih, email perubahan password telah kami kirimkan ke Email. Silahkan cek Inbox atau Spam."
                }
            </Body1>

            {!reqSent ?
                    <div className="">
                        <Formik
                        initialValues={{
                            email: ""
                        }}
                        validationSchema={ ForgetPassValidationSchema(Yup)}
                        onSubmit={ async (values)=> {
                            
                            setSubmitState(true)
                            let formData = handleFormData(values)

                            const response = await auth.forgetPass(formData)
                            if(response.header.response_code==200){
                                setreqSent(true)
                                setSubmitState(false)
                                setErrorMsg('')
                            }
                            if(response.header.response_code==404){
                                setErrorMsg('Email tidak terdaftar')
                                setSubmitState(false)
                            }
                            }}
                        >
                            <Form className="pt-11 pb-3 block space-y-20">
                                <div>
                                    {errorMsg &&
                                        <ValidationMessage className="mb-4">
                                            {errorMsg}
                                        </ValidationMessage>
                                    }
                                    <Field
                                        className="form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Masukkan email anda"
                                    />
                                    <ErrorMessage name="email" component={ValidationMessage}/>
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
                    </div>
                    :
                    <div className="pt-11 pb-40">

                    </div>
            }   
            <MyLink href='/login'>
                <div className="">
                    <Button buttonStyle="secondary_default">Kembali ke halaman awal</Button>
                </div>
            </MyLink>
        </>
    )
}

ForgotPassPage.getLayout = function getLayout(page) {
    return (
        <LoginLayout>{page}</LoginLayout>
    )
  }