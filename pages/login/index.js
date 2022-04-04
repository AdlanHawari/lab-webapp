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

export default function LoginPage() {
  const auth = useAuth()

  function handleLogin(formData){
    // var requestOptions = {
    //   method: 'POST',
    //   body: formData,
    //   redirect: 'follow'
    // };

  // fetch("http://api.play1.musagreen.com/login", requestOptions)
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
    const res = auth.login(formData);
      if(!res){
        console.log(res)
        return res
      }
      else{
        console.log("final", res)
      }
      

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
        username: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
    })}
    onSubmit={ (values) => {

      let formData = handleFormData(values)
      //log the value
      for (let property of formData.entries()) {
        console.log(property[0], property[1]);
      }
      const data = handleLogin(formData)
      console.log("data",data)

    }}>
        {/* {formik=>{return  */}
        <Form id="login_form">
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
            <ErrorMessage name="username" component="p" className="text-error"/>
          </div>
          <div>
          <Field
                className="form-input w-full p-2.5 rounded-xl text-xs  border-solid border-2 border-grey-300"
                id="password"
                name="password"
                // type="password"
                type="text"
                placeholder="Password"
                />
            <ErrorMessage name="password" component="p" className="text-error"/>
          </div>
          <div className="py-8">
            <Button type="submit" disabled={false} buttonStyle={"primary_default"}>Log In</Button>
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
