export default function CreateUserValidationSchema(yup) {
    return(
        yup.object({
            name: yup.string().required("Harap diisi"),
            role_id: yup.string().required("Harap diisi"),
            email: yup.string().required("Harap diisi"),
            position: yup.string().required("Harap diisi"),
            instance: yup.string().required("Harap diisi"),
            phone_number: yup.string().required("Harap diisi"),
            password: yup.string().required("Harap diisi"),
            password_confirmation: yup.string()
                .oneOf([yup.ref('password'), null], 'Password tidak cocok'),
        })
    )
}
