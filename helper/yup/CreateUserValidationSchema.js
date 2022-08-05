export default function CreateUserValidationSchema(yup) {
    return(
        yup.object({
            name: yup.string().required("Harap diisi"),
            role_id: yup.string().required("Harap diisi"),
            email: yup.string().required("Harap diisi"),
            instance: yup.string().required("Harap diisi"),
            phone_number: yup.string()
                        .required("Harap diisi")
                        .matches(
                        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                        "Harap isi dengan nomor Hp aktif"
                        ),
            password: yup.string().required("Harap diisi"),
            password_confirmation: yup.string()
                .oneOf([yup.ref('password'), null], 'Password konfirmasi tidak cocok'),
        })
    )
}
