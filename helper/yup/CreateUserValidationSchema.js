export default function CreateUserValidationSchema(yup) {
    return(
        yup.object({
            user_create: yup.object({
                        name: yup.string().required("Harap diisi"),
                        role_id: yup.string().required("Harap diisi"),
                        position: yup.string().required("Harap diisi"),
                        email: yup.string().email("Harap diisi dengan email yg valid").required("Harap diisi"),
                        institution_id: yup.string().required("Harap diisi"),
                        phone: yup.string()
                                    .required("Harap diisi")
                                    .matches(
                                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                                    "Harap isi dengan nomor Hp aktif"
                                    ),
                        password: yup.string().required("Harap diisi"),
                        password_confirmation: yup.string()
                            .oneOf([yup.ref("password"), null], 'Password konfirmasi tidak cocok'),
                })
            })
    )
}
