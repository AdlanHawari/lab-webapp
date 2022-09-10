import { useState } from "react";
import LoginLayout from "/components/auth/LoginLayout"
import Body1 from "/components/small/typography/Body1"
import Button from "/components/small/button_fixed/Button";
import Input from "/components/small/input/Input";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ChangePassValidationSchema from "helper/yup/ChangePassValidationSchema";
import * as Yup from 'yup'
import ValidationMessage from "components/small/validation_form/ValidationMessage";

import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import handleFormData from "utils/HandleFormData";
import { MyLink } from "components/general/MyLink";
import { useAuth } from "hooks/fetcher/auth/useAuth";

export default function ResetPassPage() {
    const [reqSent, setreqSent] = useState(false);
    const [submitState, setSubmitState] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const auth = useAuth()

    const router = useRouter()
    const { uuid } = router.query
    return (
        <>
            <h1 className="pb-3.5">Ubah Password</h1>
            {!reqSent ?
            <Body1>Ubah password anda. Gunakan minimal 8 karakter, 1 huruf kapital dan 1 angka.</Body1>
            :
            <Body1>Password berhasil diubah</Body1>
            }
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
                let uuid_pass
                if(uuid){
                    uuid_pass = uuid
                }

                const response = await auth.changePass(formData, uuid_pass)

                if(response.header.response_code==200){
                    setSubmitState(false)
                    setErrorMsg('')
                    setreqSent(true)
                }
                if(response.header.response_code==404){
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
                        <ErrorMessage name="new_password" component={ValidationMessage}/>
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