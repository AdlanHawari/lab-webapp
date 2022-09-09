import { useEffect, useState } from "react"
import LoginLayout from "/components/auth/LoginLayout"
import Body1 from "/components/small/typography/Body1";
import Button from "/components/small/button_fixed/Button";
import { MyLink } from "components/general/MyLink";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import handleFormData from "utils/HandleFormData";
import ValidationMessage from "components/small/validation_form/ValidationMessage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";
import { ACCESS_CODE } from "constants/Access_Code";
import { useAuth } from "hooks/fetcher/auth/useAuth";
import { userType } from "constants/UserType";

export default function LoginPage() {
  const auth = useAuth()
  const [submitState, setSubmitState] = useState(false)
  const [errorUser, setErrorUser] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  const [showPass, setShowPass] = useState(false)
  const [token, setToken] = useState("")
  const [code, setCode] = useState("")
  useEffect(() => {
    if(token)
    {
      localStorage.setItem(`${process.env.NEXT_PUBLIC_LOCAL_TOKEN_KEY}`,token)
      redirectPage(code)
    }
  }, [token,code])

  function redirectPage(code){
    if(code){
      if(code == ACCESS_CODE.ADMIN){
        router.replace("/login/welcomeSU")
      }
      if(code == ACCESS_CODE.CLIENT){
        router.replace(`/${userType.client}/uji`)
      }
      if(code == ACCESS_CODE.PERSONNEL){
        router.replace(`/${userType.personnel}/uji`)
      }
      if(code == ACCESS_CODE.PERSONNEL_PEERS){
        router.replace(`/${userType.personnel}/uji`)
      }
      if(code == ACCESS_CODE.KEPALA_LAB_UJI){
        router.replace(`/${userType.management}/summary`)
      }
      if(code == ACCESS_CODE.KEPALA_LAB_KAL){
        router.replace(`/${userType.management}/summary`)
      }
      if(code == ACCESS_CODE.MANAGEMENT_KAL){
        router.replace(`/${userType.management}/summary`)
      }
      if(code == ACCESS_CODE.MANAGEMENT_UJI){
        router.replace(`/${userType.management}/summary`)
      }
    }
  }
  return(
    <>
      <h1 className="pb-9">Log In</h1>
      <Formik
      initialValues= {{
        email: "",
        password: "",
    }}
    validationSchema={ Yup.object({
        email: Yup.string().email("Email tidak valid").required("Required"),
        password: Yup.string().required("Password can't be empty"),
    })}
    onSubmit={ (values) => {
      setSubmitState(true)
      let formData = handleFormData(values)

      async function fetchData(){
        const response = await  auth.login(formData)
        if(response.header.response_code == 200){
          if (errorUser) {
            setErrorUser(false)
            setErrorMsg('')
          }
          const data = response.data
          setCode(data.user.role.access_code)
          setToken(data.token)
        }
        if(response.header.response_code == 401){
          setErrorUser(true)
          setErrorMsg(response.error)
          setSubmitState(false)
        }
      }
      fetchData()
    }}>
        <Form id="login_form">
          {errorUser &&
            <ValidationMessage className="mb-4">
              {errorMsg}
            </ValidationMessage>
          }
          <div className="pb-5">
            <Field
                className="form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                />
            <ErrorMessage name="email" component={ValidationMessage}/>
          </div>
          <div>
            <Field
              className="form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300"
              id="password"
              name="password"
              type={showPass?"text":"password"}
              placeholder="Password"
              />
            <ErrorMessage name="password" component={ValidationMessage}/>

            <div className="flex items-center pt-4 pl-2 space-x-2">
              <input
              type="checkbox"
              onChange={()=> setShowPass(prevState => {
                return !prevState
              })}
              />
              <p className="text-sm text-grey-700 ">
                Show Password
              </p>
            </div>
          </div>
          <div className="py-8">
            <Button type="submit" disabled={submitState? true:false} buttonStyle={submitState?"primary_disabled":"primary_default"}>
              { submitState &&
                <FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
              }
              Log In
            </Button>
          </div>
          <div className="flex w-full justify-center">
            <MyLink href="/login/forgotpassword">
              <div className="">
                <Body1 className="text-primary-darken15 cursor-pointer">Lupa Pasword?</Body1>
              </div>
            </MyLink>
          </div>
        </Form>
      </Formik>
    </>
  )
}

LoginPage.getLayout = function getLayout(page) {
  return (
      <LoginLayout>{page}</LoginLayout>
  )
}