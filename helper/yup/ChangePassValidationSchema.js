function ChangePassValidationSchema(yup){
    return(
        yup.object({
            new_password: yup
            .string()
            .required("Masukkan password baru")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                "Minimal 8 karakter, satu huruf kapital dan satu angka"
              ),
            confirmPassword: yup
            .string()
            .oneOf([yup.ref('new_password'), null], 'Password tidak sama')
            .required("Password tidak sama")
        })
    )
}

export default ChangePassValidationSchema