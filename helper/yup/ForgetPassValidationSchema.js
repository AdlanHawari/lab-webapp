function ForgetPassValidationSchema(yup){
    return(
        yup.object({
            email: yup.string().email("Email tidak valid").required("Masukkan email anda")
        })
    )
}

export default ForgetPassValidationSchema