function ChangePassValidationSchema(yup){
    return(
        yup.object({
            password: yup
            .string()
            .required("Masukkan password baru")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                "Minimal 8 karakter, satu huruf kapital dan satu angka"
              ),
            confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Password tidak sama')
        })

    )
}

export default ChangePassValidationSchema