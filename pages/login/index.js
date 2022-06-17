import classNames from "classnames";
import Link from "next/link";
import { Fragment, useState } from "react"
import LoginLayout from "/components/auth/LoginLayout"
import Body1 from "/components/small/typography/Body1";
import Button from "/components/small/button_fixed/Button";
import Input from "/components/small/input/Input";
import { MyLink } from "components/general/MyLink";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import handleFormData from "utils/HandleFormData";
import { useAuth } from "hooks/useAuth";
import Body2 from "components/small/typography/Body2";
import ValidationMessage from "components/small/validation_form/ValidationMessage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";

export default function LoginPage() {
  const auth = useAuth()
  const [submitState, setSubmitState] = useState(false)
  const [errorUser, setErrorUser] = useState(false)
  const router = useRouter()
  const [showPass, setShowPass] = useState(false)
  

   async function handleLogin(formData){
    const res =  await auth.login(formData);
    return res
  }
    
  return(
    <>
      <h1 className="pb-9">Log In</h1>
      <Formik
      initialValues= {{
        // email: "",
        username: "",
        password: "",
    }}
    validationSchema={ Yup.object({
        // email: Yup.string().email("Email tidak valid").required("Required"),
        username: Yup.string().email("Invalid Email").required("Fill in your email"),
        password: Yup.string().required("Password can't be empty"),
    })}
    onSubmit={ async (values) => {

      setSubmitState(true)
      let formData = handleFormData(values)
      //log the value
      for (let property of formData.entries()) {
        console.log(property[0], property[1]);
      }
      const response = await handleLogin(formData)
      // console.log("data", response)
      
      if(response.http_code == 200){
        if (errorUser) {
          setErrorUser(false)
        }
        const data = response.data
        // a = JSON.stringify(data)
        console.log("token",data.token)
        console.log("role",data.user.role.name)

        localStorage.setItem('jwt_user', data.token)
        router.push("/login/welcomeSU")
        
        
        
      }

      if(response.http_code == 422){
        const data = response.data
        setErrorUser(true)
        // a = JSON.stringify(data)
        // console.log("token",data.token)
        // console.log("role",data.user.role.name)
        
        
      }
      setSubmitState(false)

    }}>
        {/* {formik=>{return  */}
        <Form id="login_form">
          {errorUser &&
            <ValidationMessage className="mb-4">
            Data user tidak ditemukan
            </ValidationMessage>
          }
          <div className="pb-5">
            <Field
                className="form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300"
                // id="email"
                id="username"
                // name="email"
                name="username"
                // type="email"
                type="text"
                placeholder="Email"
                />
            {/* <ErrorMessage name="email" component="p" className="text-error"/> */}
            {/* <ErrorMessage name="username" component="p" className="text-error"/> */}
            <ErrorMessage name="username" component={ValidationMessage}/>
          </div>
          <div>
          <Field
                className="form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300"
                id="password"
                name="password"
                // type="password"
                type={showPass?"text":"password"}
                placeholder="Password"
                />
            <ErrorMessage name="password" component={ValidationMessage}/>
              {/* {msg => 
                <div className="flex rounded-sm bg-error-light p-2 mt-1">
                  <Body1 className="text-error-dark">
                    {msg}
                  </Body1>
                </div>
              } */}

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
                {/* <FontAwesomeIcon icon="fa-solid fa-spinner-third"/> */}
                
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
      



      // <>
      //   <h1 className="pb-9">Log In</h1>
      //   <form>
      //       <div className="pb-5">
      //           <Input type="email" placeholder="Email" id="email" state={email} setState={setEmail}/>

      //       </div>

      //       <div>
      //           <Input type="password" placeholder="Password" id="password" state={password} setState={setPassword}/>
                
      //       </div>
      //       <div className="py-8">
      //         <Button type="submit" disabled={false} buttonStyle={"primary_default"}>Log In</Button>
      //       </div>
      //   </form>

      //   <div className="flex w-full justify-center">
      //     <MyLink href="/login/forgotpassword">
      //       <div className="">
      //         <Body1 className="text-primary-darken15 cursor-pointer">Lupa Pasword?</Body1>
      //       </div>

      //     </MyLink>
        
      //   </div>

      // </>
  )
}

LoginPage.getLayout = function getLayout(page) {
  return (
      <LoginLayout>{page}</LoginLayout>
  )
}
